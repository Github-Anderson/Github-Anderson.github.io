---
comments: true
---

# Bayesian Networks

## Bayesian Networks

#### Bayesian Networks Syntax

- **Nodes**: variables (with domains)
- **Arcs**: interactions

	- Indicate "direct influence" between variables
	- For now: imagine that arrows mean direct causation (in general, they may not!)
	- Formally: encode conditional independence

- *No cycle is allowed!*

- A directed, acyclic graph

- Conditional distributions for each node given its "parent variables" in the graph

> A Bayes net = Topology (graph) + Local conditional probabilities

#### Bayesian Networks Semantics

- Bayes nets encode joint distribution as product of conditional distributions on each variable:

$$
P(X_1, X_2, \dots, X_n) = \prod_{i=1}^n P(X_i \mid \text{Parents}(X_i))
$$

#### Conditional Independence Semantics

- Every variable is conditionally independent of its non-descendants given its parents
- Conditional independence semantics $\Leftrightarrow$ global semantics

#### Markov Blanket

- A variable’s Markov blanket consists of parents, children, children’s other parents
- Every variable is conditionally independent of all other variables given its Markov blanket

### D-Separation

- A triple is active in the following three cases

	- Causal chain $A \to B \to C$ where B is unobserved (either direction)
	- Common cause $A \leftarrow B \to C$ where B is unobserved
	- Common effect (aka v-structure) $A \to B \to C$ where $B$ or one of its descendents is observed

- A path is active if each triple along the path is active
- A path is blocked if it contains a single inactive triple
- If all paths from $X$ to $Y$ are blocked, then $X$ is said to be "d-separated" from $Y$ by $Z$
- If d-separated, then $X$ and $Y$ are conditionally independent given $Z$

### Markov Networks

> Markov network = undirected graph + potential functions

- For each clique (or max clique), a potential function is defined

	- A potential function is not locally normalized, i.e., it doesn't encode probabilities

- A joint probability is proportional to the product of potentials

$$
p(\mathbf{x}) = \frac{1}{Z} \prod_{C} \phi_C(\mathbf{x}_C)
$$

where $\phi_C(\mathbf{x}_C)$ is the potential over clique $C$ and

$$
Z = \sum_{\mathbf{x}} \prod_{C} \phi_C(\mathbf{x}_C)
$$

is the normalization constant (aka. partition function)

!!! tip "Bayesian Network $\to$ Markov Network"
	
	- Steps

		1. Moralization
		2. Construct potential functions from CPTs

	- The BN and MN encode the same distribution

!!! tip "Generative vs. Discriminative Models"

	- **Generative Models**:

		- A generative model represents a joint distribution $P(X_1, X_2, \dots, X_n)$
		- Both BN and MN are generative models

	- **Discriminative Models**:
		
		- In some scenarios, we only care about predicting queries from evidence
		- A discriminative model represents a conditional distribution
		
		$$
		P(Y_1, Y_2, \dots, Y_n \mid X)
		$$

		- It does not model $P(X)$

### Conditional Random Fields (CRFs)

- An extention of MN (aka. Markov Random Fields) where everything is conditioned on an input

$$
P(y \mid x) = \frac{1}{Z(x)} \prod_{C} \phi_C(y_C, x)
$$

where $\phi_C(y_C, x)$ is the potential over clique $C$ and

$$
Z(x) = \sum_{y} \prod_{C} \phi_C(y_C, x)
$$

is the normalization constant.

## BN Exact Inference

### Enumeration

- Step 1: Select the entries consistent with the evidence.
- Step 2: Sum out $H$ to get joint of Query and Evidence.
- Step 3: Normalize the joint to get the posterior.

> Problem: sums of exponentially many products!

### Variable Elimination

#### Factors

- A factor is a multi-dimensional array to represent $P(Y_1, \dots, Y_N \mid X_1, \dots X_M)$

	- If a variable is assigned (represented with lower-case), its dimension is missing (selected) from the array.

##### Operation 1: Join Factors

- Given multiple factors, build a new factor over the union of the variables involved.
- Each entry is computed by pointwise products.

##### Operation 2: Eliminate a Variable

- Take a factor and sum out (marginalize) a variable.

#### Variable Elimination Algorithm

- Query: $P(Q \mid E_1 = e_1, \dots, E_k = e_k)$

- Start with initial factors: Local CPTs (but instantiated by evidence)

- While there are still hidden variables (not $Q$ or evidence):

	1. Pick a hidden variable $H$.
	2. Join all factors mentioning $H$.
	3. Eliminate (sum out) $H$.

- Join all remaining factors and normalize.

### Variable Elimination on Polytrees

### Message Passing on General Graphs

## BN Approximate Inference

### Sampling

- Sampling from a Discrete Distribution

	- Step 1: Get sample $u$ from uniform distribution over $[0, 1)$

	- Step 2: Convert this sample $u$ into an outcome for the given distribution by associating each outcome $x$ with a $P(x)$-sized sub-interval of $[0, 1)$.

#### Prior Sampling

##### Steps

- Input: $N$ samples
- For $i = 1$ to $N$ (in topological order)
	- Sample $X_i$ from $P(X_i | \text{parents}(X_i))$

- Return $(X_1, X_2, ..., X_n)$

??? tip "Consistency"

	- This process generates samples with probability:
		$$
		S_{PS}(x_1, \dots, x_n) = \prod_{i=1}^n P(X_i = x_i \mid \text{parents}(X_i)) = P(x_1, \dots, x_n)
		$$

		i.e. the BN's joint probability.

	- Let the number of samples of an assignment be $N_{PS}(x_1, \dots , x_n)$.
	
	- So $\hat{P} (x_1, \dots, x_n) = N_{PS} (x_1, \dots, x_n) / N$.

	- Then 
		$$
		\lim_{N\to \infty} \hat{P}(x_1, \dots, x_n) = P(x_1, \dots, x_n)
		$$

	- i.e. the sampling procedure is **consistent**.

#### Rejection Sampling

##### Steps

- Input: evidence $e_1, ..., e_k$
- For $i = 1, 2, \dots, n$
	
	- Sample $x_i$ from $P(X_i \mid \text{parents}(X_i))$
	- If $X_i$ not consistent with evidence,
		- Reject: Return, and no sample is generated in this cycle.
	
- Return $(x_1, x_2, \dots, x_n)$

#### Likelihood Weighting

- Problem with rejection sampling:
	- If evidence is unlikely, rejects lots of samples.
	- Evidence not exploited as you sample.

- Idea: Fix evidence variables, sample the rest.
	- Problem: Sample distribution not consistent!
	- Solution: **Weight** each sample by probability of evidence variables given parents.

##### Steps

- Input: evidence $e_1, ..., e_k$
- $w = 1.0$
- For $i = 1, 2, \dots, n$
	
	- If $X_i$ is an evidence variable,
		- $x_i = \text{observed value}_i$ for $X_i$
		- Set $w = w \cdot P(X_i = x_i \mid \text{parents}(X_i))$
	- Else
		- Sample $x_i$ from $P(X_i \mid \text{parents}(X_i))$

- Return $(x_1, x_2, \dots, x_n)$ with weight $w$.

#### Gibbs Sampling

##### Gibbs Sampling

- Generate each sample by making a random change to the preceding sample
	
	- Evidence variables remain fixed. For each of the non-evidence variable, sample its value conditioned on all the other variables

	- $X_i' \sim P(x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n)$

	- In a Bayes network,

		$$
		P(x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n) = P(X_i \mid \text{Markov blanket}(X_i)) = \alpha P(X_i \mid u_1, \dots, u_m) \prod_{j} P(y_j \mid \text{Markov blanket}(Y_j))
		$$
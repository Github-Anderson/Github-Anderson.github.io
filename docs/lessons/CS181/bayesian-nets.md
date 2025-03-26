---
comments: true
---

# Bayesian Networks

### Bayesian Networks

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
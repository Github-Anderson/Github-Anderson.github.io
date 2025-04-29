---
comments: true
---

# Probabilistic Temporal Models

## Markov Model

- Value of $X$ at a given time is called the **state** (usually discrete, finite)

- The **transition model** P(Xt | Xt-1) specifies how the state evolves over time

- **Stationarity** assumption: same transition probabilities at all time steps

- Joint distribution $P(X_0,\dots, X_T) = P(X_0) \prod_t P(X_t \mid X_{t-1})$

!!! question "Are Markov models a special case of Bayes nets?"

	- Yes.
		- Directed acyclic graph, joint = product of conditionals

	- No.
		- Infinitely many variables (unless we truncate)
		- Repetition of transition model not part of standard Bayes net syntax

### Markov Assumption: Conditional Independence

- Markov assumption: $X_{t+1}, \dots$ are independent of $X_0, \dots, X_{t-1}$ given $X_t$.

	- Past and future independent given the present
	- Each time step only depends on the previous

- This is a first-order Markov model
- A $k$th-order model allows dependencies on k earlier steps

### Stationary Distributions

## Hidden Markov model

- Useful notation: $X_{a:b} = X_a , X_{a+1}, …, X_b$

- Filtering: $P(X_t \mid e_{1:t})$
	- belief state — posterior distribution over the most recent state given all evidence

- Prediction: $P(X_{t+k} \mid e_{1:t})$ for $k > 0$
	- posterior distribution over a future state given all evidence

- Smoothing: $P(X_k \mid e_{1:t})$ for $0 \leq k < t$
	- posterior distribution over a past state given all evidence

- Most likely explanation: $\argmax_{x_{0:t}} P(x_{0:t} \mid e_{1:t})$
	- Ex: speech recognition, decoding with a noisy channel

### Filtering: Forward Algorithm

- Filtering: infer current state given all evidence
	- Aim: a recursive filtering algorithm of the form
	- $P(X_{t+1} \mid e_{1:t+1}) = g(e_{t+1}, P(X_t \mid e_{1:t}) )$

$$
P(X_{t+1} \mid e_{1:t+1}) = \alpha P(e_{t+1} \mid X_{t+1}) \sum_{x_t} P(x_t \mid e_{1:t}) P(X_{t+1} \mid x_t)\\\alpha = 1 / P(e_{t+1} \mid e_{1:t})
$$

### MLE: Viterbi Algorithm

- State trellis: graph of states and transitions over time
	
- The product of weights on a path is proportional to that state sequence’s probability

	$$
	P(x_0) \prod_t P(x_t \mid x_{t-1}) P(e_t \mid x_t) = P(x_{0:t} , e_{1:t})
	$$

- Viterbi algorithm computes best paths $\argmax_{x_{0:t}} P(x_{0:t} \mid e_{1:t})$

!!! tip "Forward vs. Viterbi"

	- Forward Algorithm (sum)
		For each state at time $t$, keep track of the total probability of all paths to it.

		$$
		f_{1:t+1} = \text{FORWARD}(f_{1:t} , e_{t+1}) = \alpha P(e_{t+1} \mid X_{t+1}) \sum_{x_t} P(X_{t+1} \mid x_t) f_{1:t} [xt]
		$$
	
	- Viterbi Algorithm (max)
		For each state at time $t$, keep track of the maximum probability of any path to it.

		$$
		m_{1:t+1} = \text{VITERBI} (m_{1:t} , e_{t+1}) = P(e_{t+1} \mid X_{t+1}) \max_{x_t} P(X_{t+1} \mid x_t) m_{1:t} [x_t]
		$$

## Dynamic Bayesian network

!!! tip "DBN vs. HMM"

	- Every HMM is a DBN
	- Every discrete DBN can be represented by a HMM
	- Each HMM state is Cartesian product of DBN state variables

### Exact Inference in DBNs

- Variable elimination applies to dynamic Bayes nets

- Offline: "unroll" the network for $T$ time steps, then eliminate variables to find $P(X_T \mid e_{1:T})$

- Online: unroll as we go, eliminate all variables from the previous time step

### Particle Filtering

#### Propagate Forward

#### Observe

#### Resample
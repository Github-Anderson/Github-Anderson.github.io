---
comments: true
---

# Markov Decision Process

## Markov Decision Process (MDP)

- An MDP is defined by:
	- A set of states $s \in S$
	- A set of actions $a \in A$
	- A transition function $T(s, a, s')$
		- Probability that from $s$ leads to $s'$, i.e., $P(s' | s, a)$
		- Also called the model or the dynamics
	
	- A reward function $R(s, a, s')$
		- Sometimes just $R(s)$ or $R(s')$
	- A start state
	- Maybe a terminal state

- MDPs are non-deterministic search problems
	- One way to solve them is with expectimax search

## Quantities

### Policy

- In deterministic single-agent search problems, we wanted an optimal plan, or sequence of actions, from start to a goal

- For MDPs, we want an optimal policy $\pi^*: S \to A$ (a mapping from states to actions)
	- A policy $\pi$ gives an action for each state
	- An optimal policy is one that maximizes expected utility if followed
	- An explicit policy defines a reflex agent

### Discounting

- Rewards in the future are considered less valuable than immediate rewards

- Discount Factor $\gamma \in [0, 1]$
	- $\gamma = 0$ means only immediate rewards matter
	- $\gamma = 1$ means all rewards matter equally
	- $\gamma \in (0, 1)$ means future rewards are discounted
	- $\gamma$ is a hyperparameter

- The utility of a sequence of rewards is the sum of rewards, each discounted by a factor of $\gamma$ raised to the power of the number of steps into the future.

## Solve MDP

#### Optimal Quantities

- The value (utility) of a state $s$:
	- $V^*(s) = \text{expected utility starting in }s \text{ and acting optimally}$

- The value (utility) of a $q$-state $(s,a)$:
	- $Q^*(s,a) = \text{expected utility starting out having taken action a from state }s \text{sand (thereafter) acting optimally}$

- The optimal policy:
	- $\pi^*(s) = \text{optimal aciton from state }s$

#### Values of States

- Expected utility under optimal action
- Compute using expectimax search

- Recursive definition of value:

$$
\begin{align*}
V^*(s) &= \max_a Q^*(s,a) \\
Q^*(s,a) &= \sum_{s'} T(s,a,s') \left[ R(s,a,s') + \gamma V^*(s') \right] \\
V^*(s) &= \max_a \sum_{s'} T(s,a,s') \left[ R(s,a,s') + \gamma V^*(s') \right]
\end{align*}
$$

#### Problems with Expectimax

!!! warning "Problem 1: State are repeated"

	- Idea: Only compute needed quantities once

!!! warning "Problem 2: Tree goes on forever"

	- Idea: Do a depth-limited computation, but with increasing depths until change is small
	- Note: deep parts of the tree eventually don’t matter if $\gamma < 1$

### Value Iteration

#### Time-Limited Values

- Define $V_k(s)$ to be the optimal value of $s$ if the game ends in $k$ more time steps

- Start with $V_0(s) = 0$: no time steps left means an expected reward sum of zero
- Given vector of Vk(s) values, do one ply of expectimax from each state:

$$
V_{k+1}(s) \leftarrow \max_a \sum_{s'} T(s,a,s') \left[ R(s,a,s') + \gamma V_k(s') \right]
$$

- Repeat until convergence
- Complexity of each iteration: $O(S^2A)$
- Theorem: will converge to unique optimal values

### Policy Iteration

- An alternative approach for value iteration
	- Step 1: Policy evaluation: calculate utilities for some fixed (not optimal) policy.
	- Step 2: Policy improvement: update policy using one-step look-ahead with resulting converges (but not optimal!) utilities as future values.

#### Policy Evaluation

#### Policy Improvement
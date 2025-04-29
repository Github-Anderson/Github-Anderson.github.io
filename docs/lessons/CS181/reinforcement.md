---
comments: true
---

# Reinforcement Learning

## Reinforcement Learning

- MDP without transition function $T(s, a, s')$ and reward function $R(s, a, s')$.

## Model-Based Learning

- Model Based Idea:
	- Learn an approximate model based on experiences
	- Solve for values as if the learned model was correct

- Step 1 : Learn empirical MDP model
	- Count outcomes s ’ for each s, a
	- Normalize to give an estimate of $\hat{T}(s, a, s')$
	- Discover each $\hat{R}(s, a, s')$ when we experience

- Step 2 : Solve the learned MDP
	- For example, use value iteration, as before

## Model-Free Learning

### Passive Reinforcement Learning

#### Direct Evaluation

#### Temporal Difference Learning

### Active Reinforcement Learning

#### Q-Learning

$$
Q_{k+1}(s, a) \leftarrow \sum_{s'} P(s' \mid s, a) \left[ R(s, a, s') + \gamma \max_{a'} Q_k(s', a') \right]
$$

Q-Learning: Learn $Q(s,a)$ as you go

#### Policy Learning
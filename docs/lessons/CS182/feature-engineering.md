---
comments: true
---

# Feature Engineering & Regularization

## Feature Engineering

## Regularization

### Overfitting

- Definition: The problem of **overfitting** is when the model captures the noise in the training data instead of the underlying structure.

### Regularization

- Given objective function $J(\theta)$.
- Goal is to find: $\hat{\theta} = \argmin_{\theta} J(\theta) + \lambda r(\theta)$.
- Key idea: Define regularizer $r(\theta)$ s.t. we tradeoff between fitting the data and keeping the model simple.
- Choose form of $r(\theta)$ based on the model complexity.
	- Example: $q$-norm

$$
\|\boldsymbol{\theta}\|_q = \left( \sum_{m=1}^M |\theta_m|^q\right)^{\frac{1}{q}}
$$
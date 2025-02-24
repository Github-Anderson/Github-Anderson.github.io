---
comments: true
---

# Supervised Binary Classification

### Function Approximation

#### Notation

- Feature space, $\mathcal{X}$; Label space, $\mathcal{Y}$
- (*Unknown*) Target function, $c^*: \mathcal{X} \to \mathcal{Y}$
- Training dataset:

$$
\mathcal{D} = \left\{\left(\mathbf{x}^{(1)}, c^*\left(\mathbf{x}^{(1)}\right) = y^{(1)}\right), \left(\mathbf{x}^{(2)}, y^{(2)}\right), \dots, \left(\mathbf{x}^{(N)}, y^{(N)}\right)\right\}
$$

- Example: $\left(\mathbf{x}^{(n)}, y^{(n)}\right) = \left(x_1^{(n)}, x_2^{(n)}, \dots, x_D^{(n)}, y^{(n)}\right)$
- Hypothesis space: $\mathcal{H}$
- Goal: find a classifier, $h \in \mathcal{H}$, that best approximates $c^*$

#### Evaluation

- Loss function, $P: \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$

	- Defines how "bad" preditions, $\hat{y} = h(x)$, are compared to the true labels, $y = c^*(\mathbf{x})$
	- Common choices
		
		1. Squared loss (for regression): $\ell (y, \hat{y}) = (y-\hat{y})^2$
		2. Binary or 0-1 loss (for classification): $\ell(y,\hat{y}) = \mathbb{1} (y\neq \hat{y})$
	- Error rate:
$$
\text{err}(h, \mathcal{D}) = \frac{1}{N} \sum_{n=1}^N \mathcal{1}\left(y^{(n)}\neq \hat{y}^{(n)}\right) 
$$

!!! quote "Different Kinds of Error"

	- Training error rate = $\text{err}(h, \mathcal{D}_{\text{train}})$
	- Test error rate = $\text{err}(h, \mathcal{D}_{\text{test}})$
	- True error rate = $\text{err}(h)$ = the error rate of $h$ on all possible examples

### Decision Trees

#### Splitting Criterion

- A **splitting criterion** is a function that measures how good or useful splitting on a particular feature is *for a specified dataset*.
- Idea: when deciding which feature to split on, use the one that optimizesthe splitting criterion.
- Potential splitting criteria:
	- Training error rate (minimize)
 	- Gini impurity (minimize) → CART algorithm
	- Mutual information (maximize) → ID3 algorithm

#### Entropy

The entropy of a *random variable* is

$$
H(X) = - \sum_{v \in V(X)} P(X = v) \log_2 (P(X = v))
$$

where $X$ is a (discrete) random variable, $V(X)$ is the set of possible values $X$ can take on.

The entropy of a set is

$$
H(S) = - \sum_{v \in V(S)} \frac{|S_v|}{|S|} \log_2 \left(\frac{|S_v|}{|S|}\right)
$$

where $S$ is a collection of values, $V(S)$ is the set of unique values in $S$, $S_v$ is the collection of elements in $S$ with value $v$

#### Mutual Information

The mutual information between *two random variables* is

$$
I(Y;X) = H(Y) - H(Y \mid X) = H(Y) - \sum_{v \in V(X)} P(X = v) H(Y \mid X = v)
$$

The mutual information between a *feature and the label* is

$$
I(y;x_d) = H(y) - H(y \mid x_d) = H(y) - \sum_{v \in V(x_d)} f_v(H(Y_{x_d = v}))
$$

where $x_d$ is a feature and $y$ is the set of all labels, $V(x_d)$ is the set of possible values $x_d$ can take on, $f_v$ is the fraction of data points where $x_d = v$, $Y_{x_d = v}$ is the set of all labels where $x_d = v$.
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
- Idea: when deciding which feature to split on, use the one that optimizes the splitting criterion.
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

#### Pseudocode

```python
def train(D):
	store root = tree_recurse(D)
def tree_recurse(D'):
	q = new node()
	base case - if (D' is empty or all labels in D' are the same or all features in D' are identical or some other stopping criterion):
		q.label = majority_vote(D')
	recursion - else:
		return q
```

#### Inductive Bias

- The inductive bias of a machine learning algorithm is the principle by which it generalizes to unseen examples

- What is the inductive bias of the ID3 algorithm?

	- Try to find the **smallest decision** tree that achieves a **low/zero training error** with **high mutual information** features at the top

- Occam's razor: try to find the "simplest" (e.g., smallest decision tree) classifier that explains the training dataset

#### Pros & Cons

- Pros
	- Interpretable
	- Efficient (computational cost and storage)
	- Can be used for classification and regression tasks
	- Compatible with categorical and real-valued features
- Cons
	- Learned greedily: each split only considers the immediate impact on the splitting criterion
	
		- Not guaranteed to find the smallest (fewest number of splits) tree that achieves a training error rate of 0.

#### Overfitting

1. Split data in two: training dataset and validation dataset.

2. Grow the full tree using the training dataset.

3. Repeatedly prune the tree:
	
	- Evaluate each split using a validation dataset by comparing the validation error rate **with and without** that split.
	- (Greedily) remove the split that most decreases the validation error rate.
	- Stop if no split improves validation error, otherwise repeat.

!!! warning "The Duck Test"

	If it looks like a duck, swims like a duck, and quacks like a duck, then it probably *is* a duck.

### $k$-Nearest Neighber (KNN)

```python
def train(D):
	Store D

def h(x'):
	Let x = the point in D that is nearest to x'
	return y
```

- Requires no training!
- Always has zero training error!
	- A data point is always its own nearest neighbor.

!!! question "How can we handle ties for even values of $k$?"

	- Consider another point.
	- Remove farthest of $k$ points.
	- Weight votes by distance.
	- Consider another distance metric.

!!! question "What is the inductive bias of KNN?"

	1. Similar points should have similar labels.
	2. All dimensions are created equally!

	![](img/knn.png)

### Model Selection

=== "Statistics"

	- Def: a **model** defines the data generation process. (i.e. a set or family of parametric probability distributions)
	- Def: **model parameters** are the values that give rise to a particular probability distribution in the model family.
	- Def: **learning** (aka.estimation) is the process of finding the parameters that best fit the data.
	- Def: **hyperparameters** are the parameters of a prior distribution over parameters.
	
=== "Machine Learning"

	- Def: (loosely) a **model** defines the hypothesis space over which learning performs its search.
	- Def: **model parameters** are the numeric values or structure selected by the learning algorithm that give rise to a hypothesis.
	- Def: the **learning algorithm** defines the data-driven search over the hypothesis space. (i.e. search for good parameters)
	- Def: **hyperparameters** are the tunable aspects of the model, that the learning algorithm does not select.

!!! question "If "learning is all about picking the best **parameters**, how do we pick the best **hyperparameters**?"

### Cross-Validation

- Cross validation is a method of estimating loss on held out data.
	- Input: training data, learning algorithm, loss function. (e.g. 0/1 error)
	- Output: an estimate of loss function on held-out data.

- Key idea: rather than just a single "validation" set, use many!

### Hyperparameter Optimization 

- Lots of methods for hyperparameter optimization:
	- Grid search
	- Random search
	- Bayesian optimization
	- Graduate-student descent

### Online Learning

- Batch Learning: We have access to the entire training dataset at once.
- Online Learning: A common alternative is the *online* setting, where examples arrive gradually and we learn continuously.

- Key idea: Try to learn this hyperplane directly.
- Directly modeling the hyperplane would use a decision function:

$$
h(t) = \text{sign}(\boldsymbol{\theta}^{\top} t)
$$

### Experimental Design

|                                 | **Input**                                                  | **Output**             | **Notes**                                                                                                                      |
|---------------------------------|------------------------------------------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Training**                    | training dataset <br> hyperparameters                      | best model parameters  | We pick the best model parameters by learning on the training dataset for a fixed set of hyperparameters.                      |
| **Hyperparameter Optimization** | training dataset <br> validation dataset                   | best hyperparameters   | We pick the best hyperparameters by learning on the training data and evaluating error on the validation error.                |
| **Cross-Validation**            | training dataset <br> validation dataset                   | cross-validation error | We estimate the error on held out data by repeatedly training on N-1 folds and predicting on the held-out fold.                |
| **Testing**                     | test dataset <br> hypothesis (i.e. fixed model parameters) | test error             | We evaluate a hypothesis corresponding to a decision rule with fixed model parameters on a test dataset to obtain test error.  |


### The Perceptron Algorithm

!!! abstract "(Online) Perceptron Algorithm"

	- Initialize the weight vector and intercept to all zeros:
	
	$$
	\mathbf{w} = \begin{bmatrix} 0 & 0 & \cdots & 0 \end{bmatrix} \text{ and } b = 0
	$$

	- For $t = 1,2,3,\dots$

		- Receive an unlabeled example, $x^{(t)}$
		- Predict its label, $\hat{y} = \text{sign} (\mathbf{w}^{\top} \mathbf{x} + b) = \begin{cases} +1, &\text{if }\mathbf{w}^{\top} \mathbf{x} + b \geq 0 \\ -1, &\text{otherwise}\end{cases}$
		- Observe its true label, $y^{(t)}$
		- If we misclassified an example $(y^{(t)} \neq \hat{y})$:
			- $\mathbf{w} \leftarrow \mathbf{w} + y^{(t)} \mathbf{x}^{(t)}$
			- $b \leftarrow b + y^{(t)}$

#### Perceptron Inductive Bias

1. Decision boundary should be linear
2. Recent mistakes are more important than older ones (and should be corrected immediately)

### Perceptron Mistake Bound

- Def: For a **binary classification** problem, a set of examples $S$ is **linearly separable** if there exists a linear decision boundary that can separate the points.
- Def: The **margin** $\gamma$ for a dataset D is the greatest possible distance between a linear separator and the closest data point in $D$ to that linear separator.
- Guarantee: If some data has margin $\gamma$ and all points lie inside a ball of radius $R$ rooted at the origin, then the online preceptron algorithm makes $\leq (R/\gamma)^2$ mistakes.

!!! question "What if Not Linearly Separable?"

	- Learn a more complex class of functions.
	- Use a kernel. (a neat solution that attracted a lot of attention)
	- Use a deep network.
	- Combine kernels and deep networks.

### Kernel Methods

- Definition: $K(\cdot, \cdot)$ is a kernel if it can be viewed as a legal definition of inner product:
	- $\exists \phi(x): X \to R^N$ s.t. $K(x,z) = \phi(x) \cdot \phi(z)$
		- Range of $\phi$ is the $\boldsymbol{\phi}-$**space**.
		- $N$ can be very large.
	- But think of $\phi$ as **implicit**, not explicit.

#### Kernelizing the Perceptron Algorithm

- Set $t=1$, start with the all zero vector $w_1$.
- Given example $x$, predict + iff $w_t \cdot x \geq 0$.
- On a mistake, update as follows:
	- Mistake on positive, $w_{t+1} \leftarrow w_t + x$.
	- Mistake on negative, $w_{t+1} \leftarrow w_t - x$.
- Given $x$, predict + iff

$$
a_{i_1} K(x_{i_1}, x) + \cdots + a_{i_{t-1}} K(x_{i_{t-1}}, x) \geq 0
$$

- On the $t$-th mistake, update as follows:
	- Mistake on positive, $a_{i_t} \leftarrow 1$, store $x_{i_t}$.
	- Mistake on negative, $a_{i_t} \leftarrow -1$, store $x_{i_t}$.

- Example:
	- Linear:
	- Polynomial:
	- Gaussian:
	- Laplace Kernel:

#### Properties of Kernels

!!! abstract "Mercer's Theorem"

	$K$ is a kernel if and only if:

	- $K$ is symmetric: $K(x,z) = K(z,x)$
	- For any set of training points $x_1, x_2, \dots, x_m$ and for any $a_1, a_2, \dots, a_m\in R$, we have:

	$$\sum_{i,j} a_i a_j K(x_i, x_j) \geq 0$$

	$$a^{\top} K a \geq 0$$

	i.e. $K = (K(x_i, x_j))_{i, j = 1, \dots, m}$ is positive semi-definite.

## Support Vector Machines

Find a margin $\gamma$ of a set of examples $S$ is the **maximum** $\gamma_w$ over all linear separators $w$.

Directly optimize for the **maximum margin separator**: SVMs.

!!! question "What if data is not perfectly linearly separable?"

	Use a kernel.
	
### The Importance of SVM

#### Why are margins important?

- A **large margin** leads to better generalization, meaning the classifier performs well on unseen data.
- In Perceptron learning, the number of mistakes depends on the **margin size** but is **independent of data dimensionality**.
- SVM maximizes the **geometric margin**, ensuring a more robust decision boundary.

#### The Primal Form of the SVM Optimization Problem

##### Objective (Primal Form):
SVM aims to **find a hyperplane that maximizes the margin** while correctly classifying training data.

##### Hard-margin SVM (for linearly separable data)

\[
\min_{w, b} \quad \frac{1}{2} ||w||^2
\]

\[
\text{s.t.} \quad y_i (w \cdot x_i + b) \geq 1, \quad \forall i
\]

- The constraint ensures that all points are correctly classified with a margin of at least **1**.

##### Soft-margin SVM (for non-separable data)

\[
\min_{w, b, \xi} \quad \frac{1}{2} ||w||^2 + C \sum \xi_i
\]

\[
\text{s.t.} \quad y_i (w \cdot x_i + b) \geq 1 - \xi_i, \quad \xi_i \geq 0, \quad \forall i
\]

- **Slack variables** \( \xi_i \) allow some misclassification while trying to keep the margin large.
- **Hyperparameter** \( C \) balances margin maximization and classification errors.

#### The Dual Form of the SVM Optimization Problem

To solve SVM efficiently, we use **Lagrange Duality** to convert the primal problem into a dual formulation.

##### Dual Optimization Problem

\[
\max_{\alpha} \sum_{i=1}^{m} \alpha_i - \frac{1}{2} \sum_{i=1}^{m} \sum_{j=1}^{m} \alpha_i \alpha_j y_i y_j (x_i \cdot x_j)
\]

\[
\text{s.t.} \quad 0 \leq \alpha_i \leq C, \quad \sum_{i=1}^{m} \alpha_i y_i = 0
\]

- **\( \alpha_i \)** are **Lagrange multipliers** that determine the importance of each training sample.
- **The decision boundary is defined using only the support vectors** (points with nonzero \( \alpha_i \)).
- The **kernel trick** can be applied in the dual form (see next section).

#### Kernelizing SVM

##### Why use kernels?

- **Problem**: Some data is not **linearly separable** in its original space.
- **Solution**: Map data into a higher-dimensional space where it **becomes linearly separable**.

##### Kernel Trick

Instead of computing the transformation explicitly, we use a **kernel function** \( K(x_i, x_j) \) to compute inner products in the higher-dimensional space:

\[
K(x_i, x_j) = \phi(x_i) \cdot \phi(x_j)
\]

##### Common Kernel Functions

1. **Linear Kernel**: \( K(x_i, x_j) = x_i \cdot x_j \)  
   - Used when data is **linearly separable**.
2. **Polynomial Kernel**: \( K(x_i, x_j) = (x_i \cdot x_j + c)^d \)  
   - Captures polynomial relationships between features.
3. **Radial Basis Function (RBF) Kernel**: \( K(x_i, x_j) = \exp\left(-\frac{||x_i - x_j||^2}{2\sigma^2}\right) \)  
   - Maps data into **infinite-dimensional** space.
4. **Sigmoid Kernel**: \( K(x_i, x_j) = \tanh(\beta x_i \cdot x_j + c) \)  
   - Similar to neural network activation functions.

##### Why is the kernel trick powerful?

- **No need to compute high-dimensional transformations explicitly**.
- **Computationally efficient**, making SVM applicable to complex datasets.

---

### **Summary**

1. **Margins are crucial** for improving generalization and reducing misclassification.
2. **The primal SVM formulation** directly optimizes the margin, allowing for soft constraints.
3. **The dual SVM formulation** enables efficient computation and supports kernel methods.
4. **Kernelized SVM** extends SVM to non-linear decision boundaries without explicit feature transformations.

SVM remains one of the most powerful and interpretable machine learning algorithms, especially for classification problems with **structured data**.


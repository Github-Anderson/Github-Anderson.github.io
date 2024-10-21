---
comments: true
---

# Divide and Conquer

- **Divide**: Partition the main question into subquestions.
- **Conquer**: Solve the sub-questions recursively.
- **Combine**: Combine the solutions.

### Recurrence

Use an equation or an inequation to describe the worst case of an algorithm.

e.g. the recurrence of *Merge Sort* is

$$
T(n) = 
\begin{cases}
	\Theta(1), &n=1\\
	2T(n/2)+\Theta(n), & n>1
\end{cases}
$$

We can get $T(n) = \Theta(n\log n)$ by solving it.

When analyzing the time complexity of recursive algorithms, several methods can be used to solve recurrence relations effectively. Below are three widely used techniques:

#### Iteration Method (Substitution)

This method involves repeatedly substituting the recurrence relation into itself until it reduces to a base case with constant complexity. e.g. $T(0)$ or $T(1)$.

#### Recursion Tree Method

This method visualizes the recurrence as a tree, with each recursive call represented as a node. The goal is to determine the total contribution of all nodes across every level.

##### Process

1. Treat each T(n) as a node in the recursion tree, with children representing recursive calls.
2. Calculate the total work done at each level of the tree.
3. Determine the height (or depth) of the tree, which corresponds to the number of levels.
4. Sum the contributions from all levels to get the overall time complexity.

#### Master Theorem

Applicable when the recurrence fits the form $T(n) = aT(n/b) + O(n^d)$.

- If $a > b^d$, 
$$
T(n) = O(n^{\log_b a})
$$

- If $a = b^d$,
$$
T(n) = O(n^d\log n)
$$

- If $a < b^d$,
$$
T(n) = O(n^d)
$$
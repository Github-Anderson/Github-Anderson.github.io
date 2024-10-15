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

We can get $T(n) = \Theta(n\lg n)$ by solving it.

There are three methods could be use to solve a recurrence:

#### Iteration Method (Substitution)

#### Recursion Tree Method

#### Master Theroem

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
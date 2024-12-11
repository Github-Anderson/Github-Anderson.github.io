---
comments: true
---

# Greedy

!!! quote "Coin changing"

	> Consider this commonplace example:
	>
	> - Making the exact change with the minimum number of coins.
	> - Consider the Euro denominations of 1, 2, 5, 10, 20, 50 cents.

	- The maximum number of coins for any digit is three.
	- Thus, to make change for anything less than 1 requires at most six coins.
	- The solution is optimal.

## Definition

A greedy algorithm is an algorithm which has:

- A set of partial solutions from which a solution is built.
- An *objective function* which assigns a value to any partial solution.

Then given a partial solution, we

- Consider possible extensions of the partial solution.
- Discard any extensions which are not feasible.
- Choose that extension which minimizes the object function.

This continues until some criteria has been reached.

## Examples

### Interval Scheduling

#### Description

- Job $j$ starts at $s_j$ and finishes at $f_j$.
- Two jobs are compatible if they don't overlap.
- Goal: find maximum subset of mutually compatible jobs.

#### Solve

- Sort the processes on their end times.
- Keep choosing the first avalible process until finished.

!!! abstract "Theorem"

	The earliest-finish-time-first algorithm is optimal.

	- Assume greedy is not optimal.
	- Let $i_1, i_2, \dots, i_k$ denote set of jobs selected by greedy.
	- Let $j_1, j_2, \dots, j_m$ denote set of jobs in an optimal solution with $i_1 = j_1, i_2 = j_2, \dots, i_r = j_r$ for the largest possible value of $r$.
		- Job $i_{r+1}$ exists and finishes no later than $j_{r+1}$.
		- Job $i_{k}$ finishes no later than $j_k$, but $m>k$, the greedy algorithm should not stop, as job $j_k+1$ can be chosen.

### Interval Partitioning

#### Description

- Lecture $j$ starts at $s_j$ and finishes at $f_j$.
- Goal: find minimum number of classrooms to schedule all lectures so that no two lectures occur at the same time in the same room.

#### Solve

- Sort the lectures by start times and renumber so that $s_1 \leq s_2 \leq s_2 \leq \cdots \leq s_n$.

- The depth of a set of open intervals is the maximum number of intervals that contain any given point.
$$
\text{number of classrooms needed} \geq \text{depth}
$$

!!! abstract "Theorem"

	The earliest-start-time-first algorithm is optimal.

	- Let $d$ = number of classrooms that the algorithm allocates.
	- Classroom $d$ is opened because we needed to schedule a lecture, say j, that is incompatible with a lecture in each of $d-1$ other classrooms.
	- Thus, these $d-1$ lectures each end after $s_j$.
	- Since we sorted by start time, each of these incompatible lectures start no late than $s_j$.
	- Thus, we have $d$ lectures overlapping at time $s_j + \epsilon$.
	
### Scheduling to minimize lateness

#### Description

- Single resource processes one job at a time.
- Job $j$ requires $t_j$ units of processing time and is due at time $d_j$.
- Lateness: $\ell_j = \max \{0, f_j - d_j\}$.
- Goal: Schedule all jobs to minimize **maximum** lateness $L = \max_j \ell_j$.

#### Solve

- Solve the processes by due time $d_j$ in ascending order.
- Choose and process jobs.
- Count the total lateness.

!!! abstract "Theorem" 

	The earliest-deadline-first schedule $S$ is optimal.

	- No idle time.
	- No inversions.
	- Proved by induction.

### Optimal caching

#### Description

- Cache with capacity to store $k$ items.
- Sequence of $m$ item requests $d_1, d_2, \dots, d_m$.
- Goal: Eviction schedule that minimizes the number of evictions.

#### Solve

Farthest-in-future. Evict item in the cache that is not requested until farthest in the future.

!!! abstract "Theorem"

	The earliest-deadline-first schedule $S$ is optimal.

---

# Notes for Evaluating Greedy Algorithms

## Judgment Process

### Step 1: Determine Optimality

For each greedy algorithm:

!!! quote "Does it always find an optimal solution?"

    - If yes, proceed to proof by "Greedy Stays Ahead" arguments.
    - If no, provide a counterexample with details.

## Counterexample (if algorithm is not always optimal)

### Details to include:

1. **Input**: Specify the input to the algorithm.
2. **Greedy Solution**: Show the solution produced by the greedy algorithm.
3. **Optimal Solution**: Compare with the correct optimal solution.

## Proof of Optimality (if algorithm always finds optimal solution)

### Use "Greedy Stays Ahead" Arguments:

#### 1. Definition of Sub-Problem Solutions

- Define a sequence of sub-problems \( X_1, X_2, X_3, \ldots \) solved iteratively by the greedy algorithm.

- Example: In the coin change problem, \( X_i \) is the multiset of coins summing to \( i \).

#### 2. Definition of Optimality

- Specify a measurement \( m_i(X_i) \) for evaluating sub-problem solutions.

- Define the optimal solution for sub-problem \( i \) as:

\[
X_i^* \in \arg\max\{m_i(X_i)\} \quad \text{or} \quad X_i^* \in \arg\min\{m_i(X_i)\}
\]

- Example: In the coin change problem, \( m_i(X_i) = |X_i| \), the number of coins, and the goal is to minimize \( m_i(X_i) \).

#### 3. Proof of "Greedy Stays Ahead"

- Prove by induction:

\[
m_{i-1}(X_{i-1}) = m_{i-1}(X_{i-1}^*) \implies m_i(X_i) = m_i(X_i^*)
\]

- Usually, prove by contradiction:

\[
m_{i-1}(X_{i-1}) \neq m_{i-1}(X_{i-1}^*) \impliedby m_i(X_i) \neq m_i(X_i^*)
\]

#### 4. Structure of Proof

- Base case: Show the greedy algorithm produces an optimal solution for the first sub-problem.
- Inductive step: Assume optimality up to \( i-1 \); prove optimality for \( i \).

### Example Framework for Proof:

#### 1. Sub-problem solutions \( X_i \)

- Define \( X_i \) based on what the algorithm produces after \( i \)-th iteration.

#### 2. Optimality measurement \( m_i(X_i) \)

- Define \( m_i \) to evaluate solutions.

#### 3. Induction

- Base case: Show \( m_1(X_1) = m_1(X_1^*) \).
- Inductive step:

\[
    m_{i-1}(X_{i-1}) = m_{i-1}(X_{i-1}^*) \implies m_i(X_i) = m_i(X_i^*)
\]

This structure ensures clarity and rigor in evaluating greedy algorithms.
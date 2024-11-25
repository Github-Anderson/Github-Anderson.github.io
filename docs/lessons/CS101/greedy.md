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

## Interval Scheduling

### Description

- Job $j$ starts at $s_j$ and finishes at $f_j$.
- Two jobs are compatible if they don't overlap.
- Goal: find maximum subset of mutually compatible jobs.

### Solve

- Sort the processes on their end times.
- Keep choosing the first avalible process until finished.

!!! abstract "Theorem"

	The earliest-finish-time-first algorithm is optimal.

	- Assume greedy is not optimal.
	- Let $i_1, i_2, \dots, i_k$ denote set of jobs selected by greedy.
	- Let $j_1, j_2, \dots, j_m$ denote set of jobs in an optimal solution with $i_1 = j_1, i_2 = j_2, \dots, i_r = j_r$ for the largest possible value of $r$.
		- Job $i_{r+1}$ exists and finishes no later than $j_{r+1}$.
		- Job $i_{k}$ finishes no later than $j_k$, but $m>k$, the greedy algorithm should not stop, as job $j_k+1$ can be chosen.

## Interval Partitioning

### Description

- Lecture $j$ starts at $s_j$ and finishes at $f_j$.
- Goal: find minimum number of classrooms to schedule all lectures so that no two lectures occur at the same time in the same room.

### Solve

- Sort the lectures by start times and renumber so that $s_1 \leq s_2 \leq s_2 \leq \cdots \leq s_n$.

- The depth of a set of open intervals is the maximum number of intervals that contain any given point.
$$
\text{number of classrooms needed} \geq \text{depth}
$$

!!! abstract "Theorem"

	Earliest-start-time-first algorithm is optimal.

	- Let $d$ = number of classrooms that the algorithm allocates.
	- Classroom $d$ is opened because we needed to schedule a lecture, say j, that is incompatible with a lecture in each of $d-1$ other classrooms.
	- Thus, these $d-1$ lectures each end after $s_j$.
	- Since we sorted by start time, each of these incompatible lectures start no late than $s_j$.
	- Thus, we have $d$ lectures overlapping at time $s_j + \epsilon$.
	
## Scheduling to minimize lateness

## Optimal caching


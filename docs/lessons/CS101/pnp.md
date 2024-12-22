---
comments: true
status: star
---

# Reductions, P and NP

## Poly-time Reductions

!!! question "Which problems will we be able to solve in practice?"

	Those with **polynomial time** algorithms.

### $X \leq _{\text{ P}} Y$

#### Definition

A poly-time from problem $X$ reduces to problem $Y$ (denoted $X \leq _{\text{ P}} Y$) means that 

!!! quote ""

	Any instance of $X$ can be solved using

	- Polynomial number of standard computational steps,
	- Polynomial number of calls to oracle that solves problem $Y.

- If $X \leq _{\text{ P}} Y$ and $Y$ can be solved in polynomial time, then $X$ can be solved in polynomial time.
- If $X \leq _{\text{ P}} Y$ and $X$ cannot be solvedd in polynomial time, then $Y$ cannot be solved in polynomial time.
- If both $X \leq _{\text{ P}} Y$ and $Y \leq _{\text{ P}} X$, $X \equiv _{\text{ P}} Y$. i.e. $X$ can be solved in polynomial time iff $Y$ can be.

## Packing and Covering Problems

### Independent Set

- **Vertex-Cover**: Given a graph $G = (V, E)$ and an integer $k$, is there a subset of $k$ (or more) vertices such that no two are adjacent?

$$
\text{Independent-Set} \equiv _{\text{ P}} \text{Vertex-Cover}
$$

$S$ is an independent set of size $k$ iff $V-S$ is a vertex cover of size $n-k$.

- **Set-Cover**: Given a set $U$ of elements, al collection $S$ of subsets of $U$, and an integer $k$, are there $\leq k$ of these subsets whose union is equal to $U$?

$$
\text{Vertex-Cover} \leq _{\text{ P}} \text{Set-Cover}
$$

## Constraint Satisfaction Problems

## Graph Coloring

## P vs. NP

## NP-Complete
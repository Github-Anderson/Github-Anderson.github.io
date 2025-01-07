---
comments: true
status: star
---

# Reductions, P and NP

## Poly-time Reductions

!!! question "Which problems will we be able to solve in practice?"

	Those with **polynomial time** algorithms.

### $X \leq _{\text{ P}} Y$

A poly-time from problem $X$ reduces to problem $Y$ (denoted $X \leq _{\text{ P}} Y$) means that 

!!! example "Definition"

	Any instance of $X$ can be solved using

	- Polynomial number of standard computational steps,
	- Polynomial number of calls to oracle that solves problem $Y$.

- If $X \leq _{\text{ P}} Y$ and $Y$ can be solved in polynomial time, then $X$ can be solved in polynomial time.
- If $X \leq _{\text{ P}} Y$ and $X$ cannot be solvedd in polynomial time, then $Y$ cannot be solved in polynomial time.
- If both $X \leq _{\text{ P}} Y$ and $Y \leq _{\text{ P}} X$, $X \equiv _{\text{ P}} Y$. i.e. $X$ can be solved in polynomial time iff $Y$ can be.

## Packing and Covering Problems

!!! quote "$\text{I}{\footnotesize\text{NDEPENDENT}}\text{-S}{\footnotesize\text{ET}}$"
	
	Given a graph $G = (V, E)$ and an integer $k$, is there a subset of $k$ (or more) vertices such that no two are adjacent?

!!! quote "$\text{V}{\footnotesize\text{ERTEX}}\text{-C}{\footnotesize\text{OVER}}$"

	Given a graph $G = (V, E)$ and an integer $k$, is there a subset of $k$ (or fewer) vertices such that each edge is incident to at least one vertex in the subset?

$$
\text{I}{\footnotesize\text{NDEPENDENT}}\text{-S}{\footnotesize\text{ET}} \equiv _{\text{ P}} \text{V}{\footnotesize\text{ERTEX}}\text{-C}{\footnotesize\text{OVER}}
$$

$S$ is an independent set of size $k$ iff $V-S$ is a vertex cover of size $n-k$.

!!! quote "$\text{S}{\footnotesize\text{ET}}\text{-C}{\footnotesize\text{OVER}}$"

	Given a set $U$ of elements, al collection $S$ of subsets of $U$, and an integer $k$, are there $\leq k$ of these subsets whose union is equal to $U$?

$$
\text{V}{\footnotesize\text{ERTEX}}\text{-C}{\footnotesize\text{OVER}} \leq _{\text{ P}} \text{S}{\footnotesize\text{ET}}\text{-C}{\footnotesize\text{OVER}}
$$

## Constraint Satisfaction Problems

!!! quote "$\text{S}{\footnotesize\text{AT}}$"

	Given a CNF formula $\Phi$, does it have a satisfying truth assignment?

!!! quote "$\text{3-S}{\footnotesize\text{AT}}$"

	SAT where each clause contains exactly 3 literals (and each literal corresponds to a different variable).

	$$
	\Phi = (\overline{x_1} \vee x_2 \vee x_3) \wedge (x_1 \vee \overline{x_2} \vee x_3) \wedge (\overline{x_1} \vee x_2 \vee x_4)
	$$

$$
\text{3-S}{\footnotesize\text{AT}} \leq _{\text{ P}} \text{I}{\footnotesize\text{NDEPENDENT}}\text{-S}{\footnotesize\text{ET}} \leq _{\text{ P}} \text{V}{\footnotesize\text{ERTEX}}\text{-C}{\footnotesize\text{OVER}} \leq _{\text{ P}} \text{S}{\footnotesize\text{ET}}\text{-C}{\footnotesize\text{OVER}}
$$

## Graph Coloring

!!! quote "$\text{3-C}{\footnotesize\text{OLOR}}$"

	Given an undirected graph $G$, can the nodes be colored black, white, and blue so that no adjacent nodes have the same color?

$$
\text{3-S}{\footnotesize\text{AT}} \leq _{\text{ P}} \text{3-C}{\footnotesize\text{OLOR}}
$$

## P vs. NP

- $\textsf{P}$. Set of decision problems for which there exists a poly-time algorithm (on a deterministic turing machine).

- $\textsf{NP}$. Set of decision problems for which there exists a poly-time certifier. ($\textsf{N}$ondeterministic $\textsf{P}$olynomial time)

??? question "DOES $\textsf{P}$ = $\textsf{NP}$?"

## NP-Complete

- $\textsf{NP-Complete}$. A problem $Y \in$ $\textsf{NP}$ with the property that for every problem $X \in$ $\textsf{NP}$, $X \leq _{\text{ P}} Y$.

!!! quote "$\text{C}{\footnotesize\text{IRCUIT}}\text{-S}{\footnotesize\text{AT}}$"

	Given a combinational circuit built from $\textsf{AND}$, $\textsf{OR}$, and $\textsf{NOT}$ gates, is there a way to set the circuit inputs so that the output is 1?

$$
\text{C}{\footnotesize\text{IRCUIT}}\text{-S}{\footnotesize\text{AT}}
\in
\textsf{NP-Complete}
$$

!!! tip "Recipe"

	To prove that $Y \in \textsf{NP-Complete}$:

	- Step 1.  Show that $Y \in \textsf{NP}$.
	- Step 2.  Choose an $\textsf{NP-Complete}$ problem $X$.
	- Step 3.  Prove that $X \leq _{\text{ P}} Y$. 

![](img/3sat.png)
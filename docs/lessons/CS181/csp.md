---
comments: true
status: star
---

# Constraint Satisfaction Problem

### Search Problems

#### Standard Search Problem

- State is a "black box": arbitrary data structure
- Goal test can be any function over states
- Successor function can also be anything

#### Constraint Satisfaction Problems (CSPs)

- A special subset of search problems
- State is defined by variables $\mathbf{X}_i$ with values from a domain $\mathbf{D}$ (sometimes $\mathbf{D}$  depends on $i$)
- Goal test is a set of constraints specifying allowable combinations of values for subsets of variables

!!! question "Why we don't include all variables in explicit constraints?"

	In that case, the problem becomes standard search problem: consider all possible cases and run goal test.

#### Varieties of CSPs

#### Variesties of Constraints

### Solving CSP

#### Backtracking Search

- Backtracking search is the is the basic uninformed algorithm for solving CSPs.

- Idea 1: One variable at a time.

	- Variable assignments are commutative, so fix ordering.
	- i.e., [WA = red then NT = green] same as [NT = green then WA = red].
	- Only need to consider assignments to a single variable at each step.

- Idea 2: Check constraints as you go.
	
	- i.e. consider only values which do not conflict previous assignments.
	- Might have to do some computation to check the constraints.
	- "Incremental goal test".

- Depth-first search with these two improvements is called *backtracking search*.

### Improve Backtracking

#### Filtering: Forward Checking

- Filter: Keep track of domains for unassigned variables and cross offf bad options.
- Forward checking: Cross off values that violate a constraint when added to the existing assignment; whenever any variable has no value left, we backtrack.
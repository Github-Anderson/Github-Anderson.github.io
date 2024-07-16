---
comments: true
---

# Review of Probability

## Introduction

- Random Variables: $X\sim p(x)$

- $\displaystyle \sum_{i=1}^np_i=1$

- Expected value of $X$: $\displaystyle E[X]=\sum_{i=1}^nx_ip_i$

## Probability Distribution Function (PDF)

- $p(x)\geq 0$ and $\displaystyle \int p(x)\text{d}x = 1$

- $\displaystyle E[X] = \int xp(x)\text{d}x$

## Monte Carlo Integration

Estimate the integral of a function by averaging random samples of the function's value.

Monte Carlo Integration: $\displaystyle \int f(x)\text{d}x = \frac{1}{N} \sum_{i=1}^N\frac{f(X_i)}{p(X_i)}\quad X_i\sim p(x)$


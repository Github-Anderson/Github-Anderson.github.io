---
comments: true
---

# Algorithm Analysis

Algorithm analysis, or complexity analysis, can help asssess algorithm time of space efficiency.

$$
\begin{array}{ll}
	f(n) = o(g(n)) & \lim\limits_{n \to \infty} \dfrac{f(n)}{g(n)} = 0 \\[15pt]
	f(n) = O(g(n)) & \lim\limits_{n \to \infty} \dfrac{f(n)}{g(n)} < \infty \\[15pt]
	f(n) = \Theta(g(n)) & 0 < \lim\limits_{n \to \infty} \dfrac{f(n)}{g(n)} < \infty \\[15pt]
	f(n) = \Omega(g(n)) & \lim\limits_{n \to \infty} \dfrac{f(n)}{g(n)} > 0 \\[15pt]
	f(n) = \omega(g(n)) & \lim\limits_{n \to \infty} \dfrac{f(n)}{g(n)} = \infty \\[15pt]
\end{array}
$$

Use mathematical method to strictly prove:

$$
\begin{align*}
	f(n)=\Theta(g(n)) &: \exists c_1,c_2\in\mathbb{R}^+,\exists n_0,\forall n>n_0, 0\le c_1\cdot g(n)\le f(n)\le c_2\cdot g(n).\\[5pt]
	f(n)=O(g(n)) &: \exists c\in\mathbb{R}^+,\exists n_0,\forall n>n_0, 0\le f(n)\le c\cdot g(n).\\[5pt]
	f(n)=\Omega(g(n)) &: \exists c\in\mathbb{R}^+,\exists n_0,\forall n>n_0, 0\le g(n)\le c\cdot f(n).\\[5pt]
	f(n)=o(g(n)) &: \forall c\in\mathbb{R}^+,\exists n_0,\forall n>n_0, 0\le f(n)<c\cdot g(n).\\[5pt]
	f(n)=\omega(g(n)) &: \forall c\in\mathbb{R}^+,\exists n_0,\forall n>n_0, 0\le g(n)<c\cdot f(n).
\end{align*}
$$

$$
1<\log n < n\log n < n^2 < n^k < 2^n < k^n < n! < n^n
$$
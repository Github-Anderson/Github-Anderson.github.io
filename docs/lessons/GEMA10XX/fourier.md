---
comments: true
status: new
---

# Fourier 分析

## 函数的 Fourier 级数

### 周期延拓

若 $f$ 是定义在 $[-l,l]$ 上的函数，令 $\begin{aligned}F(x) = 
\begin{cases}
f(x-2nl), &(2n-1)l < x < (2n+1)l\\
\dfrac{f(l)-f(-l)}{2}, & x = (2n+1)l
\end{cases}\end{aligned}$

### 偶延拓与奇延拓

$f_e(x)=\begin{cases}f(x), &0\leq x\leq l\\f(-x), &-l\leq x < 0\end{cases}\quad f_o(x)=\begin{cases}f(x), &0< x\leq l\\0, &x=0\\-f(-x), &-l\leq x < 0\end{cases}$

### 三角函数系的正交性

函数集合 $\{1, \cos x,\sin x, \cdots ,\cos nx,\sin nx ,\cdots\}$

1. 

2. 

3. 

### 周期函数的 Fourier 级数

设在 $[-\pi, \pi]$ 上函数 $f(x)$ 可展开为三角级数，即

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nx+b_n\sin nx)
$$

!!! tip "Fourier 系数公式"

	$$
	\begin{cases}
	\begin{aligned}a_n=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\cos nx\text{d}x\end{aligned}, &n=0,1,2,\dots,\\
	\begin{aligned}b_n=\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\sin nx\text{d}x\end{aligned}, &n=1,2,\dots.
	\end{cases}
	$$

**Fourier 级数(F氏级数)**

$$
f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty} (a_n\cos nx+b_n\sin nx)
$$

"$\sim$" 表示级数是由 $f$ 写出来的

## 平方平均收敛

## 收敛性定理

## Fourier 变换


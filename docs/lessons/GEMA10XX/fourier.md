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

1. $\displaystyle \frac{1}{\pi}\int_{-\pi}^{\pi}\cos mx\cos nx\text{d}x=\begin{cases}0, &m\neq n\\1, &m=n\neq 0\\2, &m=n=0\end{cases}(m,n=1,2,\dots)$

2. $\displaystyle \frac{1}{\pi}\int_{-\pi}^{\pi}\sin mx\sin nx\text{d}x=\begin{cases}0, &m\neq n\\1, &m=n\end{cases}(m,n=1,2,\dots)$

3. $\displaystyle \frac{1}{\pi}\int_{-\pi}^{\pi}\sin mx\cos nx\text{d}x=0\ (m=1,2,\dots; n=0,1,\dots)$

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

### Dirichlet 收敛定理

!!! abstract "定理"

	设 $f$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上分段可微，则其F氏级数收敛，且

	$$
	\frac{a_0}{2}+\sum_{n=1}^{\infty} (a_n\cos nx+b_n\sin nx) = \frac{f(x+0)+f(x-0)}{2}
	$$

### 正弦和余弦级数

=== "正弦级数"

	设 $f$ 在 $[-\pi,\pi]$ 上可积且绝对可积，且为**奇函数**，则

	$$
	\begin{cases}
	&a_n=0,\\
	&\displaystyle b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin nx\text{d}x = \frac{2}{\pi}\int_{0}^{\pi} f(x)\sin nx\text{d}x
	\end{cases}
	$$

	$\displaystyle f(x) \sim \sum_{n=1}^{\infty} b_n \sin nx$

=== "余弦级数"

	设 $f$ 在 $[-\pi,\pi]$ 上可积且绝对可积，且为**偶函数**，则

	$$
	\begin{cases}
	&\displaystyle a_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\text{d}x = \frac{2}{\pi}\int_{0}^{\pi} f(x)\cos nx\text{d}x,\\
	&b_n=0
	\end{cases}
	$$

	$\displaystyle f(x) \sim \sum_{n=1}^{\infty} a_n \cos nx$

### 周期为 $2l$ 函数的F氏级数

令 $x=\dfrac{l}{\pi}t$，则 $g(t)=f(\dfrac{l}{\pi}t)$ 在 $[-\pi,\pi]$ 上可积且绝对可积，故

$$
g(t)\sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nt+b_n\sin nt)
$$

$$
f(x)\sim  \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos \frac{n\pi}{l}x+b_n\sin \frac{n\pi}{l}x)
$$

其中 $\displaystyle a_n=\frac{1}{l}\int_{-l}^{l}f(x)\cos \frac{n\pi}{l}x\text{d}x,\  b_n=\frac{1}{l}\int_{-l}^{l}f(x)\sin \frac{n\pi}{l}x\text{d}x$

!!! abstract "定理"

	设 $f$ 以 $2l$ 为周期，在 $[-l,l]$ 上分段可微，则其F氏收敛，且

	$$
	\frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos \frac{n\pi}{l}x+b_n\sin \frac{n\pi}{l}x) = 
	\begin{cases}
	\dfrac{f(x+0)+f(x-0)}{2}, x\in (-l,l)\\
	\dfrac{f(-l+0)+f(l-0)}{2}, x=\pm l
	\end{cases}
	$$

### F氏级数的复数形式

!!! tip "Euler 公式"

	$$
	\text{e}^{i\theta} = \cos \theta+i\sin\theta \leftrightarrow \cos\theta = \frac{\text{e}^{i\theta} + \text{e}^{-i\theta}}{2},\ \sin\theta = \frac{\text{e}^{i\theta}-\text{e}^{-i\theta}}{2i}
	$$

可导出 $f$ 的**复数形式F氏级数**.

$$
f(x)\sim \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(\frac{a_n-ib_n}{2}\text{e}^{in\omega x}+\frac{a_n+ib_n}{2}\text{e}^{-in\omega x}\right)
$$

其中 $\omega = \dfrac{\pi}{l}$ 为**基频**，$\displaystyle a_n=\frac{1}{l}\int_{-l}^{l}f(x)\cos n\omega x\text{d}x,\  b_n=\frac{1}{l}\int_{-l}^{l}f(x)\sin n\omega x\text{d}x$

$$
\begin{aligned}
f(x)&\sim \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(\frac{a_n-ib_n}{2}\text{e}^{in\omega x}+\frac{a_n+ib_n}{2}\text{e}^{-in\omega x}\right)\\
&\stackrel{\text{def}}{=} F_0+\sum_{n=1}^{\infty}(F_n\text{e}^{in\omega x}+F_{-n}\text{e}^{-in\omega x})=\sum_{n=-\infty}^{\infty}F_n\text{e}^{in\omega x}
\end{aligned}
$$

其中， $\begin{aligned}
&F_0=\frac{a_0}{2}=\frac{1}{2l}\int_{-l}^{l}f(x)\text{d}x,\\
&F_n=\frac{a_n-ib_n}{2}=\frac{1}{2l}\int_{-l}^{l}f(x)\text{e}^{-in\omega x}\text{d}x\\
&F_{-n}=\overline{F_n}
\end{aligned}$

## 平方平均收敛

## 收敛性定理

## Fourier 变换


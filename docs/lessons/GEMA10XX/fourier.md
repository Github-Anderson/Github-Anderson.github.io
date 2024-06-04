---
comments: true
status: star
---

# Fourier 分析

## 函数的 Fourier 级数

### 基本概念

#### 周期延拓

若 $f$ 是定义在 $[-l,l]$ 上的函数，令 $\begin{aligned}F(x) = 
\begin{cases}
f(x-2nl), &(2n-1)l < x < (2n+1)l\\
\dfrac{f(l)-f(-l)}{2}, & x = (2n+1)l
\end{cases}\end{aligned}$

#### 偶延拓与奇延拓

$f_e(x)=\begin{cases}f(x), &0\leq x\leq l\\f(-x), &-l\leq x < 0\end{cases}\quad f_o(x)=\begin{cases}f(x), &0< x\leq l\\0, &x=0\\-f(-x), &-l\leq x < 0\end{cases}$

#### 三角函数系的正交性

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

??? warning "Fourier 级数(F氏级数)"

	$$
	f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty} (a_n\cos nx+b_n\sin nx)
	$$

	"$\sim$" 表示级数是由 $f$ 写出来的，即 $f$ 收敛到F氏级数

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

???+ quote "更一般的形式"

	$$f(x)\sim \dfrac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos (\frac{2\pi nx}{T}) + b_n\sin (\frac{2\pi nx}{T}))\right)$$

	其中，

	$$a_0 = \dfrac{2}{T}\int_{-T/2}^{T/2}f(x)\text{d}x$$

	$$a_n = \dfrac{2}{T}\int_{-T/2}^{T/2}f(x)\cos (\frac{2\pi nx}{T})\text{d}x$$

	$$b_n = \dfrac{2}{T}\int_{-T/2}^{T/2}f(x)\sin (\frac{2\pi nx}{T})\text{d}x$$

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

### 基本概念

记 $L^2[a,b] = \{f(x)\mid \text{在 }[a,b]\text{ 上可积且平方可积}\}$

- $L^2[a,b]$ 是一个**线性空间**

- 设 $ f, g \in L^2[a, b] $，其内积定义为
  $$
  \langle f, g \rangle = \int_a^b f(x) g(x) \text{d}x
  $$
  $$
  \| f \| = \sqrt{\langle f, f \rangle} = \sqrt{\int_a^b f^2(x) \text{d}x}
  $$

- $ f, g $ 之间的距离
  $$
  \| f - g \| = \sqrt{\langle f - g, f - g \rangle} = \sqrt{\int_a^b [f(x) - g(x)]^2 \text{d}x}
  $$

- 三角函数系 
  $\left\{ \dfrac{1}{\sqrt{2\pi}}, \dfrac{\cos x}{\sqrt{\pi}}, \dfrac{\sin x}{\sqrt{\pi}}, \cdots, \dfrac{\cos nx}{\sqrt{\pi}}, \dfrac{\sin nx}{\sqrt{\pi}}, \cdots \right\}$

  	是 $ L^2[-\pi, \pi] $ 的**标准正交系**

### 定义

设 $ f \in L^2[a, b] $，若存在 $ f_n \in L^2[a, b] $ 使得
  $$
  \lim_{n \to \infty} \| f_n - f \|^2 = \lim_{n \to \infty} \int_a^b [f_n(x) - f(x)]^2 \text{d}x = 0
  $$
  则称 $ f_n $ **平方平均收敛**于 $ f $。

### Bessel 不等式

设 $f\in L^2[-\pi, \pi]$，

- **$n$ 阶三角多项式** $\displaystyle g_n(x) = \frac{\alpha_0}{2} + \sum_{k=1}^{n}(\alpha_k\cos kx + \beta_k\sin kx)$

- **$n$ 阶 Fourier 多项式**（最佳逼近） $\displaystyle S_n(x) = \frac{a_0}{2} + \sum_{k=1}^{n}(a_k\cos kx + b_k\sin kx)$

- 对 $\forall g_n\in G = \{g_n\}$ 有 $\|f-S_n(x)\|\leq \|f-g_n(x)\|$

- $\displaystyle \|f-S_n\|^2 = \int_{-\pi}^{\pi} f^2(x)\text{d}x - \pi\left[ \frac{a_0^2}{2} + \sum_{k=1}^n(a_k^2+b_k^2)\right]$

!!! tip "Bessel 不等式"

	设 $f\in L^2[-\pi, \pi]$，则 $f$ 的F式系数满足

	$$\frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2+b_n^2) \leq \frac{1}{\pi}\int_{-\pi}^{\pi} f^2(x)\text{d}x$$

#### 推论

设 $f \in L^2[-\pi, \pi]$，则级数 $\displaystyle \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2)$收敛，故
$$
\lim_{n \to \infty} a_n = 0 = \lim_{n \to \infty} b_n,
$$

### Parseval 等式

!!! abstract "平方平均收敛定理"

	设 $f\in L^2[-\pi, \pi]$，则$\{S_n(x)\}$ 平方平均收敛于 $f$，即

	$$\lim_{n\to \infty} \|f-S_n\|^2 = 0$$

!!! tip "Parseval 等式"

	设 $f\in L^2[-\pi, \pi]$，则 $f$ 的F式系数满足

	$$\frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2+b_n^2) = \frac{1}{\pi}\int_{-\pi}^{\pi} f^2(x)\text{d}x$$

#### 推论

1. 设 $f \in C[-\pi, \pi]$，且 $f$ 与三角函数系

	$$
	\left\{ \frac{1}{\sqrt{2\pi}}, \frac{\cos x}{\sqrt{\pi}}, \frac{\sin x}{\sqrt{\pi}}, \cdots, \frac{\cos nx}{\sqrt{\pi}}, \frac{\sin nx}{\sqrt{\pi}}, \cdots \right\}
	$$

	中的每一个都正交，则 $f(x) \equiv 0$。

	- 若 $f, g \in C[-\pi, \pi]$，且F氏系数相等，则 $f(x) \equiv g(x)$

2. 设 $f, g \in L^2[-\pi, \pi]$，其F氏系数分别为 $a_n, b_n$ 和 $\overline{a_n}, \overline{b_n}$，则

	$$
	\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) g(x) \text{d}x = \frac{a_0 \overline{a_0}}{2} + \sum_{n=1}^{\infty} (a_n \overline{a_n} + b_n \overline{b_n})
	$$

3. 设 $f \in L^2[-\pi, \pi]$，其 Fourier 级数为

	$$
	f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)
	$$

	则对 $\forall [a, b] \subset [-\pi, \pi]$，有

	$$
	\int_a^b f(x) \text{d}x = \int_a^b \frac{a_0}{2} \text{d}x + \sum_{n=1}^{\infty} \int_a^b (a_n \cos nx + b_n \sin nx) \text{d}x
	$$

## 广义 Fourier 级数

### 基本概念

设 $\{\varphi_1(x), \varphi_2(x),\cdots,\varphi_n(x),\cdots\}$ 是 $L^2[a,b]$ 的标准正交系，即

$$\displaystyle \langle \varphi_m(x),\varphi_n(x)\rangle = \int_a^b \varphi_m(x)\varphi_n(x)\text{d}x = \begin{cases}0, &m\neq n\\1, &m=n\end{cases}$$

- **广义F氏系数** $\displaystyle a_n = \int_a^b f(x)\varphi_n(x)\text{d}x$

- **广义F氏级数** $\displaystyle f(x) \sim \sum_{n=1}^{\infty} a_n\varphi_n(x)$

设 $f\in L^2[a,b], \{\varphi(x)\}$ 为标准正交系，

- **$n$ 次 $\varphi$-多项式** $\displaystyle T_n(x) = \sum_{k=1}^n\alpha_k\varphi_k(x)$

- **广义F氏级数前 $n$ 项和**（最佳逼近） $S_n(x) = \sum_{k=1}^na_k\varphi_k(x)$

- $\|f-S_n\|\leq \|f-T_n\|$

- $\displaystyle \|f-S_n\|^2 = \|f\|^2 - \sum_{m=1}^{\infty}a_m^2$

- $\displaystyle \sum_{m=1}^{\infty}a_m^2\leq \|f\|^2$

### 定义

- 设 $\{\varphi_n(x)\}$ 为 $L^2[a, b]$ 的标准正交系，且

  $$
  \sum_{m=1}^{\infty} a_m^2 = \|f\|^2
  $$

  则称 $\{\varphi_n(x)\}$ 为 $L^2[a, b]$ 的**完备**标准正交系。

???+ abstract "定理"

	设 $\{\varphi_n(x)\}$ 为 $L^2[a, b]$ 的完备标准正交系，则
	$$
	S_n(x) = \sum_{k=1}^n a_k \varphi_k(x)
	$$

	平方平均收敛于 $f$，即
	$$
	\lim_{n \to \infty} \| f - S_n \| = 0
	$$

???+ abstract "定理"

	设 $\{\varphi_n(x)\}$ 为 $L^2[a, b]$ 的完备标准正交系，则

	1. 若 $f \in C[a, b]$，则 $f(x) \equiv 0$ 当且仅当 $f$ 的广义F氏系数$a_n = 0, (n = 1, 2, \ldots)$

	2. 从 $\{\varphi_n(x)\}$ 中删去任一函数，则剩余函数系不完备；

	3. 若 $\displaystyle\int_a^b \varphi_0^2(x) \text{d}x = 1$，则 $\{\varphi_n(x)\}$ 增加 $\varphi_0(x)$ 所得函数系非正交系。

## Fourier 变换

### Fourier 积分

回顾 [F氏级数的复数形式](#f)

设 $f$ 在 $\mathbb{R}$ 的任意有限区间分段可微，且在 $(-\infty,+\infty)$ 上绝对可积[^1]，则有对任意 $x\in \mathbf{R}$ 有

[^1]: 即积分在 $(-\infty,\infty)$ 上收敛

$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)e^{-i\lambda t}\text{d}t\right]e^{i\lambda x}\text{d}\lambda = \frac{f(x+0)+f(x-0)}{2}$$

特别地，若 $f$ 在 $x$ 处连续，则

$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)e^{-i\lambda t}\text{d}t\right]e^{i\lambda x}\text{d}\lambda = f(x)$$

### Fourier 变换

设 $f$ 满足定理条件且连续，称函数

$$F(\lambda) = \int_{-\infty}^{+\infty}f(t)e^{-i\lambda t}\text{d}t$$

为 $f$ 的 Fourier变换；而函数

$$f(x) = \frac{1}{2\pi}\int_{-\infty}^{+\infty}F(\lambda)e^{i\lambda x}\text{d}\lambda$$

称为 $F(\lambda)$ 的 Fourier 逆变换，上式称为反演公式

### 实形式 Fourier 积分

当 $f$ 在 $\mathbb{R}$ 上连续时，有

$$\begin{aligned}
f(x) &= \frac{1}{\pi}\int_0^{+\infty}\text{d}\lambda\int_{-\infty}^{+\infty}f(t)\cos\lambda(x-t)\text{d}t\\
&\stackrel{\text{def}}{=}\int_0^{+\infty}\left[a(\lambda)\cos\lambda x+b(\lambda)\sin\lambda x\right]\text{d}\lambda
\end{aligned}$$

其中 $\displaystyle a(\lambda) = \frac{1}{\pi}\int_{-\infty}^{+\infty}f(t)\cos\lambda t\text{d}t\quad b(\lambda) = \frac{1}{\pi}\int_{-\infty}^{+\infty}f(t)\sin\lambda t\text{d}t$

### 正弦和余弦变换

=== "正弦变换"

	若 \( f \) 为奇函数，其 Fourier 变换

	$$
	f(x) \rightarrow F_o(\lambda) = \int_{-\infty}^{+\infty} f(t)e^{-i \lambda t} \text{d}t = -2i \int_{0}^{+\infty} f(t)\sin(\lambda t) \text{d}t
	$$

	称 $\displaystyle G_o(\lambda) = i F_o(\lambda) = 2 \int_{0}^{+\infty} f(t)\sin(\lambda t) \text{d}t$ 为 $f$ 的**正弦变换**，其逆变换为

	$$
	G_o(\lambda) \rightarrow f(x) = \frac{1}{\pi} \int_{0}^{+\infty} G_o(\lambda)\sin(\lambda x) \text{d}\lambda
	$$

=== "余弦变换"

	若 \( f \) 为偶函数，其 Fourier 变换

	$$
	f(x) \rightarrow F_e(\lambda) = \int_{-\infty}^{+\infty} f(t)e^{-i \lambda t} \text{d}t = 2 \int_{0}^{+\infty} f(t)\cos(\lambda t) \text{d}t
	$$

	称为**余弦变换**，其逆变换为

	$$
	F_e(\lambda) \rightarrow f(x) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} F_e(\lambda)e^{i \lambda x} \text{d}\lambda = \frac{1}{\pi} \int_{0}^{+\infty} F_e(\lambda)\cos(\lambda x) \text{d}\lambda
	$$

### 性质

记 $f$ 的 Fourier 变换为 $F[f]$，即

$$F[f](\lambda) = F(\lambda) = \int_{-\infty}^{+\infty}f(t) e^{-i\lambda t}\text{d}t$$

#### 线性性

$$F[\alpha f+\beta g] = \alpha F[f]+\beta F[g]\quad \alpha,\beta\in\mathbb{R}$$

#### 频移性

$$F[f(x)e^{-i\lambda_0x}](\lambda) = F(\lambda + \lambda_0)$$

#### 微分关系

设 $f(\pm\infty)=0,f'$ 存在 Fourier 变换，则

$$F[f'] = i\lambda\cdot F[f]$$

#### 微分特性

设 $f$ 和 $xf(x)$ 存在 Fourier 变换，则

$$F'(\lambda) = F[-ixf(x)]$$

### 卷积

设 $f,g$ 在 $\mathbb{R}$ 上绝对可积，则 $f$ 和 $g$ 的卷积

$$(f\ast g)(x)\stackrel{\text{def}}{=}\int_{-\infty}^{+\infty}f(x-t)g(t)\text{d}t$$

- $f\ast g=g\ast f$

- $(f\ast g)\ast h=f\ast (g\ast h)$

- $(f+g)\ast h=f\ast h+g\ast h$

- $F[f\ast g] = F[f]\cdot F[g]$

!!! tip " Parseval 等式"

	若 $f$ 可积且平方可积，$F(\lambda)$ 是 $f$ 的F氏变换，则有

	$$\int_{-\infty}^{+\infty}f^2(t)\text{d}t=\frac{1}{2\pi}\int_{-\infty}^{+\infty}|F(\lambda)|^2\text{d}\lambda$$
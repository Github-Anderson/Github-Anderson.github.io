---
comments: true
---

# 多元微积分

## 二重积分

### 性质

#### 线性、可加性、单调性、估值不等式、绝对值不等式

与一元定积分类似.

#### 中值定理

设 $D$ 是连通有界闭集，$f(x,y)\in C(D)$，则 $\exists (\xi ,\eta)\in D$ 使得

$$\iint_Df(x,y)d\sigma = f(\xi ,\eta)A_D$$

### 计算

#### 矩形区域

若 $f(x,y)$ 在 $[a,b]\times [c,d]$ 可积且连续，则有

$$\iint_{[a,b]\times [c,d]} f(x,y)\text{d}\sigma = \int_{a}^{b}\text{d}x\int_{c}^{d}f(x,y)\text{d}y=\int_{c}^{d}\text{d}y\int_{a}^{b}f(x,y)\text{d}x$$

设 $f\in C[a,b],g\in C[c,d]$，则有
$$\iint_{[a,b]\times [c,d]} f(x,y)\text{d}x\text{d}y = \int_a^bf(x)\text{d}x\cdot \int_c^dg(y)\text{d}y$$

#### $x$ 型区域

$$\iint_Df(x,y)\text{d}x\text{d}y = \int_{a}^{b}\text{d}x\int_{y_1(x)}^{y_2(x)}f(x,y)\text{d}y$$

#### $y$ 型区域 

$$\begin{aligned}\iint_Df(x,y)\text{d}x\text{d}y = \int_{c}^{d}\text{d}y\int_{x_1(y)}^{x_2(y)}f(x,y)\text{d}x\end{aligned}$$

#### 交换二次积分次序

- 将二次积分还原微二重积分；
- 由积分限确定积分区域 $D$，并按另一类型表示它；
- 化二重积分为另一次序的二次积分.

#### 简化计算

用**积分区域对称性**和**被积函数奇偶性**简化积分计算.

若 $D$ 关于 $y$ 轴对称，记 $D_1$ 为 $D$ 中 $x\geq0$ 部分，则

$$\iint_Df(x,y)\text{d}x\text{d}y = \begin{cases}
0,& f(-x,y) = -f(x,y)\\
2\iint_{D_1}f(x,y)\text{d}x\text{d}y, &f(-x,y) = f(x,y)
\end{cases}$$

### 换元

#### 极坐标形式

使 $x=r\cos \theta, y=r\sin \theta$,则

$$\iint_Df(x,y)\text{d}x\text{d}y=\iint_{D'}f(r\cos\theta,r\sin\theta)r\text{d}r\text{d}\theta$$

特别地，若 $D'=\{(r,\theta)\mid \alpha\leq\theta\leq\beta,r_1(\theta)\leq r\leq r_2(\theta)\}$，则有

$$\iint_{D'}f(r\cos\theta,r\sin\theta)r\text{d}r\text{d}\theta = \int_{\alpha}^{\beta}\text{d}\theta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)r\text{d}r$$

!!! info "注意"

	由于 $r\neq 0$，显然这里的 $D'$ 并不包括 $z$ 轴，即 $\mathbf{F}: (x,y) \mapsto (r,\theta)$ 并不是一对一的。

#### 一般形式换元

设变换 $\mathbf{F}:\begin{cases}x=x(u,v)\\y=y(u,v)\end{cases}$ 有连续偏导数，且满足 $\begin{aligned}\mathbf{J} = \frac{\partial(x,y)}{\partial(u,v)}\neq 0\end{aligned}$，又 $f(x,y)\in C(D)$，则

$$\iint_Df(x,y)\text{d}x\text{d}y = \iint_{D'}f(x(u,v),y(u,v))|\mathbf{J}|\text{d}u\text{d}v$$

其中 $\mathbf{F}$ 将 $D'$ 变为 $D$.

## 三重积分

### 计算

#### 长方体区域

设 $f(x,y,z)$ 在 $[a,b]\times [c,d]\times [e,h]$ 可积.

1. 若 $\forall (x,y)\in [a,b]\times [c,d]$，存在**首次积分** $\mu (x,y) = \int_e^hf(x,y,z)\text{d}z$，则

$$\iiint_{[a,b]\times [c,d]\times [e,h]}f(x,y,z)\text{d}V = \iint_{[a,b]\times [c,d]}\text{d}x\text{d}y\int_e^hf(x,y,z)\text{d}z$$

2. 若 $\forall z\in [e,h]$，存在**二重积分** $\mu(z) = \iint_{[a,b]\times [c,d]}f(x,y,z)\text{d}x\text{d}y$，则

$$\iiint_{[a,b]\times [c,d]\times [e,h]}f(x,y,z)\text{d}V = \int_e^h\text{d}z\iint_{[a,b]\times [c,d]}f(x,y,z)\text{d}x\text{d}y$$

#### 柱线法（坐标面投影法）

- $\Omega = \{(x,y,z)\mid z_1(x,y)\leq z\leq z_2(x,y),(x,y)\in D\}$

- $D = \{(x,y)\mid a\leq x\leq b, y_1(x)\leq y\leq y_2(x)\}$

$$\begin{aligned}
\iiint_{\Omega}f(x,y,z)\text{d}x\text{d}y\text{d}z &= \iint_D\left(\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\text{d}z\right)\text{d}x\text{d}y\\
&=\iint_D\text{d}x\text{d}y\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\text{d}z\\
&=\int_a^b\text{d}x\int_{y_1(x)}^{y_2(x)}\text{d}y\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\text{d}z
\end{aligned}$$

#### 截面法（坐标轴投影法）

- $\Omega = \{(x,y,z)\mid h_1\leq z\leq h_2,(x,y)\in D_2\}$

$$\begin{aligned}\iiint_{\Omega}f(x,y,z)\text{d}x\text{d}y\text{d}z &= \int_{h_1}^{h_2}\left(\iint_{D_z}f(x,y,z)\text{d}x\text{d}y\right)\text{d}z\\
&=\int_{h_1}^{h_2}\text{d}z\iint_{D_z}f(x,y,z)\text{d}x\text{d}y
\end{aligned}$$

### 换元

#### 一般形式换元

设变换 $\mathbf{T}:\begin{cases}x=x(u,v,w)\\
y=y(u,v,w)\\
z=z(u,v,w)
\end{cases}$ 有连续偏导数，且满足 $\begin{aligned}\mathbf{J} = \frac{\partial(x,y,z)}{\partial(u,v,w)}\neq 0\end{aligned}$，又 $f(x,y,z)\in C(\Omega)$，则

$$\iiint_{\Omega}f(x,y,z)\text{d}x\text{d}y\text{d}z = \iiint_{\Omega'}f(x(u,v,w),y(u,v,w),z(u,v,w))|\mathbf{J}|\text{d}u\text{d}v\text{d}w$$

其中 $\mathbf{T}$ 将 $\Omega'$ 变为 $\Omega$.

#### 柱面坐标系

$\begin{cases}
x=r\cos\theta\\
y=r\sin\theta\\
z=z
\end{cases},\quad \begin{aligned}\frac{\partial (x,y,z)}{\partial (r,\theta,z)}=r\end{aligned}$

$$\iiint_{\Omega}f(x,y,z)\text{d}V=\iiint_{\Omega'}f(r\cos\theta,r\sin\theta,z)r\text{d}r\text{d}\theta\text{d}z$$

!!! info "注意"

	同二重积分，由于 $r\neq 0$，显然这里的 $\Omega'$ 并不包括 $z$ 轴，即 $\mathbf{T}: (x,y,z) \mapsto (r,\theta,z)$ 并不是一对一的。

#### 球面坐标系

$\begin{cases}
x=\rho\sin\varphi\cos\theta\\
y=\rho\sin\varphi\sin\theta\\
z=\rho\cos\varphi
\end{cases},\quad \begin{aligned}\frac{\partial (x,y,z)}{\partial (\rho,\varphi,\theta)}=\rho^2\sin\varphi\end{aligned}$

$$\iiint_{\Omega}f(x,y,z)\text{d}V = 
\iiint_{\Omega'}f(\rho\sin\varphi\cos\theta,\rho\sin\varphi\sin\theta,\rho\cos\varphi)\rho^2\sin\varphi\text{d}\rho\text{d}\varphi\text{d}\theta$$

### 注

1. $V_{椭球} = \begin{aligned}\frac{4\pi abc}{3}\end{aligned}$

2. (轮换对称性) $\begin{aligned}
\iiint_{\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}\leq 1} z^2\text{d}V = \frac{4\pi abc^3}{15}\quad \iiint_{\frac{y^2}{b^2}+\frac{z^2}{c^2}+\frac{x^2}{a^2}\leq 1} x^2\text{d}V = \frac{4\pi a^3bc}{15}
\end{aligned}$

3. 令 $V:x^2+y^2+z^2\leq R^2$ 则

$$\iiint_Vx^2\text{d}V = \iiint_Vy^2\text{d}V = \iiint_Vz^2\text{d}V = \frac{1}{3}\iiint_V(x^2+y^2+z^2)\text{d}V = \frac{4\pi R^5}{15}$$

## $n$ 重积分

### 计算

#### 长方体区域

设 $f$ 在 $\Omega=[a_1,b_1]\times [a_2,b_2]\times\cdots\times [a_n,b_n]$ 上连续，则

$$\begin{aligned}
&\int_{\Omega}f(x_1,x_2,\dots,x_n)\text{d}x_1\text{d}x_2\cdots \text{d}x_n\\
=& \int_{a_1}^{b_1}\text{d}x_1\int_{[a_2,b_2]\times\cdots\times [a_n,b_n]}f(x_1,x_2,\dots,x_n)\text{d}x_2\cdots \text{d}x_n\\
=& \int_{[a_1,b_1]\times\cdots\times [a_{n-1},b_{n-1}]}\text{d}x_1\cdots \text{d}x_{n-1}\int_{a_n}^{b_n}f(x_1,x_2,\dots,x_n)\text{d}x_n
\end{aligned}$$

#### $n$ 维单纯形

$T_n=\{(x_1,x_2,\dots,x_n)\mid x_1+x_2+\cdots +x_n\leq h, x_i\geq 0(i=1,2,\dots,n)\}$ 的体积 

$$V_n = \frac{h^n}{n!}$$

#### $n$ 维球体积

!!! tip "提示"

	换元为多维球面坐标系推导

=== "3维球"

	$T_3 = \{(x,y,z)\mid x^2+y^2+z^2\leq R^2\}$

	$\begin{cases}x = \rho\sin\varphi\cos\theta\newline
	y = \rho\sin\varphi\sin\theta\newline
	z = \rho\cos\varphi
	\end{cases}
	\quad
	\textbf{J} = \begin{aligned}\frac{\partial (x,y,z)}{\partial (\rho,\varphi,\theta)}
	 = \rho^2\sin\varphi\end{aligned}$

	$\begin{aligned}
	\iiint_{\Omega}\text{d}V = \iiint_{\Omega'}|\textbf{J}|\text{d}\rho\text{d}\varphi\text{d}\theta = \int_0^{2\pi}\text{d}\theta\int_0^{\pi}\sin\varphi\text{d}\varphi\int_0^{R}\rho^2\text{d}\rho = \frac{4\pi R^3}{3}
	\end{aligned}$

=== "4维球"

	$T_4 = \{(x_1,x_2,x_3,x_4)\mid x_1^2+x_2^2+x_3^2+x_4^2\leq R^2\}$

	$\begin{cases}x_1 = \rho\sin\psi\sin\varphi\cos\theta\newline
	x_2 = \rho\sin\psi\sin\varphi\sin\theta\newline
	x_3 = \rho\sin\psi\cos\varphi\newline
	x_4 = \rho\cos\psi
	\end{cases}
	\quad
	\textbf{J} = \begin{aligned}\frac{\partial (x_1,x_2,x_3,x_4)}{\partial (\rho,\psi,\varphi,\theta)}
	 = \rho^3\sin\psi^2\sin\varphi\end{aligned}$

	$\begin{aligned}
	\int_{\Omega}\text{d}V = \int_{\Omega'}|\textbf{J}|\text{d}\rho\text{d}\varphi\text{d}\theta = \int_0^{2\pi}\text{d}\theta\int_0^{\pi}\sin^2\psi\text{d}\psi\int_0^{\pi}\sin\varphi\text{d}\varphi\int_0^{R}\rho^3\text{d}\rho = \frac{\pi^2 R^4}{2}
	\end{aligned}$

=== "$n$ 维球"

	$T_n = \{(x_1,x_2,\dots,x_n)\mid x_1^2+x_2^2+\cdots+x_n^2\leq R^2\}$

	$\begin{cases}x_1 = \rho\sin\theta_1\sin\theta_2\cdots\cos\theta_{n-1}\newline
	x_2 = \rho\sin\theta_1\sin\theta_2\cdots\sin\theta_{n-1}\newline
	\ \vdots\newline
	x_n = \rho\cos\theta_1
	\end{cases}
	\textbf{J} = \begin{aligned}\frac{\partial (x_1,x_2,\dots,x_n)}{\partial (\rho,\theta_1,\theta_2,\dots,\theta_{n-1})} = \rho^n\sin^{n-1}\theta_1\cdots\sin\theta_{n-1}\end{aligned}$

	$\begin{aligned}
	&\int_{\Omega}\text{d}V = \int_{\Omega'}|\textbf{J}|\text{d}\rho\text{d}\theta_1\cdots\text{d}\theta_{n-1}\\
	=& \int_0^{2\pi}\text{d}\theta_{n-1}\int_0^{\pi}\sin^{n-1}\theta_1\text{d}\theta_1\cdots\int_0^{\pi}\sin\theta_{n-2}\text{d}\theta_{n-2}\int_0^{R}\rho^{n-1}\text{d}\rho\newline
	=& \begin{cases}\begin{aligned}
	&2\pi\cdot 2\cdot \frac{\pi}{2}\cdots\frac{2(n-1)!!}{n!!}\cdot \frac{\pi}{2}\cdot \frac{R^{n}}{n},  &n\text{为偶数}\\
	&2\pi\cdot 2\cdot \frac{\pi}{2}\cdots\frac{2(n-1)!!}{n!!}\cdot \frac{R^{n}}{n}, &n\text{为奇数}
	\end{aligned}\end{cases}
	\end{aligned}$

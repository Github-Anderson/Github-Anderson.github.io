---
commments: true
status: star
---

# 反常积分和含参变量积分

## 反常积分

- 记 $\displaystyle F(A)=\int_a^Af(x)\text{d}x$，定义**无穷积分** $\displaystyle \int_a^{+\infty}f(x)\text{d}x = \lim_{A\to +\infty}F(A)$

- 记 $\displaystyle F(A)=\int_a^Af(x)\text{d}x$，（$b$ 瑕点）定义**瑕积分**$\displaystyle \int_a^bf(x)\text{d}x = \lim_{A\to b^-}F(A)$

### 无穷积分的敛散性

!!! abstract "定理(Cauchy准则)"

	$\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 收敛 $\Leftrightarrow$

	$$\forall \epsilon > 0,\exists A>a,\forall A',A''>A:\left|\int_{A'}^{A''}f(x)\text{d}x\right|<\epsilon$$

- 若 $\displaystyle \int_a^{+\infty}|f(x)|\text{d}x$ 收敛，则称 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ **绝对收敛**

- 若 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 收敛，但 $\displaystyle \int_a^{+\infty}|f(x)|\text{d}x$ 发散，则称 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ **条件收敛**

!!! abstract "定理"

	- 若 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 绝对收敛，则 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 收敛

	- 若 $\displaystyle \int_a^{+\infty}f(x)\text{d}x, \int_a^{+\infty}g(x)\text{d}x$ 绝对收敛，则 $\displaystyle \int_a^{+\infty}[f(x)\pm g(x)]\text{d}x$ 绝对收敛

	- 若 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 绝对收敛，$\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 条件收敛，则 $\displaystyle \int_a^{+\infty}[f(x)\pm g(x)]\text{d}x$ 条件收敛，$\displaystyle \int_a^{+\infty}|f(x)\pm g(x)|\text{d}x$ 发散

### 非负函数无穷积分判别法

!!! abstract "定理(收敛原理)"

	设 $f(x)\geq 0$，则 $\displaystyle \int_a^{+\infty}f(x)\text{d}x$ 收敛 $\Leftrightarrow$

	$$F(A)=\int_a^Af(x)\text{d}x\text{ 在 }[a,+\infty)\text{ 有上界}$$

!!! abstract "定理(比较判别法)"

	设 $g(x) \geq f(x) \geq 0$，则

	1. $\displaystyle \int_{a}^{+\infty} g(x) \text{d}x $ 收敛 $\implies \displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 收敛

	2. $\displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 发散 $\implies \displaystyle \int_{a}^{+\infty} g(x) \text{d}x$ 发散

!!! abstract "定理(极限形式)"

	设 $f(x) \geq 0, g(x) > 0$，且 $\displaystyle \lim_{x \to +\infty} \frac{f(x)}{g(x)} = l$，则

	1. 当 $0 < l < +\infty$ 时，$\displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 与 $\displaystyle \int_{a}^{+\infty} g(x) \text{d}x$ 同敛散;

	2. 当 $l = 0$ 时，$\displaystyle \int_{a}^{+\infty} g(x) \text{d}x$ 收敛 $\implies \displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 收敛;

	3. 当 $l = +\infty$ 时，$\displaystyle \int_{a}^{+\infty} g(x) \text{d}x$ 发散 $\implies \displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 发散.

!!! abstract "定理($p$-判别法)"

	设 $f(x) \geq 0$，且 $\displaystyle \lim_{x \to +\infty} x^p f(x) = l$，则

	1. 当 $0 \leq l < +\infty$，且 $p > 1$ 时，$\displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 收敛;

	2. 当 $0 < l \leq +\infty$，且 $p \leq 1$ 时，$\displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 发散.

### A-D判别法

!!! tip "Abel 变换"

	设有 $\{a_n\},\{b_n\}$，记 $A_k=a_1+a_2+\cdots +a_k$，则

	$$\sum_{k=1}^n a_kb_k = A_nb_n + \sum_{k=1}^{n-1}A_k(b_k-b_{k+1})$$

!!! abstract "积分第二中值定理"

	设 $f \in R[a, b]$，则有

	1. 若 $g(x)$ 在 $[a, b]$ 上单调减少且 $g(x) \geq 0$，则 $\exists \xi \in [a, b]$ 使 $\displaystyle \int_{a}^{b} f(x) g(x) \text{d}x = g(a) \displaystyle \int_{a}^{\xi} f(x) \text{d}x$
	
	(Bonnet型)

	2. 若 $g(x)$ 在 $[a, b]$ 上单调增加且 $g(x) \geq 0$，则 $\exists \xi \in [a, b]$ 使 $\displaystyle \int_{a}^{b} f(x) g(x) \text{d}x = g(b) \displaystyle \int_{\xi}^{b} f(x) \text{d}x$
	
	(Bonnet型)

	3. 若 $g(x)$ 在 $[a, b]$ 上单调，则 $\exists \xi \in [a, b]$ 使 $\displaystyle \int_{a}^{b} f(x) g(x) \text{d}x = g(a) \displaystyle \int_{a}^{\xi} f(x) \text{d}x + g(b) \displaystyle \int_{\xi}^{b} f(x) \text{d}x$
	
	(Weierstrass型)

!!! abstract "定理(Bonnet型)"

	设 $f \in R[a, b], g(x)$ 在 $[a, b]$ 单调减少，且 $g(x) \geq 0$，则 
	
	$\exists \xi \in [a, b]$ 使 $\displaystyle \int_{a}^{b} f(x) g(x) \text{d}x = g(a) \displaystyle \int_{a}^{\xi} f(x) \text{d}x$

!!! abstract "定理(A-D判别法)"

	设 $f, g$ 满足下列两组条件之一：则 $\displaystyle \int_{a}^{+\infty} f(x) g(x) \text{d}x$ 收敛.

	(Abel) $\displaystyle \int_{a}^{+\infty} f(x) \text{d}x$ 收敛，$g(x)$ 在 $[a, +\infty)$ 单调有界;
	
	(Dirichlet) $F(A) = \displaystyle \int_{a}^{A} f(x) \text{d}x$ 在 $[a, +\infty)$ 有界，$g(x)$ 在 $[a, +\infty)$ 单调且 $\displaystyle \lim_{x \to +\infty} g(x) = 0$.

### 瑕积分的敛散性

!!! abstract "定理(Cauchy准则)"

	设 $b$ 为瑕点，$\displaystyle \int_a^bf(x)\text{d}x$ 收敛 $\Leftrightarrow$

	$$\forall \epsilon > 0,\exists \delta>0,\forall x',x''\in(b-\delta,b):\left|\int_{x'}^{x''}f(x)\text{d}x\right|<\epsilon$$

- 若 $\displaystyle \int_a^b|f(x)|\text{d}x$ 收敛，则称 $\displaystyle \int_a^bf(x)\text{d}x$ **绝对收敛**

- 若 $\displaystyle \int_a^bf(x)\text{d}x$ 收敛，但 $\displaystyle \int_a^b|f(x)|\text{d}x$ 发散，则称 $\displaystyle \int_a^bf(x)\text{d}x$ **条件收敛**

!!! abstract "定理"

	- 若 $\displaystyle \int_a^bf(x)\text{d}x$ 绝对收敛，则 $\displaystyle \int_a^bf(x)\text{d}x$ 收敛

	- 若 $\displaystyle \int_a^bf(x)\text{d}x, \int_a^bg(x)\text{d}x$ 绝对收敛，则 $\displaystyle \int_a^b[f(x)\pm g(x)]\text{d}x$ 绝对收敛

	- 若 $\displaystyle \int_a^bf(x)\text{d}x$ 绝对收敛，$\displaystyle \int_a^bf(x)\text{d}x$ 条件收敛，则 $\displaystyle \int_a^b[f(x)\pm g(x)]\text{d}x$ 条件收敛，$\displaystyle \int_a^b|f(x)\pm g(x)|\text{d}x$ 发散

!!! abstract "定理(收敛原理)"

	设 $f(x)\geq 0$，则 $\displaystyle \int_a^bf(x)\text{d}x$ 收敛 $\Leftrightarrow$

	$$F(A)=\int_a^Af(x)\text{d}x\text{ 在 }[a,b)\text{ 有上界}$$

!!! abstract "定理(比较判别法)"

	设 $g(x) \geq f(x) \geq 0$，则

	1. $\displaystyle \int_{a}^b g(x) \text{d}x $ 收敛 $\implies \displaystyle \int_{a}^b f(x) \text{d}x$ 收敛

	2. $\displaystyle \int_{a}^b f(x) \text{d}x$ 发散 $\implies \displaystyle \int_{a}^b g(x) \text{d}x$ 发散

!!! abstract "定理(极限形式)"

	设 $b$ 为瑕点，$f(x) \geq 0, g(x) > 0$，且 $\displaystyle \lim_{x \to b^-} \frac{f(x)}{g(x)} = l$，则

	1. 当 $0 < l < +\infty$ 时，$\displaystyle \int_{a}^b f(x) \text{d}x$ 与 $\displaystyle \int_{a}^b g(x) \text{d}x$ 同敛散;

	2. 当 $l = 0$ 时，$\displaystyle \int_{a}^b g(x) \text{d}x$ 收敛 $\implies \displaystyle \int_{a}^b f(x) \text{d}x$ 收敛;

	3. 当 $l = +\infty$ 时，$\displaystyle \int_{a}^b g(x) \text{d}x$ 发散 $\implies \displaystyle \int_{a}^b f(x) \text{d}x$ 发散.

!!! abstract "定理($p$-判别法)"

	设 $b$ 为瑕点，$f(x) \geq 0$，且 $\displaystyle \lim_{x \to b^-} (b-x)^p f(x) = l$，或
	
	设 $a$ 为瑕点，$f(x)\geq 0$，且 $\displaystyle \lim_{x\to a^+}(x-a)^pf(x)=l$，则

	1. 当 $0 \leq l < +\infty$，且 $p < 1$ 时，$\displaystyle \int_{a}^b f(x) \text{d}x$ 收敛;

	2. 当 $0 < l \leq +\infty$，且 $p \geq 1$ 时，$\displaystyle \int_{a}^b f(x) \text{d}x$ 发散.

## 含参变量的定积分

### 函数含参变量的定积分

设 $f(x,u)$ 在 $[a,b]\times [\alpha, \beta]$ 上定义，且 $\forall u\in[\alpha,\beta],\ f(x,u)$ 关于 $x$ 在 $[a,b]$ 上可积，则称

$$\varphi (u)=\int_a^bf(x,u)\text{d}x$$

为含参变量的定积分，$u$ 称为参变量

!!! abstract "定理(连续性)"

	设 $f (x, u)$ 在 $I=[a,b]\times[\alpha, \beta]$ 上连续，则

	$$\varphi(u)=\int_a^bf(x,u)\text{d}x$$

	在 $[\alpha, \beta]$ 上连续.

- 积分号下取极限

	$$\lim_{u\to u_0}\int_a^bf(x,u)\text{d}x = \int_a^bf(x,u_0)\text{d}x = \int_a^b\lim_{u\to u_0}f(x,u)\text{d}x$$

!!! abstract "定理(交换积分次序)"

	设 $f(x, u) \in C[a, b] \times [\alpha, \beta]$, 则

	$$
	\int_{\alpha}^{\beta} \left( \int_{a}^{b} f(x, u) \, \text{d}x \right) \text{d}u = \int_{a}^{b} \left( \int_{\alpha}^{\beta} f(x, u) \, \text{d}u \right) \text{d}x
	$$

	或

	$$
	\int_{\alpha}^{\beta} \text{d}u \int_{a}^{b} f(x, u) \, \text{d}x = \int_{a}^{b} \text{d}x \int_{\alpha}^{\beta} f(x, u) \, \text{d}u
	$$

- 常用积分变换式

$$
\frac{\sin bx - \sin ax}{x} = \int_{a}^{b} \cos xy \, \text{d}y
$$

$$
\frac{\arctan bx - \arctan ax}{x} = \int_{a}^{b} \frac{1}{1 + (xy)^2} \, \text{d}y
$$

$$
\frac{e^{bx} - e^{ax}}{x} = \int_{a}^{b} e^{xy} \, \text{d}y
$$

!!! abstract "定理(可导性)"

	设 $f(x, u)$, $f'_u(x, u) \in C[a, b] \times [\alpha, \beta]$, 则 $\varphi(u) \in C^{(1)}[\alpha, \beta]$，且

	$$
	\frac{\text{d}}{\text{d}u} \int_{a}^{b} f(x, u) \, \text{d}x = \int_{a}^{b} \frac{\partial f}{\partial u} (x, u) \, \text{d}x
	$$

### 积分限含参变量的定积分

$$
\psi(u) = \int_{a(u)}^{b(u)} f(x, u) \, \text{d}x
$$

!!! abstract "定理(连续性)"

	设 $f(x, u)$ 在 $I = [a, b] \times [\alpha, \beta]$ 上连续，又 $a(u), b(u)$ 在 $[\alpha, \beta]$ 上连续，且 $a \leq a(u), b(u) \leq b$，则

	$$
	\psi(u) = \int_{a(u)}^{b(u)} f(x, u) \, \text{d}x
	$$

	在 $[\alpha, \beta]$ 上连续。

!!! abstract "定理(可导性)"

	设 $f(x, u)$, $f'_u(x, u) \in C[a, b] \times [\alpha, \beta]$, 又

	$a(u), b(u)$ 在 $[\alpha, \beta]$ 上可导，且 $a \leq a(u), b(u) \leq b$，则

	$$
	\psi(u) = \int_{a(u)}^{b(u)} f(x, u) \, \text{d}x
	$$

	在 $[\alpha, \beta]$ 上可导，且

	$$
	\frac{\text{d}}{\text{d}u} \int_{a(u)}^{b(u)} f(x, u) \, \text{d}x = \int_{a(u)}^{b(u)} f'_u(x, u) \, \text{d}x
	+ f(b(u), u) b'(u) - f(a(u), u) a'(u)
	$$

## 含参变量的反常积分

## Euler 积分

---
comments: true
---

# 曲线和曲面积分

## 第一型曲线积分

### 性质

无方向性、线性性、可加性.

### 计算

设 $f(x,y)$ 在光滑曲线 $L$ 上连续，$L$ 的参数方程为
$$
r = r(t) = x(t)\mathbf{i} + y(t)\mathbf{j}, \quad t \in [\alpha, \beta]
$$
则有
$$
\int_L f(x,y) \, \text{d}s = \int_\alpha^\beta f(x(t), y(t)) \sqrt{x'^2(t) + y'^2(t)} \, \text{d}t
$$

**注意** 由于 $ds$ 是弧长，取正值，故定积分限应 $\alpha < \beta$

若曲线 $L$ 的方程为 $y = y(x)$，$x \in [a, b]$，则
$$
\int_L f(x,y) \, \text{d}s = \int_a^b f(x, y(x)) \sqrt{1 + y'^2(x)} \, \text{d}x
$$

## 第一型曲面积分

### 计算

## 第二型曲线积分

!!! abstract "Green 定理"

	设 $\mathbf{v} = (P(x,y),Q(x,y))$ 是单连通区域 $D$ 内的光滑向量场，则下面四条等价：

	1. 在 $D$ 内的任一条分段光滑闭曲线 $L$ 上
	$\begin{aligned}\oint_LP\text{d}x+Q\text{d}y=0\end{aligned}$

	2. 在 $D$ 内曲线积分 $\begin{aligned}\oint_LP\text{d}x+Q\text{d}y\end{aligned}$ 与路径无关

	3. 向量场是某函数的**梯度场**，即存在 $\varphi(x,y)$，使得
	$\mathbf{v} = \nabla\varphi(x,y) \text{ or } \text{d}\varphi = P\text{d}x+Q\text{d}y$

	4. $\begin{aligned}\frac{\partial Q}{\partial x}\equiv \frac{\partial P}{\partial x}\end{aligned}$ 在 $D$ 内恒成立

## 第二型曲面积分

向量形式
$$
\iint_S\bm{v}\cdot \text{d}\bm{S} = \iint_S(\bm{v\cdot \bm{n}^{\circ}})\text{d}S
$$
坐标形式
$$
\iint_S\bm{v}\cdot \text{d}\bm{S} = \iint_SP\text{d}y\text{d}z+Q\text{d}z\text{d}x+R\text{d}x\text{d}y
$$

$\bm{v}=(P,Q,R)$ - 均匀流体的流速场

$\bm{n}^{\circ}$ - 指向正侧单位法向量

### 计算

若定侧光滑曲面 $S$ 为 $\begin{cases}
x=x(u,v)\\
y=y(u,v)\\
z=z(u,v)
\end{cases},\quad (u,v)\in D$ 则
$$
\iint_SP\text{d}y\text{d}z+Q\text{d}z\text{d}x+R\text{d}x\text{d}y = \pm \iint_D(PA+QB+RC)\text{d}u\text{d}v
$$

**注** 其中 $\pm$ 号选择由 $S$ 指定侧的法向量确定.

**特例** 
**1)** 若曲面 $S$ 的方程为 $z = f(x, y)$，$(x, y) \in D$，则
$$
\iint_S P \text{d}y \text{d}z + Q \text{d}z \text{d}x + R \text{d}x \text{d}y = \pm \iint_D (-P f_x' - Q f_y' + R) \text{d}x \text{d}y
$$
（合一投影法）

**2)** 当 $P = Q = 0$ ，曲面 $S$ 为 $z = f(x, y)$，$(x, y) \in D$ 时
$$
\iint_S R(x, y, z) \text{d}x \text{d}y = \pm \iint_D R(x, y, f(x, y)) \text{d}x \text{d}y
$$

当曲面 $S$ 指定上侧时，选 $+$ 号，指定下侧时，选 $-$ 号。

**3)** 当曲面 $S$ 为母线平行于z轴的柱面时
$$
\iint_S R(x, y, z) \text{d}x \text{d}y = 0
$$
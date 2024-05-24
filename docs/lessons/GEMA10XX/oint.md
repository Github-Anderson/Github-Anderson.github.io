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

$$
\text{d}s = \sqrt{x'^2(t) + y'^2(t)} \, \text{d}t
$$

则有

$$
\int_L f(x,y) \, \text{d}s = \int_\alpha^\beta f(x(t), y(t)) \sqrt{x'^2(t) + y'^2(t)} \, \text{d}t
$$

### 注

- 由于 $\text{d}s$ 是弧长，取正值，故定积分限应 $\alpha < \beta$

- 若曲线 $L$ 的方程为 $y = y(x)$，$x \in [a, b]$，则

  $$
	\int_L f(x,y) \, \text{d}s = \int_a^b f(x, y(x)) \sqrt{1 + y'^2(x)} \, \text{d}x
  $$

- 在极坐标 $r=r(\theta)$ 下，$\text{d}s = \sqrt{r^2+r'^2}\text{d}\theta$

## 第一型曲面积分

### 计算

设有光滑参数曲面 $S$:

$$
\bm{r} = \bm{r}(u,v) = x(u,v)\bm{i} + y(u,v)\bm{j} + z(u,v)\bm{k},\quad (u,v)\in D
$$

$$
\text{d}S = |\bm{r}_u'(u,v)\times \bm{r}_v'(u,v)|\text{d}u\text{d}v
$$

故曲面面积:

$$
\iint_Sf(x,y,z)\text{d}S = \iint_Df(x(u,v),y(u,v),z(u,v))\sqrt{A^2+B^2+C^2}\text{d}u\text{d}v
$$

其中 $\begin{aligned}A=\frac{\partial (y,z)}{\partial (u,v)}, B=\frac{\partial (z,x)}{\partial (u,v)}, C=\frac{\partial (x,y)}{\partial (u,v)}\end{aligned}$

### 注

- 若曲面 $S$ 的显式方程为 $z=z(x,y), (x,y)\in D$，则

$$\iint_Sf(x,y,z)\text{d}S = \iint_Df(x,y,z(x,y))\sqrt{1+{z'_x}^2+{z'_y}^2}\text{d}x\text{d}y$$

## 第二型曲线积分

### 定义

设起点参数为 $\alpha$ ，终点参数为 $\beta$ 的平面定向曲线 $L$ 的参数方程为

$$\bm{r}=\bm{r}(t)=x(t)\bm{i}+y(t)\bm{j}\quad t:\alpha\to\beta$$

$\bm{r}'(t)=x'(t)\bm{i}+y'(t)\bm{j}$ - 指向参数增加方向切向量

$\begin{aligned}\bm{\tau}\stackrel{\text{def}}{=}\frac{\bm{r}'(t)}{\left|\bm{r}'(t)\right|}\end{aligned}$ - 指向参数增加方向单位切向量

若 $D$ 内的任意一条闭曲线所围区域都落在 $D$ 内, 则称 $D$ 为**单连通**的, 否则称其为**复连通**的

当当点沿区域 $D$ 边界朝一个方向前进时, $D$ 总在其**左手侧**, 规定此方向为区域 $D$ 诱导的**边界正向**, 记为 $\partial D^+$

与 $\partial D^+$ 相反的方向称为 $D$ 的边**界负向**, 记为 $\partial D^-$

#### 向量形式

$$\int_L\bm{F}\cdot \text{d}\bm{r}\stackrel{\text{def}}{=}\int_L(\bm{F}\cdot\bm{\tau})\text{d}s$$

#### 坐标形式

$$\begin{aligned}\int_L\bm{F}\cdot \text{d}\bm{r}&=\int_L(P\cos\alpha+Q\cos\beta)\text{d}s\\
&=\int_LP\text{d}x+Q\text{d}y
\end{aligned}$$

### 计算

若定向曲线 $L$ 为 $\begin{cases}
x=x(t),\\
y=y(t),
\end{cases}\quad t:\alpha\to\beta$，则

$$\int_LP\text{d}x+Q\text{d}y=\int_\alpha^\beta[P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)]\text{d}t$$

### 注

- 当 $L$ 为闭曲线时，视向量场$\bm{v}=(P,Q)$ 为流体的**流速场**，则积分表示流体沿 $L$ 的**环流量**，可记为

$$\varPhi=\oint_L\bm{v}\cdot\text{d}\bm{r}=\oint_LP\text{d}x+Q\text{d}y$$

- 若曲线 $L$ 的方程为 $y = y(x), x:a \to b$, 则

$$\int_LP\text{d}x+Q\text{d}y=\int_a^b[P(x,y(x))+Q(x,y(x))y'(x)]\text{d}x$$

- 若 $L$ 为平行 $x$ 轴的定向线段, 则 $\displaystyle\int_LQ\text{d}y=0$

### Green 定理

!!! abstract "公式"

	设 $\bm{v} = (P(x,y),Q(x,y))$ 是有界闭域 $D$ 内的光滑向量场，则有

	$$\oint_{\partial D^+}P\text{d}x+Q\text{d}y=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\text{d}x\text{d}y$$

	向量形式

	$$\oint_{\partial D}=\bm{F}\cdot\bm{n}^{\circ}\text{d}s=\iint_D\nabla\cdot\bm{F}\text{d}\sigma$$

设平面有界闭域 $D$ 的边界分段光滑, 则其面积
$$
S=\frac{1}{2}\oint_{\partial D^+}x\text{d}y-y\text{d}x$$

=== "二维形式"

	!!! tip "定理"

		设 $\bm{v} = (P(x,y),Q(x,y))$ 是单连通区域 $D$ 内的光滑向量场，则下面四条等价：

		1. 在 $D$ 内的任一条分段光滑闭曲线 $L$ 上
		$\begin{aligned}\oint_LP\text{d}x+Q\text{d}y=0\end{aligned}$

		2. 在 $D$ 内曲线积分 $\begin{aligned}\oint_LP\text{d}x+Q\text{d}y\end{aligned}$ 与路径无关，即值仅与 $A,B$ 有关, 而与 $L$ 无关

		3. 向量场是某函数的**梯度场**，即存在 $\varphi(x,y)$，使得
		$\bm{v} = \nabla\varphi(x,y) \text{ or } \text{d}\varphi = P\text{d}x+Q\text{d}y$

		4. $\begin{aligned}\frac{\partial Q}{\partial x}\equiv \frac{\partial P}{\partial y}\end{aligned}$ 在 $D$ 内恒成立
	
	设 $v$ 在 $D$ 内的曲线积分与路径无关, 则对 $\forall A, B\in D$, 有

	$$\int_A^B\bm{v}\cdot\text{d}\bm{r}=\varphi(B)-\varphi(A)$$

	其中 $\varphi(x,y)$ 满足 $\bm{v}=\nabla\varphi$


=== "三维形式"

	!!! tip "定理"

		设 $\bm{v} = (P(x,y,z),Q(x,y,z),R(x,y,z))$ 是一维单连通区域 $V$ 内的光滑向量场，则下面四条等价：

		1. 在 $V$ 内的任一条分段光滑闭曲线 $L$ 上
		$\begin{aligned}\oint_LP\text{d}x+Q\text{d}y+R\text{d}z=0\end{aligned}$

		2. 在 $V$ 内曲线积分 $\begin{aligned}\oint_LP\text{d}x+Q\text{d}y+R\text{d}z\end{aligned}$ 与路径无关，即值仅与 $A,B$ 有关, 而与 $L$ 无关

		3. 向量场是某函数的**梯度场**，即存在 $\varphi(x,y,z)$，使得
		$\bm{v} = \nabla\varphi(x,y,z) \text{ or } \text{d}\varphi = P\text{d}x+Q\text{d}y+R\text{d}z$

		4. $\begin{aligned}\frac{\partial R}{\partial y}=\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}=\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}\end{aligned}$ 在 $D$ 内恒成立

	设 $v$ 在 $D$ 内的曲线积分与路径无关, 则对 $\forall A, B\in D$, 有

	$$\int_A^B\bm{v}\cdot\text{d}\bm{r}=\varphi(B)-\varphi(A)$$

	其中 $\varphi(x,y,z)$ 满足 $\bm{v}=\nabla\varphi$

### 全微分求积

设 \( P(x, y) \), \( Q(x, y) \) 在单连通区域 \( D \) 有连续偏导数, 且

$$
\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}
$$

则存在二元函数 \( \varphi \) 使得 \( \text{d}\varphi = P\text{d}x + Q\text{d}y \)，即 \( P\text{d}x + Q\text{d}y \) 是 \( \varphi \) 的**全微分**，此时称 \( \varphi \) 为 \( P\text{d}x + Q\text{d}y \) 的**原函数**。已知

$$\varphi(x,y)=\int_{(x_0,y_0)}^{(x,y)}P\text{d}x+Q\text{d}y$$

若 $P(x, y)\text{d}x + Q(x, y)\text{d}y$ 是某函数的全微分，则称方程 $P\text{d}x + Q\text{d}y = 0$ 为**全微分方程**。

**判别式** $\begin{aligned}\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}\end{aligned}$

**解法** 求出原函数 $\varphi(x, y)$，则通解为 $\varphi(x, y) = C$


## 第二型曲面积分

### 定义

#### 向量形式

$$
\iint_S\bm{v}\cdot \text{d}\bm{S} = \iint_S(\bm{v\cdot \bm{n}^{\circ}})\text{d}S
$$

#### 坐标形式

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

### 注

其中 $\pm$ 号选择由 $S$ 指定侧的法向量确定.

### 特例

- 若曲面 $S$ 的方程为 $z = f(x, y)$，$(x, y) \in D$，则

$$
\iint_S P \text{d}y \text{d}z + Q \text{d}z \text{d}x + R \text{d}x \text{d}y = \pm \iint_D (-P f_x' - Q f_y' + R) \text{d}x \text{d}y
$$
（合一投影法）

- 当 $P = Q = 0$ ，曲面 $S$ 为 $z = f(x, y)$，$(x, y) \in D$ 时

$$
\iint_S R(x, y, z) \text{d}x \text{d}y = \pm \iint_D R(x, y, f(x, y)) \text{d}x \text{d}y
$$

当曲面 $S$ 指定上侧时，选 $+$ 号，指定下侧时，选 $-$ 号。

- 当曲面 $S$ 为母线平行于z轴的柱面时

$$
\iint_S R(x, y, z) \text{d}x \text{d}y = 0
$$

## Gauss定理和Stokes定理

!!! abstract "Gauss 公式"

	设 $\bm{v} = (P, Q, R)$ 为空间有界闭域 $V$ 上的**光滑向量场**，$\partial V$ 是**分片光滑**闭曲面，则有

	$$
	\oiint_{\partial V^+}P\text{d}y\text{d}z+Q\text{d}z\text{d}x+R\text{d}x\text{d}y = \iiint_V\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\text{d}V
	$$

	向量形式
	$$
	\oiint_{\partial V+}\bm{v}\cdot\text{d}\bm{S} = \iiint_V\nabla \cdot \bm{v}\text{d}V = \iiint_V\text{div }{\bm{v}}\text{d}V
	$$

- 设空间有界闭域 $V$ 的边界分片光滑, 则其体积

    $$V = \frac{1}{3}\oiint_{\partial V^+}x\text{d}y\text{d}z+y\text{d}z\text{d}x+z\text{d}x\text{d}y$$

- **散度物理意义** $\begin{aligned}\text{div }\bm{v}(M) = \lim_{V\to M}\frac{1}{\text{Vol}(V)}\oiint_{\partial V^+}\bm{v}\cdot \text{d}\bm{S}\end{aligned}$

!!! abstract "Stokes 公式"

	设 \( \bm{v} = (P, Q, R) \) 为空间光滑曲面 \( S \) 上的光滑向量场， \( \partial S \) 是分段光滑闭曲线，则有

	$$\begin{aligned}&\oint_{\partial S}P\text{d}x+Q\text{d}y+R\text{d}z\\
	=& \iint_S\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\text{d}y\text{d}z+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\text{d}z\text{d}x+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\text{d}x\text{d}y\\
	=& \iint_S
	\begin{vmatrix}
	\text{d}y\text{d}z & \text{d}z\text{d}x & \text{d}x\text{d}y\\
	\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
	P & Q & R
	\end{vmatrix} 
	= \iint_S
	\begin{vmatrix}
	\cos\alpha & \cos\beta & \cos\gamma\\
	\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
	P & Q & R
	\end{vmatrix}\text{d}S
	\end{aligned}$$

	其中 $\partial S$ 定向与 $(\cos\alpha, \cos\beta, \cos\gamma)$ 按右手法则联系


	向量形式

	$$\begin{aligned}
	\oint_{\partial S}\bm{v}\cdot \text{d}\bm{r} &= \iint_S\text{rot }\bm{v}\cdot \text{d}\bm{S}\\
	&=\iint_S\text{rot }\bm{v}\cdot \bm{n}^{\circ}\text{d}S
	\end{aligned}$$



- **旋度物理意义** $\begin{aligned}\text{rot }\bm{v}\cdot \bm{n}^{\circ} \mid_M = \lim_{S\to M}\frac{1}{\text{Area}(V)}\oint_{\partial S}\bm{v}\cdot \text{d}\bm{r}\end{aligned}$

## 保守场

### 定义

- 设 $V$ 为空间区域, 若 $V$ 中的任意闭曲线都可在 $V$ 中 连续收缩为一点, 则称 $V$ 为一维(曲面)单连通.

- 若 $V$ 中的任意闭曲面可在 $V$ 中连续收缩为一点, 则称 $V$ 为二维(空间)单连通.

- 设 \(\bm{v} = (P, Q, R)\) 是连通区域 \(V\) 内光滑向量场，若

	1. 在 \(V\) 内曲线积分 \(\int_L P \text{d}x + Q \text{d}y + R \text{d}z\) 与路径无关，则称 \(\bm{v}\) 为 \(V\) 中的 **保守场**;

	2. \(\text{d} \varphi = P \text{d}x + Q \text{d}y + R \text{d}z\)，则称 \(\varphi\) 是 \(\bm{v}\) 的 **势函数**，\(\bm{v}\) 是 \(\varphi\) 的 **梯度场**，即 \(\bm{v} = \nabla \varphi\);

	3. 在 \(V\) 内恒有 \(\operatorname{rot} \bm{v} = 0\)，则称 \(\bm{v}\) 为 \(V\) 中的 **无旋场**.

- 设 \(\bm{v}\) 为光滑向量场，\(V \subset \mathbb{R}^3\)。若存在向量场 \(\bm{\alpha}\) 使得 \(\bm{v} = \operatorname{rot} \bm{\alpha} = \nabla \times \bm{\alpha}\)，则称 \(\bm{\alpha}\) 为 \(\bm{v}\) 的 **向量势**.


- 若 $\bm{v}$ 为光滑向量场, 则 $\bm{v}$ 存在向量势的充要条件是 $\bm{v}$ 为无源场.

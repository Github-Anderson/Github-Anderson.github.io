---
comments: true
---

# 多元函数微分学

## 基本概念

- 邻域 $B(M_0,r) = \{M\mid \rho(M,M_0)<r\}$

- 内点，核$E^\circ$、外点 $(E^c)^\circ$、边界点，边界 $\partial E$

- 内点 $+$ 非孤立边界点 $=$ 聚点，导集$E'$

- $E=E^\circ \Rightarrow$ 开集 $\leftrightarrow$ 闭集

## 多变量函数的极限

### 二重极限

$$\lim_{M\to M_0} f(M)=\lim_{(x,y)\to (x_0,y_0)}f(x,y)=a$$

### 累次极限

$$\lim_{x\to x_0}\lim_{y\to y_0}f(x,y) = a$$

## 性质

### 连续性

$$\lim_{(x,y)\to (x_0,y_0)}f(x,y) = f(x_0,y_0)$$

### 可偏导

$$f_x'(x_0,y_0) = \lim_{\Delta x\to 0}\dfrac{f(x_0+\Delta x)-f(x_0,y_0)}{\Delta x}$$

$$f_y'(x_0,y_0) = \lim_{\Delta y\to 0}\dfrac{f(y_0+\Delta y)-f(x_0,y_0)}{\Delta y}$$

### 可微

$$\Delta f-\left[f_x'(x_0,y_0)\Delta x + f_y'(x_0,y_0)\Delta y\right]=o(\sqrt{\Delta x^2+\Delta y^2})$$

或

$$\lim_{\rho \to 0}\dfrac{\Delta f-f_x'(x_0,y_0)\Delta x-f_y'(x_0,y_0)\Delta y}{\rho} = 0$$

其中 $\Delta f = f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)$

## 隐函数

### 多元隐函数

$F(x_0,y_0,z_0) = 0, z = f(x,y)$

$\dfrac{\partial z}{\partial x} = -\dfrac{F_x'}{F_z'},\ \dfrac{\partial z}{\partial y} = -\dfrac{F_y'}{F_z'},\ F_z'\neq 0$

### 隐映射存在定理

$F(x_0,y_0,u_0,v_0) = 0, G(x_0,y_0,u_0,v_0) = 0$，且在某一邻域存在连续的偏导数

$$
J_0 = \dfrac{\partial (F,G)}{\partial (u,v)}\bigg|_{P_0}=\begin{vmatrix}\dfrac{\partial F}{\partial u} & \dfrac{\partial F}{\partial v}\\\\
\dfrac{\partial G}{\partial u} & \dfrac{\partial G}{\partial v}\end{vmatrix}_{P_0}\neq 0
$$

则 $\begin{cases}F(x,y,u,v)=0\\G(x,y,u,v)=0\end{cases}$ 可唯一确定**隐映射** $\begin{cases}u=u(x,y)\\v=v(x,y)\end{cases}$

$$
\frac{\partial u}{\partial x} = -\frac{1}{J} \frac{\partial (F, G)}{\partial (x, v)} = -\frac{1}{J} \begin{vmatrix} 
F_x & F_v \\ 
G_x & G_v 
\end{vmatrix}
$$

$$
\frac{\partial u}{\partial y} = -\frac{1}{J} \frac{\partial (F, G)}{\partial (y, v)} = -\frac{1}{J} \begin{vmatrix} 
F_y & F_v \\ 
G_y & G_v 
\end{vmatrix}
$$

$$
\frac{\partial v}{\partial x} = -\frac{1}{J} \frac{\partial (F, G)}{\partial (u, x)} = -\frac{1}{J} \begin{vmatrix} 
F_u & F_x \\ 
G_u & G_x 
\end{vmatrix}
$$

$$
\frac{\partial v}{\partial y} = -\frac{1}{J} \frac{\partial (F, G)}{\partial (u, y)} = -\frac{1}{J} \begin{vmatrix} 
F_u & F_y \\ 
G_u & G_y 
\end{vmatrix}
$$

### 逆映射存在定理

$$
J_0 = \left.\dfrac{\partial (u, v)}{\partial (x, y)}\right|_{P_0} \neq 0,
$$

则

$$
\begin{cases}
u = u(x, y) \\
v = v(x, y)
\end{cases}
$$

在 $B(u_0, v_0)$ 存在逆映射 $\begin{cases}x = x(u, v) \\y = y(u, v)\end{cases}$ 满足 $\begin{cases}x_0 = x(u_0, v_0) \\y_0 = y(u_0, v_0)\end{cases}$

且有连续偏导数

$$
\begin{matrix}
\dfrac{\partial x}{\partial u} = \dfrac{1}{J} \cdot \dfrac{\partial v}{\partial y} & \dfrac{\partial x}{\partial v} = -\dfrac{1}{J} \cdot \dfrac{\partial u}{\partial y}\\\\
\dfrac{\partial y}{\partial u} = -\dfrac{1}{J} \cdot \dfrac{\partial v}{\partial x} & \dfrac{\partial y}{\partial v} = \dfrac{1}{J} \cdot \dfrac{\partial u}{\partial x}
\end{matrix}
$$

## Taylor 公式和极值

### Taylor 公式

???+ tip "Taylor公式"

	设函数 \( f(x, y) \) 在 \( B(P_0(x_0, y_0)) \) 有 \( n+1 \) 阶连续偏导数，则 \(\exists \theta \in (0, 1) \):

	$$
	f(x_0 + h, y_0 + k) = \sum_{m=0}^{n} \frac{1}{m!} \left( h \frac{\partial}{\partial x} + k \frac{\partial}{\partial y} \right)^m f(x_0, y_0) + R_n
	$$

	其中 Lagrange 型余项

	$$
	R_n = \frac{1}{(n+1)!} \left( h \frac{\partial}{\partial x} + k \frac{\partial}{\partial y} \right)^{n+1} f(x_0 + \theta h, y_0 + \theta k)
	$$

## 极值

### 驻点

$f_x'(x_0,y_0)=0=f_y'(x_0,y_0)$，则 $f(x_0,y_0)$ 为驻点

### 极值点

设 $f(x, y)$ 在 $B(P_0(x_0, y_0))$ 的二阶偏导数连续，且
$f'_x(x_0, y_0) = 0, \quad f'_y(x_0, y_0) = 0$

记 **Hesse 矩阵**

$$ H = \begin{pmatrix}
f''_{xx} & f''_{xy} \\\\
f''_{yx} & f''_{yy}
\end{pmatrix}_{P_0} $$

1. 若 $H$ 为正定矩阵，则 $f(x_0, y_0)$ 为严格极小值

2. 若 $H$ 为负定矩阵，则 $f(x_0, y_0)$ 为严格极大值。

3. 若 $H$ 为不定矩阵，则 $f(x_0, y_0)$ 非极值。

### 条件极值（Lagrange乘数法）

$$L(x,y,\lambda) = f(x,y) + \lambda \varphi(x,y)$$

$$\begin{cases}
L_x'=f_x'+\lambda \varphi_x'=0\\
L_y'=f_y'+\lambda \varphi_y'=0\\
L_{\lambda}'=\varphi(x,y)=0
\end{cases}$$

## 向量场的微商

- Hamilton 算子 $\nabla = \dfrac{\partial}{\partial x}\bm{i} + \dfrac{\partial}{\partial y}\bm{j} + \dfrac{\partial}{\partial z}\bm{k}$

- Laplace 算子 $\Delta = \nabla \cdot \nabla = \dfrac{\partial^2}{\partial x^2} + \dfrac{\partial^2}{\partial y^2} + \dfrac{\partial^2}{\partial z^2}$

### 梯度、散度与旋度

设有函数 $u=u(x,y,z)$

- $u$ 的梯度 $|\text{grad }u| = |\nabla u| = |u_x'\bm{i} + u_y'\bm{j} + u_z'\bm{k}|$

设有向量场 $\bm{v}(x,y,z) = P\bm{i} + Q\bm{j} + R\bm{k}$

- $\bm{v}$ 的散度 $\text{div }\bm{v}\stackrel{\text{def}}{=}\nabla \cdot \bm{v} = \dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y} + \dfrac{\partial R}{\partial z}$

- $\bm{v}$ 的旋度 $\textbf{rot }\bm{v}\stackrel{\text{def}}{=}\nabla \times \bm{v} = 
\begin{vmatrix}
\bm{i} & \bm{j} & \bm{k}\\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z}\\
P & Q & R
\end{vmatrix}$

- $\textbf{rot grad }\varphi = \nabla \times \nabla \varphi = \bm{0}$

- $\text{div }\textbf{rot }\bm{v} = \nabla \cdot \nabla \times \bm{a} = 0$



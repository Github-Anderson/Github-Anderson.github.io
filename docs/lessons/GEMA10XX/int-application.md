---
comments: true
---

# 积分的运用

## 平面曲线弧长

### 直角坐标

$$
S(l)=\int_{a}^{b}\sqrt{1+f'^{2}(x)}dx\quad (a<b)
$$

### 参数方程

$$
S(l)=\int_{\alpha}^{\beta}\sqrt{x'^{2}(t)+y'^{2}(t)}dt\quad (\alpha<\beta)
$$

### 极坐标方程

$$
S(l)=\int_{\alpha}^{\beta}\sqrt{r^{2}(\theta)+r'^{2}(\theta)}d\theta\quad (\alpha<\beta)
$$

## 平面图形面积

### 直角坐标

$$
A=\int_{a}^{b}f(x)dx
$$

### 参数方程

$$
A=\int_{a}^{b}f(x)dx\stackrel{\text{x=x(t)}}{=}\int_{\alpha}^{\beta}y(t)dx(t)=\int_{\alpha}^{\beta}y(t)x'(t)dt
$$

### 极坐标方程

$$
A=\frac{1}{2}\int_{\alpha}^{\beta}r^{2}(\theta)d\theta
$$

## 旋转体体积

### 薄片法

垂直$x$轴的平面截面面积$S(x)$，则$\Omega$的体积

$$
V=\int_{a}^{b}S(x)dx
$$

曲线$y=f(x)$与$x=a$，$x=b$及$x$轴所围图形绕$x$轴旋转体体积

$$
V_{x}=\pi\int_{a}^{b}f^{2}(x)dx
$$

### 薄壳法

曲线$y=f(x)$与$x=a$，$x=b$及$x$轴所围图形绕$y$轴旋转体体积

$$
V=2\pi\int_{a}^{b}xydx=2\pi\int_{a}^{b}xf(x)dx
$$

## 旋转体侧面积

### 直角坐标

绕$x$轴旋转所得曲面面积

$$
A_{x}=2\pi\int_{a}^{b}f(x)\sqrt{1+f'^{2}(x)}dx
$$

绕$y$轴旋转所得曲面面积

$$
A_{x}=2\pi\int_{a}^{b}x\sqrt{1+f'^{2}(x)}dx
$$

### 参数方程

绕$x$轴旋转所得曲面面积

$$
A_{x}=2\pi\int_{a}^{b}y(t)\sqrt{x'^{2}(t)+y'^{2}(t)}dt
$$

绕$y$轴旋转所得曲面面积

$$
A_{y}=2\pi\int_{a}^{b}x(t)\sqrt{x'^{2}(t)+y'^{2}(t)}dt
$$

### 极坐标方程

绕极轴旋转所得曲面面积

$$
A_{x}=2\pi\int_{\alpha}^{\beta}r(\theta)\sin\theta\sqrt{r'^{2}(\theta)+r'^{2}(\theta)}d\theta
$$

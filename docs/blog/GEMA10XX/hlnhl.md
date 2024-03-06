# HL & NHL

## 基本概念

- **微分方程**：含自变量, 未知函数及其导数的关系式;

- **方程的阶**：未知函数导数的最高阶数;

- **n阶方程** 一般形式：$F(x, y, y', y'', \dots, y^{(n)}) = 0$

    $x$ — 自变量, $y$ — 未知函数

- **方程的解**：函数 $y = y(x)$ 代入方程得到恒等式

- **方程通解**：解 $y = y(x, C_1, C_2, \dots, C_n)$​ 中含独立任意常数, 且“个数 = 阶数”.

- 函数 $y = y(x, C_1, C_2)$ 中任意常数 $C_1, C_2$ 独立，即

$$\left| \begin{matrix} \frac{\partial y}{\partial C_1} & \frac{\partial y}{\partial C_2} \\
\frac{\partial y'}{\partial C_1} & \frac{\partial y'}{\partial C_2}
\end{matrix}\right| \neq 0.$$

- **方程特解**：通解中任意常数被确定;
- **定解条件**：用于确定通解中任意常数的条件
- **初始条件**：自变量取同一点值的定解条件
- **边界条件**：自变量取区间端点值的定解条件
- **定解问题**：方程 + 定解条件

## 一阶微分方程

### 可分离变量方程

- **形式**：$\begin{aligned}\frac{\mathrm{d}y}{\mathrm{d}x} = g(x)h(y)\end{aligned}$

- **解法**：化为 $\begin{aligned}\frac{\mathrm{d}y}{h(y)} = g(x)\mathrm{d}x\end{aligned}$ 后两边积分

### 一阶齐次方程

- **形式**：$\begin{aligned}\frac{\mathrm{d}y}{\mathrm{d}x} = \varphi(\frac{y}{x})\end{aligned}$

- **解法**：设 $\begin{aligned}u = \frac{y}{x} \Rightarrow y' = u + xu' \Rightarrow \frac{\mathrm{d}u}{\mathrm{d}x} = \frac{\varphi(u)-u}{x}\end{aligned}$

### 一阶线性方程

- **形式**：$y' + P(x)y = Q(x)$

- **解法**：*常数变易法*
  
  先考虑特殊情况 $Q = 0$ 时的解，再在通解中将常数变换成待定函数

- **公式**：$\begin{aligned}y = e^{-\int P(x)\mathrm{d}x} \left( \int Q(x) e^{\int P(x)\mathrm{d}x} + C \right)\end{aligned}$

### Bernoulli方程

- **形式**：$y' + P(x)y = Q(x)y^n \quad (n \neq 0,1)$
- **解法**：代换 $z = y^{1-n} \Rightarrow z' + (1-n)Pz = (1-n)Q$​

### 可降阶微分方程

二阶微分方程一般形式：$F(x, y, y', y'') = 0$​

=== "$y''= f(x, y')$ 型方程（缺 $y$ 型）"

    **解法**：设 $\begin{aligned}y' = p \Rightarrow \frac{\mathrm{d}p}{\mathrm{d}x} = f(x, p)\end{aligned}$

=== "$y''= f(x, y')$ 型方程（缺 $x$ 型）"

    **解法**：设 $\begin{aligned}y' = p \Rightarrow p\frac{\mathrm{d}p}{\mathrm{d}y} = f(y, p)\end{aligned}$

## 二阶微分方程

### $n$ 阶线性微分方程标准形式

$$y^n+p_1(x)y^{n-1}+\dots +p_{n-1}(x)y'+p_n(x)y=f(x) \tag{NHL}$$

$p_1(x), \dots p_n(x)$ - 方程的系数  $f(x)$ - 非齐次项

$$y^n+p_1(x)y^{n-1}+\dots +p_{n-1}(x)y'+p_n(x)y=0 \tag{HL}$$

### 二阶线性微分方程标准形式

$$y''+p(x)y'+q(x)y=f(x) \tag{NHL}$$

$$y''+p(x)y'+q(x)y=0 \tag{HL}$$

### 线性相关与无关

对函数$y_1(x), y_2(x)$，若存在**不全为零**的常数$c_1, c_2$，使得

$$c_1y_1(x)+c_2y_2(x)\equiv 0(x\in I)$$

则称 $y_1(x), y_2(x)$ **线性相关**，否则称它们**线性无关**

#### Wronski 行列式

设 $y_1(x), y_2(x)$ 在区间I上可导, 则称

$$W(x) = \left|\begin{matrix}y_1(x) & y_2(x)\\ y_1'(x) & y_2'(x)\end{matrix}\right|$$

为 $y_1(x), y_2(x)$ 的 Wronski 行列式

设 $y_1(x), y_2(x)$ 是$(HL)$的解，则

- 它们在$I$上线性相关 $\Leftrightarrow W(x) \equiv 0(x\in I)$

- 它们在$I$上线性无关 $\Rightarrow W(x)$ 恒不为零 $(x\in I)$

#### Liouville 公式

$$W(x) = W(x_0)e^{-\int_{x_0}^{x}p(t)\mathrm{d}x}$$

### 求解二阶线性微分方程

求出两个线性无关的解（即基本解组）

#### Liouville 公式

若 $y_1(x)$ 是 $(HL)$ 的非零解，那么

$$y_2 = y_1 \int \frac{1}{y_1^2} e^{-\int_{x_0}^{x} p(t)\mathrm{d}t}\mathrm{d}x$$

是 $(HL)$ 与 $y_1(x)$ 线性无关的解

#### 常数变易法

若 $(HL)$ 的基本解组为 $y_1(x), y_2(x)$ ，设 $(NHL)$ 特解

$$y^* = c_1(x)y_1(x) + c_2(x)y_2(x)$$

将 $c_1'(x)y_1(x) + c_2'(x)y_2(x) = 0$ 代入 $(NHL)$ 得到

$$c_1'(x)y_1'(x) + c_2'(x)y_2'(x) = f(x)$$

解出

$$c_1'(x) = \frac{-y_2(x)f(x)}{W(x)}, \quad c_2' = \frac{y_1(x)f(x)}{W(x)}$$

### 二阶常系数齐次线性方程

$$y''+py'+qy=0$$

令 $y=e^{\lambda x}$ 得到

$$\lambda^2 + p\lambda + q = 0$$

|特征根情况|通解形式|
|----|----|
|相异实根 $\lambda_1, \lambda_2$|$c_1 e^{\lambda_1x}+c_2 e^{\lambda_2x}$|
|相同实根 $\lambda$|$c_1 e^{\lambda x}+c_2x e^{\lambda x}$|
|共轭复根 $\alpha \pm i\beta$|$c_1e^{\alpha x}\cos \beta x+c_2e^{\alpha x}\sin \beta x$|
---
comments: true
---

# Review of Linear Algebra

## Introduction

- Vectors

- Vector normalization

```cpp
a.normalize()
```

#### Dot Product

1. Find angle between two vectors

2. Find **projection**

![](img/dot.png)

$$
\begin{aligned}&\vec{a}\cdot\vec{b}=\vec{a}^T\vec{b}\\
=&\begin{pmatrix}x_a & y_a & z_ a\end{pmatrix}\begin{pmatrix}x_b\\y_b\\z_b\end{pmatrix}=\begin{pmatrix}x_ax_b+y_ay_b+z_az_b\end{pmatrix}\end{aligned}
$$

```cpp
double dot = a.dot(b);
```


#### Cross Product

1. Determine left / right

2. Determine **inside / outside** 

$$
\vec{a} \times\vec{b} = A*b=\begin{pmatrix}0 & -z_a & y_a\\z_a & 0 & -x_a\\-y_a & x_a & 0\end{pmatrix}\begin{pmatrix}x_b\\y_b\\z_b\end{pmatrix}
$$

```cpp
Eigen::Vector3d cross = a.cross(b);
```

#### Orthonormal Coordinate Frames

Any set of 3 vectors in 3D that
$$
\|\vec{u}\| = \|\vec{v}\| = \|\vec{w}\| = 1
$$

$$
\vec{u}\cdot \vec{v} = \vec{v}\cdot \vec{w} = \vec{u}\cdot\vec{w}=0
$$

$$
\vec{p} = (\vec{p}\cdot \vec{u})\vec{u} + (\vec{p}\cdot \vec{v})\vec{v} + (\vec{p}\cdot \vec{w})\vec{w}
$$

### Matrices

#### Matrix-Matrix Multiplication

#### Matrix-Vector Multiplication

#### Transpose of a Matrix

$$
(AB)^T = B^TA^T
$$

```cpp
a.transposeInPlace()
```

#### Identity Matrix and Inverses

$$
I_{3 \times 3} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

$$
AA^{-1} = A^{-1}A = I
$$

$$
(AB)^{-1} = B^{-1}A^{-1}
$$

```cpp
Eigen::Matrix3d identity_matrix = Eigen::Matrix3d::Identity();

Eigen::Matrix3d inverse_matrix = matrix.inverse();
```

## Transformation

### Why Transformation?

Viewing: (3D to 2D) projection

#### Scale (Non-Uniform)

$$
\begin{bmatrix}x'\\y'\end{bmatrix} = \begin{bmatrix}s_x & 0\\0 & s_y\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}
$$

#### Reflection Matrix

$$
\begin{bmatrix}x'\\y'\end{bmatrix} = \begin{bmatrix}-1 & 0\\0 & 1\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}
$$

#### Shear Matrix

$$
\begin{bmatrix}x'\\y'\end{bmatrix} = \begin{bmatrix}1 & a\\0 & 1\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}
$$

#### Rotate

$$
\mathbf{R}_\theta = \begin{bmatrix}\cos \theta & -\sin\theta\\ \sin\theta & \cos \theta\end{bmatrix}
$$

#### Linear Transforms = Matrices

#### Homogenous Coordinates

Add a third coordinate (w-coordinate)

- 2D point = $(x, y, 1)^T$

- 2D vector = $(x,y,0)^T$

Matrix representation of translations
$$
\begin{pmatrix}
x' \\
y' \\
w'
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & t_x \\
0 & 1 & t_y \\
0 & 0 & 1
\end{pmatrix}
\cdot
\begin{pmatrix}
x \\
y \\
1
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\
y + t_y \\
1
\end{pmatrix}
$$

- vector + vector = vector

- point - point = vector

- point + vector = point

- point + point

  $\begin{pmatrix}x\\y\\w\end{pmatrix}$ is the 2D point $\begin{pmatrix}x/w\\y/w\\1\end{pmatrix},w\neq 0$

#### Affine Transformations

Affine map = linear map + translation
$$
\begin{pmatrix}
x' \\
y' \\
1
\end{pmatrix}
=
\begin{pmatrix}
a & b & t_x \\
c & d & t_y \\
0 & 0 & 1
\end{pmatrix}
\cdot
\begin{pmatrix}
x \\
y \\
1
\end{pmatrix}
$$

### 2D Transformations

#### Scale

$$
\mathbf{S}(s_x, s_y) = \begin{pmatrix}
s_x & 0 & 0 \\
0 & s_y & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

#### Rotation

$$
\mathbf{R}(\alpha) = \begin{pmatrix}
\cos \alpha & -\sin \alpha & 0 \\
\sin \alpha & \cos \alpha & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

#### Translation

$$
\mathbf{T}(t_x, t_y) = \begin{pmatrix}
1 & 0 & t_x \\
0 & 1 & t_y \\
0 & 0 & 1
\end{pmatrix}
$$

#### Transform Ording Matters!

### 3D Transformations

- 3D point = $(x,y,z,1)^T$

- 3D vector = $(x,y,z,0)^T$

  $\begin{pmatrix}x\\y\\z\\w\end{pmatrix}$ is the 2D point $\begin{pmatrix}x/w\\y/w\\z/w\\1\end{pmatrix},w\neq 0$

$$
\begin{pmatrix}
x' \\
y' \\
z' \\
1
\end{pmatrix}
=
\begin{pmatrix}
a & b & c & t_x \\
d & e & f & t_y \\
g & h & i & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
\cdot
\begin{pmatrix}
x \\
y \\
z \\
1
\end{pmatrix}
$$

#### Scale

$$
\mathbf{S}(s_x, s_y, s_z) = \begin{pmatrix}
s_x & 0 & 0 & 0 \\
0 & s_y & 0 & 0 \\
0 & 0 & s_z & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### Translation

$$
\mathbf{T}(t_x, t_y, t_z) = \begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### Rotation

$$
\mathbf{R}_x(\alpha) = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & \cos \alpha & -\sin \alpha & 0 \\
0 & \sin \alpha & \cos \alpha & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
\mathbf{R}_y(\alpha) = \begin{pmatrix}
\cos \alpha & 0 & \sin \alpha & 0 \\
0 & 1 & 0 & 0 \\
-\sin \alpha & 0 & \cos \alpha & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
\mathbf{R}_z(\alpha) = \begin{pmatrix}
\cos \alpha & -\sin \alpha & 0 & 0 \\
\sin \alpha & \cos \alpha & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

### Rodrigues’ Rotation Formula

$$
\mathbf{R}(\mathbf{n}, \alpha) = \cos(\alpha) \mathbf{I} + (1 - \cos(\alpha)) \mathbf{n}\mathbf{n}^T + \sin(\alpha) \mathbf{N}
$$

$$
\mathbf{N} = \begin{pmatrix}
0 & -n_z & n_y \\
n_z & 0 & -n_x \\
-n_y & n_x & 0
\end{pmatrix}
$$

### View / Camera Transformation

Define the camera first

- Position $\vec{e}$
- Look-at / gaze direction $\vec{g}$
- Up direction $\vec{t}$

$$
M_{\text{view}} = R_{\text{view}} T_{\text{view}}
$$

$$
\mathbf{T}_{\text{view}} = 
\begin{pmatrix}
1 & 0 & 0 & -x_e\\
0 & 1 & 0 & -y_e\\
0 & 0 & 1 & -z_e\\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
\mathbf{R}_{\text{view}} = \begin{pmatrix} x_{\hat{g} \times \hat{t}} & y_{\hat{g} \times \hat{t}} & z_{\hat{g} \times \hat{t}} & 0 \\ x_{t} & y_{t} & z_{t} & 0 \\ x_{-g} & y_{-g} & z_{-g} & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$
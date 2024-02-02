# 知识点总结

!!! info "Info"

    - Based on the textbook [*Elementary Linear Algebra Applications Version*]() by Howard Anton, Chris Rorres, and the school's course schedule.

    - Include only easily forgotten concepts.

## Basic

!!! quote "Equivalent Statements"

    *If* $A$ *is an* $n \times n$ *matrix, then the following statements are equivalent.*

    1. $A$ *is invertible*.
    2. $Ax = 0$ *has only the trivial solution*.
    3. *The reduced row echelon form of* $A$ *is* $I_n$.
    4. $A$ is expressible as a product of elementary matrices.
    5. $Ax = b$ *is consistent for every* $n \times 1$ *matrix* $b$.
    6. $Ax = b$ *has exactly one solution for every* $n \times 1$ *matrix* $b$.
    7. $\det(A) \neq 0$.
    8. *The column vectors of* $A$ *are linearly independent*.
    9. *The row vectors of* $A$ *are linearly independent*.
    10. *The column vectors of* $A$ *span* $R_n$.
    11. *The row vectors of* $A$ *span* $R_n$.
    12. *The column vectors of* $A$ *form a basis for* $R_n$.
    13. *The row vectors of* $A$ *form a basis for* $R_n$.
    14. $A$ *has rank* $n$.
    15. $A$ *has nullity* $0$.
    16. *The orthogonal complement of the null space of* $A$ *is* $R^n$.
    17. *The orthogonal complement of the row space of* $A$ *is* $\{0\}$.
    18. *The kernel of* $T_A$ *is* $\{0\}$.
    19. *The range of* $T_A$ *is* $R^n$.
    20. $T_A$ *is one-to-one*.
    21. $\lambda = 0$ *is not an eigenvalue of* $A$.
    22. $A^{T}A$ *is invertible*.

## Eigenvalues and Eigenvectors

If $A$ is an $n \times n$ matrix, and

$$Ax = \lambda x$$

for some scalar $\lambda$, then the scalar $\lambda$ is called an ***eigenvalue*** of $A$ (or of $T_A$), and $x$ is said to be an ***eigenvector*** corresponding to $\lambda$.

If $A$ is an $n \times n$ matrix, then $\lambda$ is an eigenvalue of $A$ if and only if it satisfies the equation

$$\det\left(\lambda I − A \right) = 0$$

This is called the characteristic equation of A.

## Best Approximation

## Matrix Transformations

## Quadratic Forms

## Decompositions

### Diagonalization

$$A = PDP^{-1}$$

- $P = \begin{bmatrix} \mathbf{p}_{1} & \mathbf{p}_{2} & \dots & \mathbf{p}_{n}\end{bmatrix}$ and $D = \begin{bmatrix} \lambda_1 & & \\
& \lambda_2 & \\
& & \ddots & \\
& & & \lambda_n\end{bmatrix}$

- $\mathbf{p}_{i}$ are eigenvectors corresponding to $\lambda_{i}$

### QR Decomposition

#### Gram–Schmidt Process

$Step$ *1*. Let $\mathbf{v}_{1} = \mathbf{u}_{1}$.

$Step$ *2*. Compute the component of $\mathbf{u}_{2}$ that is orthogonal to the space $W_{1}$ spanned by $\mathbf{v}_{1}$. 

$$\mathbf{v}_{2} = \mathbf{u}_{2} - proj_{W_{1}} \mathbf{u}_{2} = \mathbf{u}_{2} - \frac{\left\langle\mathbf{u}_{2},\mathbf{v}_{1}\right\rangle}{\left\lVert\mathbf{v}_{1}\right\lVert^{2}} \mathbf{v}_{1}$$

$Step$ *3*. Also, compute the component of $\mathbf{u}_{3}$ that is orthogonal to the space $W_{1}$ spanned by $\mathbf{v}_{1}$ and $\mathbf{v}_{2}$. 

$$\mathbf{v}_{3} = \mathbf{u}_{3} - proj_{W_{2}} \mathbf{u}_{3} = \mathbf{u}_{3} - \frac{\left\langle\mathbf{u}_{3},\mathbf{v}_{1}\right\rangle}{\left\lVert\mathbf{v}_{1}\right\lVert^{2}} \mathbf{v}_{1} - \frac{\left\langle\mathbf{u}_{3},\mathbf{v}_{2}\right\rangle}{\left\lVert\mathbf{v}_{2}\right\lVert^{2}} \mathbf{v}_{2}$$

#### QR Decomposition

$$A = QR$$

- $A = \begin{bmatrix}\mathbf{u}_{1} \vert \mathbf{u}_{2} \vert \cdots \vert \mathbf{u}_{n} \end{bmatrix}$ and $Q = \begin{bmatrix}\mathbf{q}_{1} \vert \mathbf{q}_{2} \vert \cdots \vert \mathbf{q}_{n} \end{bmatrix}$

- $R = \begin{bmatrix}
\left\langle\mathbf{u}_1, q_1\right\rangle & \left\langle\mathbf{u}_2, q_1\right\rangle & \cdots & \left\langle\mathbf{u}_n, q_1\right\rangle \\
0                   & \left\langle\mathbf{u}_2, q_2\right\rangle & \cdots & \left\langle\mathbf{u}_n, q_2\right\rangle \\
\vdots              & \vdots              & \ddots & \vdots              \\
0                   & 0                   & \cdots & \left\langle\mathbf{u}_n, q_n\right\rangle
\end{bmatrix}$

### Orthogonally diagonalization

$$A = PDP^{T}$$

- Applying the Gram–Schmidt process to $\begin{bmatrix} \mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{n}\end{bmatrix}$, we can get $P = \begin{bmatrix} \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}\end{bmatrix}$

-  $D = \begin{bmatrix} \lambda_1 & & \\
& \lambda_2 & \\
& & \ddots & \\
& & & \lambda_n\end{bmatrix}$

!!! tip "Tip"

    $P$ is a orthogonal matrix, that is, $P^{-1} = P^{T}$.

### Singular Value Decomposition
---
comments: true
---

# Animation

#### Mass Spring System

- Idealized Spring

$$
\mathbf{f}_{a\to b} = k_s(\mathbf{b-a})
$$

- Non-Zero Length Spring

$$
\mathbf{f}_{a\to b} = k_s\frac{\mathbf{b-a}}{\|\mathbf{b-a}\|}(\|\mathbf{b-a}\|-l)
$$

#### Energy Loss

Damping force applied on $b$
$$
\mathbf{f}_{b} = -k_d\frac{\mathbf{b-a}}{\|\mathbf{b-a}\|}(\mathbf{\dot{b}-\dot{a}})\cdot \frac{\mathbf{b-a}}{\|\mathbf{b-a}\|}
$$

#### Structures from Springs

- Sheets, Blocks, ...

> [!WARNING]
>
> This structure will resist shearing but has anisotropic bias.
>
> This structure will not resist out-of-plane bending either...


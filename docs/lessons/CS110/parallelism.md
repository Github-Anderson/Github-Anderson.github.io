---
comments: true
---

# Parallelism

### Parallelism Overview

- Parallel Requests
- Parallel Threads
- Parallel Instructions
- Parallel Data
- Hardware Descriptions
- Programming Languages

## Amdahl's Law

$$
\text{Execution time after improvement} = \frac{\text{Execution time affected by improvement}}{\text{Amount of improvement}} + \text{Execution time not affected}
$$

$$
\text{Speed-up} = \frac{\text{Original execution time}}{\text{Execution time after improvement}} = \frac{1}{(1 - F) + \frac{F}{S}}
$$

![](img/amdahl.png)

### Strong and Weak Scaling

- Strong scaling: when speedup can be achieved on a parallel processor without increasing the size of the problem;
- Weak scaling: when speedup is achieved on a parallel processor by increasing the size of the problem proportionally to the increase in the number of processors

## Flynn's Taxonomy

### Single Instruction Single Data (SISD)

- Sequential computer that exploits no parallelism in either the instruction or data streams. Examples of SISD architecture are traditional uniprocessor machines.
	- E.g. Our RISC-V processor up to now;
	- Superscalar is SISD because programming model is sequential

### Single Instruction Multiple Data (SIMD)

- SIMD computer exploits multiple data streams against a single instruction stream to operations that may be naturally parallelized.
	- Intel SIMD instruction extensions
	- NVIDIA Graphics Processing Unit (GPU)
	- Vector processors

### Multiple Instruction Multiple Data (MIMD)

- Multiple autonomous processors simultaneously executing different instructions on different data.
	- Multicore
	- Warehouse-scale computers (WSC)

### Multiple Instruction Single Data (MISD)

- Multiple-Instruction, Single-Data stream computer that exploits multiple instruction streams against a single data stream.
	- Rare, mainly of historical interest only
	- Some literatures categorize systolic array as MISD

## SIMD

### Intel SSE SIMD Instructions

### SSE Instructions in C
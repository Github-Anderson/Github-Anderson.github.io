---
comments: true
---

# C Language

## Introduction to C

### How C works?

![](img/c-work.png)

- Excellent run-time performance: generally much faster than Pythonor Java for comparable code (because it optimizes for a given architecture)

- Reasonable compilation time: enhancements in compilation procedure (Makefiles) allow only modified files to be recompiled

- Mainstream C compiler in Linux:

	- GNU Complier Collection (gcc, not only for C family)

	- clang/LLVM (for C language family)

	- In terminal/command line tool/shell, “man clang/gcc”

### C Pre-Processing (CPP)

- C source files first pass through CPP, before compiler sees code (mainly text editing)

- CPP replaces comments with a single space.

- CPP commands begin with `#`.

### Macro

- `#include “file.h” /* Inserts file.h into output */`
- `#include <stdio.h> /* Looks for file in standard location */`
- `#define M_PI (3.14159) /* Define constant */`
- `#if/#endif /* Conditional inclusion of text */`

- Text replacement.
- Avoid using macros whenever possible.
- NO or very tiny speedup.
- Instead use C function.

### C Compilation

![](img/compile.png)

---

## C Memory Management

### Pointer

### Array

### Pointer Arithmetic

- Hardware’s memory composed of 8-bit storage cells, each has a unique address.
- A C pointer is just abstracte memory address.
- Type declaration tells compiler how many bytes to fetch on eacch access through pointer.
- Alignment: Store the data in lines that can be divided by its size.
- `pointer + 1` equals to adding `1 * sizeof(type)` to the memory address.

#### `sizeof()` Operator

- `sizeof(type)` *returns*[^1] number of bytes in object.

[^1]: `sizeof()` is a operator, not a function.
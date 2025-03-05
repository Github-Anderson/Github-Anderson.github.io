---
comments: true
status: star
---

# RISC-V

### Intro to Instruction Set Architecture (ISA)

Defines the set of instructions, registers, memory access, and execution behavior for RISC-V processors.

- Arithmetic and logic operations
- Memory access: load and store
- Control flow: branches and jumps
- System calls: for I/O, etc.

#### Popular ISAs

- x86 / AMD64
- ARM
- RISC-V
	- Simple, elegant, and open-source
	- Flexible and extensible

#### Assembly Language

- Basic job of a CPU: execute a series of instructions.
- Basic job of a instruction: change the state of a computer.

#### CPU State: Assembly Registers

- Unlike C or Java, assembly cannot use variables
	- Keep assembly/computer hardware abstract simple
- Assembly operands are registers
	- Limited number of special locations/memory built directly into the CPU
	- Operations can only be performed on these registers in RISC-V
- Benefit: Since registers are directly in hardware (CPU), they are
very fast

![](img/arch.png)

### Intro to RISC-V



### Assembly Instructions in RISC-V (RV32I)


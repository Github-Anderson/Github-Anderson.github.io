---
comments: true
---

# Pipeline & Multi-Issue

## "Iron Law" of Performance

$$
\frac{\text{Time}}{\text{Program}} = \frac{\text{Instruction}}{\text{Program}} \cdot \frac{\text{Cycles}}{\text{Instruction}} \cdot \frac{\text{Time}}{\text{Cycle}}
$$

- Instruction count
	- Can be obtained by profiling or hardware counter
	- ISA (e.g., RISC vs. CISC)
	- The program itself
	- Compiler
	- Programming language
	- etc.

- Average CPI
	- Short as “CPI”
	- Microarchitecture
	implementation or
	circuit design/ISA
	- Compiler
	- Program
	- Programming language

- Clock cycle
	- Microarchitecture implementation or circuit design/ISA

## Pipeline

- Pipeline registers separate the stages, with key registers including IF/ID, ID/EX, EX/MEM, and MEM/WB;
- Multiple instructions co-exist in the pipeline to realize parallelism.;
- Induce (structural/data/control) hazards;
- The critical path in the pipeline is determined by the slowest stage.

### 5 Stages of Pipeline

- Instruction Fetch (IF)
- Instruction Decode (ID)
- Execute (EX)
- Memory Access (MEM)
- Write Back (WB)

## Harzards

!!! abstract "Structural Hazards"

	- Caused by hardware limitations. Two or more instructions in the pipeline compete for a single physical resource

	- Can be solved by
		- Seperate instruction and data memory (real CPU uses instruction cache and data cache)
		- or using dual-port memory (input multiple addresses, output multiple data) (general ways to solve structural hazards, add more hardware)
		- Assume register file write at rising edge (in the textbook "the first half clock cycle"), read arbitrarily (in the textbook "the second half clock cycle"), and design the hardware with this feature
		- Instructions take turns to use the physical resource (wait/stall)

!!! abstract "Data Hazards"

	- Arise when an instruction depends on the result of a previous instruction, including types like Read After Write (RAW), Write After Write (WAW), and Write After Read (WAR).

	- Can be solved by
		- Forwarding (or bypassing), where the result is forwarded to the next instruction.
		- Stalls (NOPs), inserting no-op instructions to allow data to propagate.
		- Code scheduling to rearrange instructions to avoid hazards.

!!! abstract "Control Hazards"

	- Arise from branch instructions that change the program counter (PC) and affect the flow of instructions.

	- Can be solved by
		- Insert NOPs (No Operations): To handle branches, inserting bubbles (NOPs) in the pipeline can resolve control hazards.
		- Speculation: Assume the branch is not taken and execute instructions based on that assumption. If the branch is taken, flush the pipeline and restore the state.
		- Dynamic Branch Prediction: Record the history of branch instructions and predict future branches dynamically, using a finite state machine (FSM).

## Multi-Issue

- Multiple datapaths to execute multiple instructions in parallel;
- Multi-issue CPUs can issue multiple instructions per clock cycle, aiming for an average CPI (Cycles Per Instruction) lower than 1;
- Hardware must be adapted to avoid structural hazards where multiple instructions require the same resource (e.g., ALU, memory).

### Types of Multi-Issue

!!! warning "Static vs. Dynamic multi-issue"

	- Static multi-issue
		- Package instructions into issue slots and detect hazards statically (at compile time mostly)
		- Hardware may also detect/resolve hazards
		- Also called VLIW (very long instruction word)

	- Dynatic multi-issue
		- Package instructions into issue slots and detect hazards dynamically (during execution by hardware mostly)
		- Compiler may also help avoiding hazards
		- Also called superscalar

### Multi-issue Advancements-GPU/CPU

- Multi-issue can be combined with SIMD
- Multi-issue can be combined with multi/hyper-threading
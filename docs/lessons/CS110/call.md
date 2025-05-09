---
comments: true
---

# CALL

### Compiler

- Input: assembly language code (generated by compiler, usually contains pseudo-instructions)
- Output: object code, information tables

	- Object file header: size/position of other pieces of the object file
	- Text segment: machine code
	- Data segment: static data
	- Symbol table: list of files' labels, static data can be referenced by other programs
	- Relocation table: Code to be fixed later (by linker)
	- Debugging info.

!!! abstract "Assembler Steps"
	- Reads and uses directives
	- Replace pseudo-instructions
	- Produce machine language
	- Creates object file

#### Directives

Give directions to assembler, but do not produce machine
instructions directly, e.g.,

- `.text`: Subsequent items put in user text segment (instructions)
- `.data`: Subsequent items put in user data segment (binary rep of data in source file)
- `.globl sym`: declares sym global and can be referenced from other files
- `.asciiz str`: Store the string str in memory and nullterminate it
- `.word w1,...,wn`: Store the n 32-bit quantities in successive memory words
- `.align` [int]: align to power of 2
- `.option`: specify options such as arch, rvc

#### Pseudo-instructions

|Pseudo-Instructions|Real Instructions|
|---|---|
|`nop`|`addi x0, x0, 0`|
|`not rd, rs`|`xori rd, rs, -1`|
|`beqz rs, offset`|`beq rs, x0, offset`|
|`bgt rs1, rs2, offset`|`blt rs2, rs1, offset`|
|`j offset`|`jal x0, offset`|
|`ret`|`jalr x0, 0(x1)`|
|`call offset` (too big to `jal`)|`auipc x6, offset[31:12]`</br>`jalr x0, x6, offset[11:0]`|
|`tail offset` (too far to `j`)|`auipc x6, offset[31:12]`</br>`jalr x0, x6, offset[11:0]`|
|`li/la rd imm/label`|`lui rd <hi20bits>` (too large)</br>`addi rd x0 <lo12bits>`|
|`mv rs1, rs2`|`addi rs1, rs2, 0`|

#### Tail Call

=== "Simple example"

	```c
	int foo(int x) {
		return bar(x * 2);
	}
	```

	```assembly
	foo: slli x10, x10, 1
		 [prologue]
		 call bar
		 [epilogue]
		 ret
	bar: ...
		 ret
	```

=== "After optimization"

	```assembly
	main: [prologue]
		  call/jal foo
		  [epilogue]
	foo:  slli x10, x10, 1
		  tail bar
	bar:  ...
		  ret
	```

#### Produce Machine Language

- Instruction encoding

	- Simple cases: all the logic and arithmetic operations
	- PC-relative branches and jumps:
	
		- e.g. `beq`/`bne`/etc. and `jal`
		- Position-independent code (PIC): PC- relative addressing can be computed

#### PC-relative Addressing: Two-Pass

- "Foward reference" problem

	- Branches, PC-relative jumps can refer to labels that are "forward" in the program
	- Pass 1: remember positions of labels (in symbol table)
	- Pass 2: Use label positions to generate machine code

### Assembler

- Input: assembly language code (generated by compiler,
usually contains pseudo-instructions)
- Output: object code, information tables

!!! abstract "Assembler Steps"

	- Reads and uses directives
	- Replace pseudo-instructions
	- Produce machine language
	- Creates object file

### Linker

- Input: object code files, information tables (e.g., `<your C code>.o`,
`libc.o` for RISC-V)
- Output: executable code (e.g., `a.out` for RISC-V)
- Combines several object (`.o`) files into a single executable (“linking”)
- **Enable separate compilation of files**

	- Changes to one file do not require recompilation of the whole program

		- Linux source > 20 M lines of code!

	- Old name “Link Editor” from editing the “links” in jump and link
instructions

!!! abstract "Linker Steps"

	1. Take text segment from each `.o` file and put them together; Take data segment from each `.o` file, put them together, and concatenate this onto end of text segments
	2. Determine the addresses of data and instruction labels
	3. Resolve references

#### Three Types of Addresses

- PC-Relative Addressing (`beq`, `bne`, `jal`)

	- Never need to relocate (PIC: Position Independent Code)

- External Function Reference (usually `jal`)

	- Always relocate

- Static Data Reference (often `auipc`/`lui` and `addi`)

	- Always relocate
	- RISC-V uses `auipc` so that a big block of stuff can be further relocated as long as it is fixed relative to the `pc`

#### Resolving References

Linker knows:
- Length of each text and data segment
- Ordering of text and data segments
- Linker calculates:
- Absolute address of each label to be jumped to and each piece of data being referenced

To resolve references:
- search for reference (data or label) in all “user” symbol tables
- if not found, search library files (for example, printf, malloc)
- once absolute address is determined, fill in the machine code appropriately
- Output of linker: executable file containing text and data (plus header)

#### Static vs. Dynamic Linking

- Static Linking: The program runs independently, but it has a larger size and is inconvenient to update.
- Dynamic Linking: Reduces storage and memory usage, supports library updates, but requires additional dependency management.
- Modern Software (e.g., Containerized Applications): Packages the required dynamic libraries to simplify dependency management.

Ultimately, dynamic linking increases the complexity of compilation, linking, and the operating system, but its benefits (such as reduced storage usage and flexible updates) often outweigh its drawbacks.

### Loader

- Input: Executable Code (e.g., a.out for RISC-V)
- Output: (program run)
- Executable files are stored on disk
- When one is run, loader’s job is to load it into memory and start
it running
- In reality, loader is the operating system (OS)

	- Loading is one of the OS task
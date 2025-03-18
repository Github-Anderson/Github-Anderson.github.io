---
comments: true
status: star
---

# Digital Circuits and Systems

## Digital System

#### Revisit: Binary System

- 0 and 1 (binary digit or bit, unit of information entropy)
- Decided by the characteristic of semiconductor devices (bi-stable states)

	- They can also be considered as voltage-controlled switches

- Resilient to noise (threshold)
- Supported by Boolean algebra theory (George Boole, 1854)
- Basic operations: ^, |, ~ (Universal set)

#### NMOS & PMOS Transistors

- Three terminals: source, drain, gate

![](img/npmos.png)

- N-type transistor (NMOS) pass weak 1 (Vdd - Vth) and strong 0
- P-type transistor (PMOS) pass weak 0 (Vdd - Vth) and strong 1
- Pairs of N/P-type transistors to pass strong 0 and strong 1

## Combinational Logic

### From Logic Gates to Digital Circuits

#### Boolean Algebra

Combinational circuits: the ones that the output of the digital circuits depends solely on its inputs; usually built with logic gates without feedback

!!! abstract "Steps"

	- Write down truth table of the desired logic
	- Pick the lines with 1 as the output; write them down in ***Sum of Minterms (Product)*** form;
	- Simplify using Laws of Boolean algebra

#### Karnough Maps
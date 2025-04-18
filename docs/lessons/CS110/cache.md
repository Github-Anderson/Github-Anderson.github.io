---
comments: true
---

# Cache

## Intro

### DRAM & SRAM

- Dynamic Random Access Memory as main memory

## Locality

- Temporal locality (locality in time)
	- If a memory location is referenced, then it will tend to be referenced again soon

- Spatial locality (locality in space)
	- If a memory location is referenced, the locations with nearby addresses will tend to be referenced soon

#### Principle of Locality

- Programs access small portion of address space at any instant of time (spatial locality) and repeatedly access that portion (temporal locality)

#### Bane of Locality: Pointer Chasing

- Special data structures: linked list, tree, etc.
	- Easy to append onto and manipulate...

- But they have horrid locality preferences
	- Every time you follow a pointer it is to an unrelated location: No spacial reuse from previous pointers
	- And if you don't chase the pointers again you don't get temporal reuse either

## Simple Cache

![](img/cache.png)

- With cache, the datapath/core does not directly access the main memory;
- Instead the core asks the caches for data with improved speed;
- A hardware cache controller is deviced to provide the desired data

=== ":material-lightbulb: Memory without Cache"

	1. Processor issues address `0x12F0` to memory
	2. Memory reads `1234` @ address `0x12F0`
	3. Memory sends `1234` to Processor
	4. Processor loads `1234` into register `t0`

=== ":material-lightbulb-on: Memory with Cache"

	1. Processor issues address `0x12F0` to memory
	2. Cache checks if data @address `0x12F0` is in it
		- if it is in the cache, cache hit and read `1234`
		- if not matched, called cache miss and
			- Cache sends address `0x12F0` to memory
			- Memory read address `0x12F0` and send `1234` to cache
			- Due to limited size, cache replaces some data with `1234`
	3. Cache sends `1234` to Processor
	4. Processor loads `1234` into register `t0`

#### Typical Values

- L1 cache
	- size: tens of KB
	- hit time: complete in one clock cycle
	- miss rate: 1% to 5%

- L2 cache
	- size: hundreds of KB
	- hit time: few clock cycles
	- miss rate: 10% to 20%

- The L2 miss rate is *the fraction of L1 misses that also miss in L2*.

#### Cache Terminology

- Cache line/block: a single entry in cache
- Cache line/block size: #byte per cache line/block
- Capacity: total #byte that can be stored in a cache

#### Cache "Tag"

- We need a wag to tell if the cache have copy of location in memory so that can decide on hit or miss;
- On cache miss put memory address of block in "tag address" of cache block.

### Fully Associative Cache

- Cache size: total size of the cache ($C$)
- Cache block size: $C_B \to$ decides the number of offset bits ($b$)
- Number of cache blocks ($N$): $N = C / C_B$
- Bit width of memory address ($w$): 16-bit in our examples
- Bit width of tag ($t$): $t = w - b$

## Block Replacement Policy

### Least Recently Used (LRU)

- Replace the entry that has not been used for the longest time, i.e. has the oldest previous access.

- Pro: Temproal locality!
	- Recent past use implies likely future use

- Cons: Complicated hardware to keep track of access history

- Add extra information to record cache usage.

Other Replacement Policies

- Most Recently Used (MRU)
	- Replace the entry that has the newest previous access

- First In First Out (FIFO)
	- Replace the oldest line in the set (queue)

- Last In First Out (LIFO)
	- Replace the most recent line in the set (stack)

- Random

## Write Policy

!!! tip "Write-Back vs. Write-Through"

	- Store instructions write to memory, which changes values.
	- Hardware needs to ensure that cache and memory have consistent information.

	=== "Write-Through"
		- Write to both cache and memory at the same time.
		- (more writes to memory $\to$ longer time)

	=== "Write-Back"
		- (not the "Write back" phase in pipeline)
		- Write data in cache and set a dirty bit to 1.
		- When this block gets replaced from the cache (and "back" to memory), write to memory.
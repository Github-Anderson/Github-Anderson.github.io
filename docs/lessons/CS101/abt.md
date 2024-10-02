---
comments: true
---

# Abstruct Data Type

## Array & Linked list

### Array

- Data are stored continuously in memory.

- Often fixed size. (**but not for dynamic array**)

|Operation|Time|
|---|---|
|insert|$O(n)$|
|remove|$O(n)$|
|access|$\blue{O(1)}$
|find|$O(n)$|

### Linked List

- Each data is stored in a *node* scattered in memory.

- Can be easily extended.

- Use more space to store pointers to next.

#### Singly Linked List

```cpp
class Node {
private:
  int val;
  Node *next;
public:
  Node(int = 0, Node* = nullptr);

  int retrieve() const;
  Node *next() const;

  void push_front();
  int pop_front();
}
```

|Operation|Time|
|---|---|
|insert|$\blue{O(1)}$|
|remove|$\blue{O(1)}$|
|access|$O(n)$|
|find|$O(n)$|

### Doubly Linked List

```cpp hl_lines="4"
class Node {
private:
  int val;
  Node *previous;
  Node *next;
public:
  Node(int = 0, Node* = nullptr);

  int retrieve() const;
  Node *next() const;

  void push_front();
  int pop_front();
}
```

### Circular Linked List

- The last node stores the pointer to the head node.

## Stack & Queue

### Stack

> Reverse-Polish Notation
>
> - No ambiguity and no brackets are required.
> - Realized by stack.

The stack can be implemented using either an **array** or a **linked list** (`std::deque` in C++)

- Follows the principle of Last-In-First-OUT.
- `push()` to add element to the top of stack & `pop()` to remove the top element.

```cpp
class ArrayStack {
private:
  std::vector<int> stack;

public:
  int size() const;
  bool isEmpty() const;
  
  void push(int val);
  int pop();
  int peek();
};
```

```cpp
class LinkedListStack {
private:
  Node *top;
  int size;
public:
  int size() const;
  bool isEmpty() const;

  void push(int val);
  int pop();
  int peek();
};
```

|Operation|Time|
|---|---|
|push()|$\blue{O(1)}$|
|pop()|$\blue{O(1)}$|
|peek()|$\blue{O(1)}$|

### Queue

- Follows the principle of First-In-First-OUT.
- `push()` to add element to the front of queue & `pop()` to remove the last element.

```cpp
class ArrayQueue {
private:
  int *val;
  int front;
  int size;
  int capacity;
public:
  /* Functions */
};
```

```cpp
class LinkedListQueue {
private:
  Node *front, *rear;
  int size;
public:
  /* Functions */
};
```

|Operation|Time|
|---|---|
|push()|$\blue{O(1)}$|
|pop()|$\blue{O(1)}$|
|peek()|$\blue{O(1)}$|

### Example: Maze Routing

- BFS: use queue
- DFS: use stack

## Hash Table

### Hash Table

Hash table is a higly efficient data structure.

- Establishes a mapping between keys and values.

|Operation|Array|Linked List|Hash Table|
|---|---|---|---|
|insert|$O(n)$|$\blue{O(1)}$|$\blue{O(1)}$|
|remove|$O(n)$|$\blue{O(1)}$|$\blue{O(1)}$|
|access|$\blue{O(1)}$|$O(n)$|$\blue{O(1)}$|
|find|$O(n)$|$O(n)$|$\blue{O(1)}$|

### Hash Collision

If the return of `hashFunction(key)` are the same, e.g.

```
114514 % 100 = 14
145114 % 100 = 14
```

this situation is called *hash collision*.

Hash collision is inevitable because the input space is much larger than the output space.

We can reduce hash collisions by resizing the hash table, but we'd better improve the hash table data structure, since resizing a hash table is time-consuming and space-consuming.

#### Separate Chaining

Each bucket stores a linked list, containing all colliding elements.

#### Open Addressing

##### Linear Proding

If the bucket already contains an element, linearly traverse forward the conflict position to insert or search elements.

##### Quadratic Proding

Similar to linear proding, if the bucket already contains an element, traverse by skipping a square of the number of prodes forward the conflict position to insert or search elements.

##### Double Hashing

Uses multiple hash functions $f_1(x), f_2(x), \dots$ for proding.

### Hash Algorithm
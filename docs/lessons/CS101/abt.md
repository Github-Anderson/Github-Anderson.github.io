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
- ALL implemented in $O(1)$.

```cpp
class ArrayStack {
private:
  std::vector<int> stack;

public:
  int size() const;
  bool empty() const;
  
  void push(int val) {
    stack.push_back(val);
  }
  int pop() {
    int num = top();
    stack.pop_back();
    return num;
  }
  int top();
};
```

```cpp
class LinkedListStack {
private:
  Node *top;
  int size;
public:
  int size() const;
  bool empty() const;

  void push(int val) {
    Node *node = new Node(val);
    node->next = top;
    top = node;
    size++;
  }
  int pop() {
    int num = top();
    Node *tmp = top;
    top = top->next;
    delete tmp;
    size--;
    return num;
  }
  int top();
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
  ArrayQueue(int cap) {
    val = new int[cap];
    capacity = cap;
    front = 0;
    size = 0;
  }
  
  ~ArrayQueue() {
    delete[] val;
  }

  int capacity();
  int size();
  bool empty;

  void push(int num) {
    if (size == capacity) return;
    int rear = (front + size) % capacity;
    val[rear] = num;
    size++;
  }
  int pop() {
    int num = front();
    front = (front + 1) % capacity;
    size--;
    return num;
  }
  int front();
};
```

Implemented by circular array.

```cpp
class LinkedListQueue {
private:
  Node *front, *rear;
  int size;
public:
  LinkedListQueue() {
    front = nullptr;
    rear = nullptr;
    size = 0;
  }

  ~LinkedListQueue();

  int size();
  bool empty();

  void push(int val) {
    Node *node = new Node(val);
    if (front == nullptr) {
      front = node;
      rear = node;
    } else {
      rear->next = node;
      rear = node;
    }
    size++;
  }
  int pop() {
    int num = front();
    Node *tmp = front;
    front = front->next;
    delete tmp;
    size--;
    return num;
  }
  int front();
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
- Load Factor: the average number of objects per bin.
$$
\lambda = \frac{n}{M}
$$
- Probability of at least one collision
$$
1 - \frac{M(M-1)\cdots(M-n+1)}{M^n}
$$

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

e.g. If index $n$ has already store a pair, we jump to $n+1$, if so, then $n+2$, $n+3$, etc.

##### Quadratic Proding

Similar to linear proding, if the bucket already contains an element, traverse by skipping a square of the number of prodes forward the conflict position to insert or search elements.

e.g. If index $n$ has already store a pair, we jump to $n+1$, if so, then $n+2$, $n+4$, etc.

##### Double Hashing

Uses two hash functions $h_1(k), h_2(k)$ for proding.

$$
h(k) = h_1(k) + i \cdot h_2(k)
$$

Then *Linear Proding* can be shown as $h(k) = h_1(k) + i$, where $h_2(k) = 1$

*Quadratic Proding* can also be shown as $h(k) = h_1(k) + c_1 + c_2 \cdot i$, where $h_2(k) = c_1 + c_2 \cdot i$

### Hash Algorithm

The methods given above can be used to solve hash collision. However, they cannot reduce the frequency of hash collisions. So we need to design some algorithms in order to avoid collisions.

#### Common Hash Algorithm

In practice, we usually use some standard hash algorithms, such as MD5, SHA-1, SHA-2, and SHA-3. They can map input data of any length to a fixed-length hash value.

## Tree

### Binary Tree

```cpp
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
}
```
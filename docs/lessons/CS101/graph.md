---
comments: true
---

# Graph

## Undirected Graphs

### Definitions

##### Undirected Graph

$$
V = \{v_1, v_2, \dots , v_n\}
$$

$$
E = \{\{v_i, v_j\}\mid v_i, v_j\text{ are connected}\}
$$

- The number of the vertices is $|V| = n \leq \frac{n(n-1)}{2} = O(n^2)$.

##### Degree

The **degree** of a vertex is the number of adjacent vertices.

##### Sub-graphs

A sub-graph of a graph contains a subset of the vertices and a subset of the edges in original graph.

##### Vertex-induced sub-graphs

A vertex-induced sub-graph contains a subset of the vertices and all the edges in the original graph between those vertices.

##### Path

$$
(v_0, v_1, \dots , v_k)
$$

##### Simple path

A simple path has no repetitions.

##### Simple cycle

A simple cycle is a simple path of **at least two vertices** with the first and last vectices equal.

##### Connectedness

$v_i, v_j$ are connected if there exists a path from $v_i$ to $v_j$.

- Two nodes are strongly connected if there exists multiple path from one to the other.

- Two nodes are weakly connected if there is only one path.

##### Weighted graphs

##### Trees

A graph is a tree if it is connected and there is a unique path between any two vertices.

##### Forests

A forest is any graph that has no cycles.

## Directed Graphs

### Definitions

##### Directed Graph

The edges on a graph are be associated with a direction.

##### In and Out degrees

- The out-degree of a vertex is the number of outward edges from the vertex

- The in-degree of a vertex is the number of inward edges to the vertex

##### Sources and sinks

- Vertices with an in-degree of zero are described as sources
- Vertices with an out-degree of zero are described as sinks

##### Connectedness

- A graph is strongly connected if there exists a directed path between any two vertices
- A graph is weakly connected there exists a path between any two vertices that ignores the direction

##### Directed acyclic graphs (DAGs)

A directed acyclic graph is a directed graph which has no cycle.

## Graph Traversal (Search)

A means of visiting all the vertices in a graph, also called searches.

Time complexity of graph traversal cannot be better than and should not be worse than $\Theta(|V| + |E|)$

- Connected graphs simplify this to $\Theta(|E|)$
- Worst case: $\Theta(|V|^2)$

### Breadth-first traversal (BFS)

- Choose any vertex, mark it as visited and push it onto queue.

- While the queue is not empty:

	- Pop the top vertex $v$ from the queue.
	- For each vertex adjacent to $v$ that has not been visited:

		- Mark it visited and push it onto the queue.

- The size of the queue is $O(|V|)$.

#### Implementation

```cpp
void Graph::breadth_first_traversal(Vertex *first) const {
	unordered_map<Vertex *, int> hash;
	hash.insert(first);
	std::queue<Vertex *> queue;
	queue.push(first);

	while (!queue.empty()) {
		Vertex *v = queue.front();
		queue.pop();
		// Perform an operation on v

		for (Vertex *w : v->adjacent_vertices()) {
			if (!hash.member(w)) {
				hash.insert(w);
				queue.push(w);
			}
		}
	}
}
```

### Depth-first traversal (DFS)

- Choose any vertex, mark it as visited.

- From that vertex:

  - If there is another adjacent vertex not yet visited, go to it.
  - Otherwise, go back to the previous vertex.

- Continue until no visited vertices have unvisited adjacent vertices.

```cpp
void Vertex::depth_first_traversal() const {
  for (Vertex *v : adjacent_vertices()) {
    if (!v->visited()) {
      v->mark_visited();
      v->depth_first_traversal();
    }
  }
}
```

## Bipartite Graphs

#### Definition

A bipartite graph is a graph where the vertices $V$ can be divided into two disjoint sets $V_1$ and $V_2$ such that **every** edge has one vertex in $V_1$ and the other in $V_2$.

![](img/bipartite.png)

Use a breadth-firsgt traversal to determine if it's a bipartite graph.

## Minimum Spanning Tree

Given a connected graph with $n$ vertices, a spanning tree is defined as a subgraph that is a tree and includes all the $n$ vertices.

![](img/mst.png)

#### Definition

The spanning tree with the minimum weight.

### Prim's algorithm (Adding vertices)

- Start with an arbitrary vertex to form a MST on one vertex as the root.
- At each step, add the edge with least weight that connects the current MST to a new vertex.
- Continue until we have $n-1$ edges and $n$ vertices.

#### Analysis

- Time complexity: $\Theta(|V|^2 + |E|)$

We can use a binary heap or fib to find the shortest edge in each iteration.

- Using binary heap: $O((|V|+|E|)\ln(|V|)) = O(|E|\ln(|V|))$
- Using Fibonacci heap: $O(|E|+|V|\ln(|V|)$

### Kruskal's algorithm (Adding edges)

- Sort the edges by weight.
- Create a disjoint set of the vertices.
- Go through the edges from least weight to greatest weight.
	- Add the edges to the spanning tree so long as the addition does not create a cycle.

- Repeatedly add more edges until:
	- $|V| - 1$ edges have been added, then we have a minimum spanning tree.
	- Otherwise, if we have gone through all the edges, then we have a forest of minimum spanning trees on all connected sub-graphs.

#### Analysis

!!! question "How do we determine if a cycle would be created?"

	We could use disjoint sets.

	- Consider edges in the same connected sub-graph as forming a set.
	- If the vertices of the next edge are in different sets, take the union of the two sets.
	- Do not add edge if both vertices are in the same set.

- Time complexity: $O(|E|\ln(|E|))$
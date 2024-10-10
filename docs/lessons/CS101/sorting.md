---
comments: true
---

# Sorting

> \- What is sorting?
> 
> \- Sorting is the process of taking a list of objects and reordering them based on a comparison key.

## Insertion Sort

- Treat the first element as a sorted list of size 1.
- For each subsequent element, insert it into its correct position within the sorted list.

#### C++ Implementation
```cpp
template <typename Type>
void insertion_sort(Type *const array, int const n) {
  for (int k = 1; k < n; ++k) {
    for (int j = k; j > 0; --j) {
      if (array[j - 1] > array[j]) {
        std::swap(array[j - 1], array[j]);
      } else {
        // Stop if the element is already in the correct position
        break;
      }
    }
  }
}
```

Using `std::swap` to insert the element into correct position.


#### Run-time Analysis

- Worst case: $O(n^2)$
- Best case: $O(n)$

#### Improved Implementation

```cpp
template <typename Type>
void insertion_sort_optimized(Type *const array, int const n) {
  for (int k = 1; k < n; ++k) {
    Type tmp = array[k];
    int j = k;
    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1];
      --j;
    }
    array[j] = tmp;
  }
}
```

## Bubble Sort

- Repeatly steps through the list, compares adjacent elements
- Swaps them if they are in the wrong order.

#### C++ Implementation

```cpp
template <typename Type>
void bubble_sort(Type *const array, int const n) {
  for (int i = n - 1; i > 0; --i) {
    for (int j = 0; j < i; ++j) {
      if (array[j] > array[j + 1]) {
        std::swap(array[j], array[j + 1]);
      }
    }
  }
}
```

#### Variations of Bubble Sort

##### Flagged Bubble Sort

```cpp
template <typename Type>
void flagged_bubble_sort(Type *const array, int const n) {
  for (int i = n - 1; i > 0; --i) {
    bool sorted = true;
    for (int j = 0; j < i; ++j) {
      if (array[j] > array[j + 1]) {
        std::swap(array[j], array[j + 1]);
        sorted = false;
      }
    }
    if (sorted) break;
  }
}
```

##### Range-Limiting Bubble Sort

##### Alternating Bubble Sort

#### Run-time Analysis

- Worst case: $O(n^2)$
- Best case: $O(n)$
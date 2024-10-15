---
comments: true
---

# Sorting

!!! quote "Source"

    Portions of the content are sourced from <a href="https://www.hello-algo.com/chapter_sorting/" target="_blank"><img src="../img/logo.svg" alt="Hello Algo"  width="40" height="40" /></a>

> - What is sorting?
> 
> - Sorting is the process of taking a list of objects and reordering them based on a comparison key.

## Insertion Sort

- Treat the first element as a sorted list of size 1.
- For each subsequent element, insert it into its correct position within the sorted list.

#### Algorithm Process

- Initially, the first element of the array is sorted.
- The $k$-th element of the array is taken as `base`, and after inserting it into the correct position, the first $k$ elements of the array are sorted.
- 

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

- First, perform a "bubble" on $n$ elements, swapping the largest element to its correct position.
- Next, perform a "bubble" on the $n-1$ remaining elements, swapping the second largest element to its correct position.
- Similarly, after $n-1$ rounds of "bubbling," the top $n-1$ largest elements will be swapped to their correct positions.
- The only remaining element is necessarily the smallest and does not require sorting, thus the array sorting is complete.

##### Time Complexity

- Worst case: $O(n^2)$
- Average case: $O(n^2)$
- Best case: $O(n)$

##### Space Complexity

- $O(1)$

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

#### Algorithm Process



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

Check if the list is sorted (no swaps).

```cpp hl_lines="4 8 11"
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

Update `i` to at the place of the last swap.

```cpp hl_lines="5 9 16"
template <typename Type>
  void bubble( Type *const array, int const n ) {
    for ( int i = n - 1; i > 0; ) {
      Type max = array[0];
      int ii = 0;
      for ( int j = 1; j <= i; ++j ) {
        if ( array[j] < max ) {
          array[j - 1] = array[j];
          ii = j - 1;
        } else {
          array[j – 1] = max;
          max = array[j];
        }
      }
      array[i] = max;
      i = ii;
    }
  }
```

##### Alternating Bubble Sort

#### Run-time Analysis

##### Time Complexity

- Worst case: $O(n^2)$
- Average case: $O(n^2)$
- Best case: $O(n)$

##### Space Complexity

- $O(1)$

## Selection Sort

## Merge Sort

The merge sort algorithm is defined recursively:

- If the list is of size 1, it is sorted.
- Otherwise:

    - Divide an unsorted list into two sub-lists,
    - Sort each sub-list recursively using merge sort,
    - Merge the two sorted sub-lists into a single sorted list.
  
This strategy is called *divide-and-conquer*.

#### C++ Implementation

```cpp
void merge(vector<int> &nums, int left, int mid, int right) {
  vector<int> tmp(right - left + 1);
  int i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j])
      tmp[k++] = nums[i++];
    else
      tmp[k++] = nums[j++];
  }
  while (i <= mid) {
    tmp[k++] = nums[i++];
  }
  while (j <= right) {
    tmp[k++] = nums[j++];
  }
  for (k = 0; k < tmp.size(); k++) {
    nums[left + k] = tmp[k];
  }
}

void merge_sort(vector<int> &nums, int left, int right) {
  if (left >= right)
    return;
  int mid = left + (right - left) / 2;
  merge_sort(nums, left, mid);
  merge_sort(nums, mid + 1, right);
  merge(nums, left, mid, right);
}
```

#### Run-time Analysis

- Average case: $O(n\log n)$
- Stable (No worst or best case)

##### Space Complexity

- $O(n)$ (Not in-space)
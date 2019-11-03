# Raisin_28

*Asked by: Google.*

In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.

Here is an example:

```
1 2 3 4 8
5 1 2 3 4
4 5 1 2 3
7 4 5 1 2
```

Write a program to determine whether a given input is a Toeplitz matrix.

#### Solution

We need to check each value in a matrix. To do so only once we can start from the last value of the first column and then shift to the rigth and down on one step. We stop if we are at the end of the row or column. If all values are the same as an origin then we can go up (if we are still on the first column) or to the right (if we already finish with the first column) and check other values.

**Сomplexity** 

O(N)
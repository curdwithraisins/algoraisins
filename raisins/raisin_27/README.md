# Raisin_27

*Asked by: Stitch Fix.*

Pascal's triangle is a triangular array of integers constructed with the following formula:

The first row consists of the number 1.
For each subsequent row, each element is the sum of the numbers directly above it, on either side.
For example, here are the first few rows:

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

Given an input k, return the kth row of Pascal's triangle.

Bonus: Can you do this using only O(k) space?

#### Solution

In a simple version we can crate new array each time and calculate new row using previous. For Pascal's number we can use the next formulas:

```
x[i][j] = x[i-1][j-1] * j / x[i][j-1] 
or 
x[i][j] = x[i-1][j-1] + x[i][j-1]
```

To use constant space we need to reuse an array created on the previous step. If we start from the beginning we re-write a number which we need on the next step as we will set it in the position we want to use for a next number. That is why we should start from the middle of the array and go in both directions.

**Сomplexity** 

O(k) and O(N^2)
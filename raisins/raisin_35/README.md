# Raisin_35

*Asked by: Google.*

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

#### Solution

First, we need to create an empty array where all subsets will be stored. Then, sort incoming array ascending and go by each value. 

For all of those values we need to check if some of the subsets has a list of values such as **any value from the subset % original current value = 0**. If it's true push new array to the list of subsets. We shouldn't modify current sub-array as we can have some other value which could satisfy equality with the same sequence. If suitable subset doesn't exist create a new array with one value and push it to the list of subsets.

At the end sort subset array by the length of subsets and return the first one. If nothing is found return empty array.

**Сomplexity** 

O(N*logN), K(N^2)
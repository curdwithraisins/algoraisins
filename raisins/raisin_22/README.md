# Raisin_22

*Asked by: Google.*

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

#### Solution

To solve this problem we need to use a simple hash table (object) and an array. Hash table represents those values which are already in the current subarray and array is used to store the longest subarray.

We go through an array, push each its value to a sub, and update hash table. As soon as we find first none unique value we should clear the table and check if the current subarray is linger then previous. If it is then we set current as a new one longest subarray. 

As the last one subarray can't be checked in the loop we compare it with the longest one before return a result.

**Сomplexity** 

O(N)
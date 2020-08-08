# Raisin_39

*Asked by:*

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

#### Solution

1) Pretty straight forward solution: go by each value in the array, calculate difference with the target value and look for this value in the array.
 
2) In this solution we will use hash map (or array). Go by each value in the array, calculate difference with the target sum and check if this diff is present in the hash map. If yes then we already had this value before current one during check. If no then add it to hash map! Finish as soon as diff is found in the hash map.

3) For this task we will use two pointers: to the beginning and end of the array. First we need to sort an array, then create pointers. Till value at the left pointer is less then value at the right sum those values and compare to the target sum. If it's equal we find our values. If no then:
    * if sum is less then target then we need to increase it so we shift left pointer;
    * if sum is higher then target then we need to decrease it so we shift right pointer.

**Сomplexity** 

1) O(N^2)
2) O (N)
3) O(N*log(N))

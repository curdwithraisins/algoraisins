# Raisin_15

*Asked by: Google.*

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?


#### Solution

For this task we need to check an array starting from 0-th and 1-th element. We recursively check second and third element after the current one looking for a largest number. If we exceed an array we return null. If we find last element in array we return this element. Then we get max of them and add it to the non-adjacent value. We return max of two sums.

**Сomplexity** 

O(N) time and O(1) space.
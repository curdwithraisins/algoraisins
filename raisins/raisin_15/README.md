# Raisin_15

*Asked by: Google.*

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
* 10 = max(10, 5, 2)
* 7 = max(5, 2, 7)
* 8 = max(2, 7, 8)
* 8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

#### Solution

The solution was taken from https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/.

At the beginning we need to iterate by the first k-th values of an array. We use *while* to shift new value to the beginning of the array till we find the biggest value, then the current, and pop smallest from the end. We always push new value to the array. In this way we receive the largest value at the beginning and remove all the smallest because if they smaller then the current value then they won't be the largest on the next iterations.

After that we check all remaining values starting from *k*. Firstly we store previously founded value to the *i - k* position of the array to return founded maximums. Then we remove values from the beginning of the resulted array till we find a largest value in the current range. After it we can do the same thing as we made before: shift value to the beginning of the array till we find the biggest one and push new number to the array.

At the end we return sliced array from 0 till array.length - k + 1 - this is how large should be our result.

**Сomplexity** 

O(n) time and O(k) space.
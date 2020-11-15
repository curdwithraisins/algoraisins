# Raisin_43

*Asked by:*

Given an array of positive numbers, find the maximum sum of a subsequence with the constraint that no 2 numbers in the sequence should be adjacent in the array. So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).Answer the question in most efficient way.

#### Solution

To determine a maximum not subsequent sum of the values in array we need to check if two values, which are not near each other, result in a bigger sum. To get this we should sum up a current value and one of the is in position +2 and +3. We need to check +3 as if we check only +2 we can lose a bigger sum.

The algorithm is the next:
1) Sum up first and second values of the array and save the result to the third position;
2) Starting from the fourth value compare the sum of this value and two that is before it in array on 2 and 3 indexes;
3) Save the biggest one in the current position. This way we will store the biggest not subsequent value;
4) Return one of the biggest last values: is the last is biggest return it, either return the previous.

**Сomplexity** 

O(N)

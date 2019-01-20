# Raisin_2

*Asked by: Uber.*

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?


#### Solution

This task can be done in two steps:
- calculate a product of all numbers - **product**;
- create new array where each number is a **product/arr[i]**.

Instead of use a standard division we can make the following conclusion:
- **product/arr[i]** is a number of times, **arr[i]** is included in **product**.

Then we need just to calculate how many times we can subtract **arr[i]** from **product** till we get 0.

**Сomplexity** 

O(N)
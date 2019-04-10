# Raisin_18

*Asked by: Snapchat.*

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.
For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

#### Solution

I have 3 solutions for this task.

We can create an array to represent an intersection. In this case we go by each value and increment values in the array iа they are present in the interval. Then check if a new one value is largest then the current max.

**Сomplexity** 

O(N*logN) - too bad =(
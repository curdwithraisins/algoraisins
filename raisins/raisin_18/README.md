# Raisin_18

*Asked by: Snapchat.*

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.
For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

#### Solution

I have 2 solutions for this task.

1) Create an array of intersections. For this solution we should go by each interval and increment a number in the resulted array if that number is within the interval. Then check if a new value is largest then the current max and update max if it needed.

2) Sort an array of intervals by ascending start. Then go by each interval and check if previous lecture is finished. If no one of the prev lectures is finished increment number of rooms.

**Сomplexity** 

2) O(N*logN)
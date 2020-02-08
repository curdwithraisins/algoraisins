# Raisin_34

*Asked by: Facebook.*

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?

#### Solution

There are three ways to find those values:

1) In line time. We can create a simple hash map, like an object, and add and delete values from it when they occur in array. In value doesn't exist set it in 1. In other case remove. At the end we have an object with two resulted values.

2) In constant space. In this case we sort an array and then go one by one value adding it to the new array or pop if the same values is already at the end of the array.

3) In linear time and constant space. For this task we need to use XOR. XOR works in the way so when you use it on two equal values you receive 0. So firstly, we XOR-ing all the values in the array. Then we need to receive the last bit which equals 1. In means that one of the resulting values has 1 in this position and another one has 0. In the next step we go through the array and check finding bit. If values has 1 in the same position we XOR it with the other values which have 1. And the same for 0. In result we have two resulted values as all copies during XOR will create 0.

**Сomplexity** 

1) O(N), K(N)
2) O(N*log(N)), K(1)
3) O(N), K(1)
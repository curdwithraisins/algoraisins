# Raisin_10

*Asked by: Amazon.*

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
For example, if N is 4, then there are 5 unique ways:
* 1, 1, 1, 1
* 2, 1, 1
* 1, 2, 1
* 1, 1, 2
* 2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.


#### Solution

Was taken from https://www.dailycodingproblem.com/blog/staircase-problem/

We will use Fibonacci sequence.

Also the recursive and simplified Fibonacci algorithms were tested. On **50** numbers execution time of the recursive method is **176.965s** where the same number returns only **0.002s** on simplified method. The result of calculation is **20365011074**.

**Сomplexity** 

* standard fibonacci: O(2^N)
* simplified fibonacci: O(N)
* general: O(|X|^N)
* general with cash: O(N * |X|) or O(N)
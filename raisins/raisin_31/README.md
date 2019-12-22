# Raisin_31

*Asked by: Coursera.*

Write a recursive function that counts how many different ways you can make change for an amount, given a list of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2: 1+1+1+1, 1+1+2, 2+2.

#### Solution

To handle this task we need to use recursion. 

First, we check if money is 0 and return 1 if it's true. Money is 0 in the case when we subtrack some coin and it was the last appropriate coin. 

Second, if money desn't equal 0, we check if we still have some money and coins and recursively call the same function with: (current money - first coin in array) and the same array of coins and current money and array of coins without the first element and sum them. In this way we check how many combination we can have with those money and coins. 

In the end, if money is less then 0 (we subtract more then we can return) or there are no coins in array then we can't use this combination, so we return 0.

**Сomplexity** 

O(N*log(N))
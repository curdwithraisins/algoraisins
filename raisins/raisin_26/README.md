# Raisin_26

*Asked by: Salesforce.*

The number **6174** is known as Kaprekar's contant, after the mathematician who discovered an associated property: for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

For a given input x, create two new numbers that consist of the digits in x in ascending and descending order.
Subtract the smaller number from the larger number.
For example, this algorithm terminates in three steps when starting from 1234:

```
4321 - 1234 = 3087
8730 - 0378 = 8352
8532 - 2358 = 6174
```

Write a function that returns how many steps this will take for a given input N.

#### Solution

To solve this task we need a counter and subtraction result. Increment counter before each calculation of a result. If result equals Kaprekar's contant then we can finish our loop and return counter.

To create two numbers from an origin in ascending and descending order we need to split all digests, sort and join them. Compare two numbers and subtract smaller from biggest. Then return a result and check it in a loop.

**Сomplexity** 

~
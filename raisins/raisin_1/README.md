# Raisin_1

*Asked by: Google.*

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?

#### Solution

We can use hash table. Each value in the hash table is a number that was already passed. 
If we have **current number - k** in the hash table then it's a number that we can add to the **current one** and receive **k**.

**Сomplexity** 

O(N)
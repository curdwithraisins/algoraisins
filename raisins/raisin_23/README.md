# Raisin_23

*Asked by: LinkedIn.*

Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution could be 1 -> 0 -> 5 -> 8 -> 3.

#### Solution

Create two separate lists for numbers after and before needed. Filter given list by this number. After that just link two lists: set next value of the tail of the first one list as a head of the second one and the prev value of the second list as a tail of the first one. At the end set tail of the first list as a tail of the second.

**Сomplexity** 

O(N)
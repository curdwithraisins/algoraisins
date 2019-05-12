# Raisin_21

*Asked by: Google.*

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
In this example, assume nodes with the same value are the exact same node objects.
Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

#### Solution

For this raisin I prefer to use a hash table. As we have only numbers and we can assume that the nodes with the same value are the exact same node objects, then we can use simple array (as it the same object but with numerical keys) to check if we already have this value.

**Сomplexity** 

O(M + N)
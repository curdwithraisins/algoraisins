# Raisin_33

*Asked by: Amazon.*

Given a linked list and an integer k, remove the k-th node from the end of the list and return the head of the list.

k is guaranteed to be smaller than the length of the list.

Do this in one pass.

#### Solution

The simplest way to solve this task in one pass is to create a new linked list and append to it all the values from the original list except k-th one. This approach is also useful as the original list is immutable.

LinkedListNode class, implemented in scope of this project, contains a remove method which could be used in this task. In this case we shouldn't forget to update tail on the LinkedList if removed node is the last one as LinkedListNode knows nothing about LinkedList. For this implementation it was assumed that this method doesn't exist in the other languages.

**Сomplexity** 

O(N)
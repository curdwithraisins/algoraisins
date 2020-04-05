# Raisin_36

*Asked by: Dropbox.*

Given the root to a binary search tree, find the second largest node in the tree.

#### Solution

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees. On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables. [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)

That's mean for this task we just need to look at the right side of the tree. As the largest leave is the most right value then the second largest is the one before it, its parent.

To get this value we need to take each right leave and check if its right leave has a right child. If yes, take this leave and do the same. If no, then this value is the second from the end.

**Сomplexity** 

O(N)
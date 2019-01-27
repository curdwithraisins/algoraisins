# Raisin_7

*Asked by: Google.*

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
Given the root to a binary tree, count the number of unival subtrees.
For example, the following tree has 5 unival subtrees:
````
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
````

#### Solution

For this task we need to go leaf by leaf and check an equality of the current leaf and its parent. If it's true then we add 1 to result and push it to the array.

We use array for checking a sequence of the equal leafs. Each time when the leafs are equal we push 1 to the array. Then we go from bottom to top till find a 0 and add to the result all 1 on the way. When we go back to the parent leaf we pop last value from array.
 
 **Сomplexity** 
 
 O(N*log(N))
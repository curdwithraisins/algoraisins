# Raisin_3

*Asked by: Google.*

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
For example, given the following Node class
````
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
````
The following test should pass:
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'



#### Solution

First of all we need to decide how string should look like. In this example it's: ``'val1:root;left1:val2:left;left2:val3:left.left;right1:val2:right;’``.
**val[i]** represents a start of the new Node and **left[i]** and **right[i]** is the starts if the leafs. In this case we can parse a string based on the indexes.

**Сomplexity** 

O(N)
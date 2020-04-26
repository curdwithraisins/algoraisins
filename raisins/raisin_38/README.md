# Raisin_38

*Asked by: Amazon*

Given an integer N, construct all possible binary search trees with N nodes.

#### Solution

We can solve it with recursion. First of all we need to create a root of the tree. It will be all the possible elements in range [1..N]. After that for each root we should create leafs where:
* right lift is in range [i+1, N];
* left root is in range [1, i-1].
We use those ranges for each subsequent leaf and create all the possible trees.
After we receive an array of trees for a root we need to connect each subtree to the root for right and left side and pass it upstream.
The final length will be a result.

You can also return only number of possible leafs. In this case you don't need to connect leafs to the root, just sum values up.

**Сomplexity** 
 O(N!)

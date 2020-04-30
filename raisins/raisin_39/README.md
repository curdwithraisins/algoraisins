# Raisin_39

*Asked by: Google*

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

#### Solution

For this problem we need to use **merge sort** as its **O(N\*logN)**.

The basic idea of merge sort is to divide an original source on smaller parts till there is only one element and then compare it with the nearest one. After that this sorted array is compared to its nearest sorted array and so on will the whole source won't be sorted. You can find an implementation of the merge sort [here](https://github.com/curdwithraisins/algoraisins/tree/master/general/sort/merge).

To apply merge sort to a linked list first of all we need to find a middle of the list. For this task we create two pointers: one with a step **+1** and another with a step **+2**. When he second one riches the end of the list, the first one will have a corresponding middle node.

Now we have two parts of the list, right and left. Don't forget to set a next value of the right part as null to not go beyond the end! Then we need to do the same, divide right and left sides till we get only one value and so we can start sort and merge.

When we receive two parts of the list we need to compare a head of the first list and a head of the second list. If first one less them second then the first is a beginning of the sorted list and the second one should be compared with a rest of the first list once again. So we use the same sort and merge again!

**Сomplexity** 
O(N*logN)

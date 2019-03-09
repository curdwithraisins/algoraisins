# Raisin_14

*Asked by: Twitter.*

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:
* record(order_id): adds the order_id to the log
* get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.

#### Solution

As we have predefined N (a length of the list) we can use a simple array for this task. In JS array is the same as an object but with the numerical keys and additional methods.

To reduce a space we don't store more values then the N. Each time when we want to add a new record to the list we remove first one outdated value.

To remove value or get a part of the array we use standard array methods: shift, push and slice.

**Сomplexity** 

For record: O(1) and T(1)
For get_last: O(1) and T(i), as general slice method gets values one by one.
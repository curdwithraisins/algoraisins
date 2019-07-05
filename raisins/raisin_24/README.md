# Raisin_24

*Asked by: Snapchat.*

Given a string of digits, generate all possible valid IP address combinations.

IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

For example, given "2542540123", you should return ['254.25.40.123', '254.254.0.123'].

#### Solution

This task could be solved with recursion. We have 4 different options how to behave:
* If string has only one char we can simply return it.
* If there is two chars we can combine them like so **a.b, ab**.
* If there is three chars - combine them like this **a.b.c, ab.c, a.bc** AND add **abc** only if it's less then a 256.
* The last one option is the main one. We should cut off a part of the string to get an additional numbers from it. We take 1, 2, or 3 numbers (as for an IP address we can use only those numbers which are less then a 256), check if they don't have '0' at the beginning and it's not a one char, and then recursively send the rest of the sting to the same function. As a result we receive an array of the strings separated by the dot. The last step is to add a sub string an the beginning of the returned values. 

As we can receive a lot of different strings we need to filter incorrect addresses in the end.

**Сomplexity** 


# Raisin_44

*Asked by:*

Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes. You can assume that there will only be one longest palindromic substring.

Example: ```"abaxyzzyxf" => "xyzzyx"```

#### Solution

The simplest way to check if string is a palindrome is to start from the middle of the string and check sibling letter in both directions. Here we have two options:
* if the length of the string is odd, consider that right pointer is right after the middle and left - right before;
* if the length of the string is even, consider that the letter in the middle is a start palindrome and set right pointer right after it and left - fight before.

After then we need to get strings for checking. Going from the first index, consider it as a middle of the substring and then check the middle between it and left one. Finish when value at the right pointer not equal letter at the left or you get to the end of the string.

**Сomplexity** 

O(N^2)

# Raisin_17

*Asked by: Facebook.*

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.


#### Solution

We need to go by each char and check if it close or open bracket. If it is open then we push it to an array, if it is close then we pop it. If popped value (last open bracket) is equal to the corresponding close bracket (current one) then everything is correct. In other case string is not balanced.

**Сomplexity** 

O(N)

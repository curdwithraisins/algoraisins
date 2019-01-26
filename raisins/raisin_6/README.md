# Raisin_6

*Asked by: Facebook.*

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak’.
You can assume that the messages are decodable. For example, '001' is not allowed.

#### Solution

 We need to check string part by part. 
 
 We start with a number in the first position. If it is not a 0 then we can shift it and go farther. If we get 0 then we skip full line.
 
 Then we need to check if a length of the string is more then 1. In this case we can take two digits and check if number is less then 27. If it is then we can shift those two digits and check substring.
 
 Each time when we can have one or two numbers as a latter we return 1.
 
 And so on.
 
 Use memcache if you want to optimize an algorithm.
 
 **Сomplexity** 
 
 O(N*log(N))
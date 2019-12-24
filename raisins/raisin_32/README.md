# Raisin_32

*Asked by: Apple.*

You are given a hexadecimal-encoded string that has been XOR'd against a single char.

Decrypt the message. For example, given the string:
`7a575e5e5d12455d405e561254405d5f1276535b5e4b12715d565b5c551262405d505e575f`

You should be able to decrypt it and get:
`Hello world from Daily Coding Problem`

#### Solution

For this task we need to take all chars from 0 till 256 and decode an original string. 

As one later equals two hex numbers we need to split the string by two values ('A2F456' => ['A2', 'F4', '56']).  Then we need to decode those numbers. To do so we XOR each value from the array to the chars from 0 till 256, convert result to an ASCII char and join them to get a resulted string.

As result is a list of 256 strings, we need to choose the most suitable one. For this let's use letter frequencies algorithm. We will use the common table of the latter frequencies for English language. This algorithm is not the clearest one but it also has a low level of the false positive results. For each string we sum up a frequency of each letters and compare to the max. The string with the highest frequency is a correct one.

**Сomplexity** 

O(N)
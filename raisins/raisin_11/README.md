# Raisin_11

*Asked by: Amazon.*

Given an integer **k** and a string **s**, find the length of the longest substring that contains at most k distinct characters.
For example, given **s = "abcba"** and **k = 2**, the longest substring with k distinct characters is **"bcb"**.

#### Solution

To get this value we need to check each substring.

We use hash to mark each char that we have in substring which we currently checked. If char that we check on the current step is stored to the hash then we can add it to the string. If not and a length of the hash is less then **k** we can add this char to the hash and substring. In other way we return previous substring and take another one.

On each step we check previously saved substring with a new one and rewrite this value if a new substring has a longest value.

**Сomplexity** 

O(N*log(N))
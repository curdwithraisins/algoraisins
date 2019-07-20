# Raisin_25

*Asked by: Twitter.*

Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.

#### Solution

We need to check if the two nearest values create the largest number. 

We go by each value and calculate if concatination of the current one with the next would be the biggest. If not then we swap then and get back to the previous pair.

**Сomplexity** 

O(N^2)
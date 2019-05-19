# Raisin_20

*Asked by: Facebook.*

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
Given an N by K matrix where the nth row and kth column represents the cost to build the n-th house with k-th color, return the minimum cost which achieves this goal.

#### Solution

To calculate a correct cost we should take into account that **two neighboring houses can't be of the same color**. So, if a minimal cost of a one building is for a color **a**  then we can't take the same color for the nearest buildings. But we can take a second minimal! 

We can have one problem with this approach. Let's suppose, the minimal cost of the current building is **5** and of the next one is **2** and they are both in the same position. If the second minimal of the next building is **6** then we get **11** as a final cost. But if the second minimal fot the current one is even **7** then we can take **2** and receive **9** in result. To prevent us from this bug we should always keep two values: first and second minimals and calculate final cost for both of them. 

For current task we take original matrix and return new one with two minimal costs and their indexes. Then we go through this array and calculate result. If minimal cost of the next building isn't for the same color then we can add it to the current cost and store its index. In other way, we take the second minimal cause it can never be in the same position. The same for the second value.

**Сomplexity** 

O(K*N)
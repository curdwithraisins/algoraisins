# Raisin_29

*Asked by: Pinterest.*

At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). To help figure out who this is, you have access to an O(1) method called knows(a, b), which returns True if person a knows person b, else False.

Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.

#### Solution

First of all we need to do the next checking: if some person knows another one then the first person can't be a celebrity but the second one can. We check each person one by one and receive the one who's everyone knows.

**Сomplexity** 

O(N)
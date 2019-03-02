# Raisin_13

*Asked by: Google.*

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
Hint: The basic equation of a circle is x2 + y2 = r2.

#### Solution

By a Monte Carlo method we should fit our figure in a square and choose as many different points (**M**) within the square as we need for a precision. If chosen point is present in the figure then we can assume that the area of the figure is **S = N/M*a^2*, where a^2 is an area of the square and **N** is a number of the points presents in the figure.

Lets assume that we have a circle with a center in (0,0) and a radius = 1. The area of the circle is *S = πr^2*. As r = 1 then *S = π* and **a^2 = (2*r)^2 = 4*. In this way *S = π = 4N/M*. 

We need to choose two points: x and y - in a way that *-1 < x < 1* and *-1 < y < 1*. As *x^2 + y^2 = r^2* then if *x^2 + y^2 <= 1* we can assume that x and y are present in the circle and increment **N**.

**Сomplexity** 

O(1) as we always has 10M operations. We used this value because it gives us an appropriate precision.
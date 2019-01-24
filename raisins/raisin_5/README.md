# Raisin_5

*Asked by: Jane Street.*

**cons(a, b)** constructs a pair, and **car(pair)** and **cdr(pair)** returns the first and last element of that pair. For example, **car(cons(3, 4))** returns 3, and **cdr(cons(3, 4))** returns 4.
Given this implementation of cons:
````
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
````
Implement car and cdr.

#### Solution

It is simple chaining. As **cons** returns function which takes another function as a parameter we need just to pass a function with returns a or b.
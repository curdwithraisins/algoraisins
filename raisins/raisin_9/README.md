# Raisin_9

*Asked by: Twitter.*

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

#### Solution

With JS we can do it simple: just filter an array by checking each value if it starts with s.

We can also preprocess a dictionary. For it we need to create a hashTable where:
* kay - an assumptive query 
* and values - the strings from the dictionary which start with the key.

To get a correct autocomplete value we need just to take a list of strings by the query.

This method is faster then the first one in the case when we preprocess dictionary only once and can reuse it for the next times. We can update preprocessed dictionary if we need to.

We can also use memcach.

**Сomplexity** 

* first: O(N)
* second: O(1)
# Raisin_19

*Asked by: Microsoft.*

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.
For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

#### Solution

Firstly, create a hash table by each first later of the words in dictionary. Then go by the given sentence and look for the word from the dictionary by the first later in the sentence. Check if a word from dic the same as in sentence and split sentence by this word. Then recursively do the same. If we have several words for a later and it could be any of them then check both paths. 

**Сomplexity** 


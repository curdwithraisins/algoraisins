# Jump Search

### Description
A Jump Search (or Block Search) is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

For example, suppose we have an array arr[] of size n and block (to be jumped) of size m. Then we search at the indexes arr[0], arr[m], arr[2 * m], ..., arr[k * m] and so on. Once we find the interval arr[k * m] < x < arr[(k+1) * m], we perform a linear search operation from the index k * m to find the element x.

**Сomplexity** 

O(√n)
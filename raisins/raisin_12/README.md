# Raisin_12

*Asked by: Facebook.*

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

#### Solution

We don't need to store all values to find a random. All we need to do is to find a random value in each chunk and then choose one of them.

In current implementation we read all data chunk by chunk. As data represents as a string with the numbers separated by space we split those strings to create an array of numbers and then choose random value from those arrays. In the and when we read all data we can choose another one random from the list of randoms.

In this case each value has an equal possibility to be chosen.

For this implementation we used Node Streams and Transforms to change data. As Streams are async we also used Promises to wait for a result.

You can find another solution here: https://www.dailycodingproblem.com/blog/how-to-pick-a-random-element-from-an-infinite-stream/

**Сomplexity** 

As we don't store all values from a Stream and save only one random value the complexity of this solution depends on the size of the stream, at least a number of chunks.
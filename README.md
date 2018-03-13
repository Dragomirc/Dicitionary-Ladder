## Shortest Distance Finder

Given the start word, end word, and the dictionary, find the length of the shortest transformation sequence from start to end, such that:

* Only one letter can be changed at a time
* Each intermediate word must exist in the given dictionary
* At each step, exactly one character is replaced with another character

### Instructions on how to run the project/test

1. `npm i`
2. `npm test`

### Answers

#### How did I approach solving this problem?

As the only way to find the shortest path, is to iterate through the
dictionary I initially thought of the cases, when there is no need to start the iteration. These case are as per below:

* When the start and the end word are equal
* When the the start and the end word differ just by one character

Then I decided to break the problem into smaller problems, based on the functionality I needed:

* I created the function isAdjacent() to check if the two strings are adjacent
* I created the function findDistance() to find one path to convert
  the start word into the end word, as there might be multiple paths,subject to the order of the words in the dictionary, and their depth can differ as well.
* I created the findShortestDistance() which marks words as visited, by deleteing them from dictionary, then it calls recursivley findDistance() until all possible paths lengths are collected in an array, in order to return the shortest path or -1 if there is no path.

#### How did I check that my solution is correct?

I covered in my tests the edge scenarios, and broke my solution into small pure functions, thus they can be easily tested.

#### Assumptions that I' have made.

* The dictionary always contains at least one word
* The dictinary doesn't contain any duplicated words
* The start, end and all words in the dictionary are lowercase

const isAdjacent = require("./isAdjacent.js");

const findDistance = (start, end, dictionary) => {
  let dictionaryCopy = Array.from(dictionary);
  let tempQueue = [];
  tempQueue.push(start);
  let count = 0;
  let currentWord;

  //Loop through dictionary and find adjacent Words
  while (count < dictionaryCopy.length) {
    currentWord = dictionaryCopy[count];
    if (isAdjacent(start, currentWord)) {
      tempQueue.push(currentWord);
      if (isAdjacent(currentWord, end)) {
        return {
          currentDistance: tempQueue.length,
          firstVisitedWord: tempQueue[1]
        };
      }
      start = currentWord;
      dictionaryCopy.splice(dictionaryCopy.indexOf(currentWord), 1);
      count = 0;
    } else {
      count++;
    }
  }

  return { lastVisitedWord: start };
};

module.exports = findDistance;

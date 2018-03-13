const isAdjacent = require("./isAdjacent.js");
const findDistance = require("./findDistance");

const findShortestDistance = (start, end, dictionary) => {
  if (start === end) {
    return 0;
  } else if (isAdjacent(start, end)) {
    return 1;
  }

  let dictionaryCopy = Array.from(dictionary);
  dictionaryCopy.splice(dictionaryCopy.indexOf(start), 1);

  if (!dictionaryCopy.includes(end)) {
    dictionaryCopy.push(end);
  }

  let allDistances = [];
  let searchResult = findDistance(start, end, dictionaryCopy);

  while (searchResult.lastVisitedWord !== start) {
    if (searchResult.currentDistance) {
      allDistances.push(searchResult.currentDistance);
      dictionaryCopy.splice(
        dictionaryCopy.indexOf(searchResult.firstVisitedWord),
        1
      );
      searchResult = findDistance(start, end, dictionaryCopy);
    } else {
      dictionaryCopy.splice(
        dictionaryCopy.indexOf(searchResult.lastVisitedWord),
        1
      );
      searchResult = findDistance(start, end, dictionaryCopy);
    }
  }

  return allDistances.sort()[0] ? allDistances.sort()[0] : -1;
};
module.exports = findShortestDistance;

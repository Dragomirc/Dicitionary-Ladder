const isAdjacent = (word1, word2) => {
  let word1Characters = word1.split("");
  let word2Characters = word2.split("");
  let matchingCharcters = word1Characters.filter(letter => {
    if (word2Characters.includes(letter)) {
      word2Characters.splice(word2Characters.indexOf(letter), 1);
      return true;
    } else {
      return false;
    }
  });
  return word1Characters.length - matchingCharcters.length == 1;
};

module.exports = isAdjacent;

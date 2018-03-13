const test = require("tape");
const isAdjacent = require("../isAdjacent.js");

test("check if two strings are adjacent / differ just by one character", t => {
  t.equals(
    isAdjacent("lack", "mack"),
    true,
    '"lack", "mack" should return true'
  );
  t.equals(
    isAdjacent("lack", "lack"),
    false,
    'lack", "lack" should return false'
  );
  t.equals(
    isAdjacent("lack", "meck"),
    false,
    '"lack", "meck" should return false'
  );
  t.equals(
    isAdjacent("aaaa", "aaab"),
    true,
    '"aaaa", "aaab" should return true'
  );
  t.end();
});

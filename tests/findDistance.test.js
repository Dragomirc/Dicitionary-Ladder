const test = require("tape");
const findDistance = require("../findDistance.js");
const array = ["hock", "lick", "hack", "sick", "sock", "mack", "mock"];

test("tape is working", t => {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, "one should equal one");
  t.end();
});
test("Check the array passed as argument to findDistance() is not mutated", t => {
  findDistance("lack", "mock", array);
  t.deepEqual(
    array,
    array,
    "the function should not mutate the array passed as argument"
  );
  t.end();
});

test("Return an object containing the length of the first possible distance to convert the start word to the end word, and the first visited word in the dictionary", t => {
  t.deepEqual(
    findDistance("lack", "mock", array),
    {
      currentDistance: 4,
      firstVisitedWord: "lick"
    },
    " should pass based on the first possible convertion - [ 'lack', 'lick', 'sick', 'sock' ]"
  );
  t.deepEqual(
    findDistance("lack", "sock", array),
    {
      currentDistance: 3,
      firstVisitedWord: "lick"
    },
    " should pass based on the first possible convertion - [ 'lack', 'lick', 'sick' ]"
  );
  t.deepEqual(
    findDistance("lack", "hack", array),
    {
      currentDistance: 5,
      firstVisitedWord: "lick"
    },
    " should pass based on the first possible convertion - [ 'lack', 'lick', 'sick', 'sock', 'hock' ]"
  );
  t.end();
});
test("Return an object containing the lastVisitedWord in the dictionary if based on the current path it is not possible to convert the start word to the end word", t => {
  t.deepEqual(
    findDistance("lack", "mock", ["lick", "hack"]),
    {
      lastVisitedWord: "lick"
    },
    " should return based on path ['lick']"
  );
  t.deepEqual(
    findDistance("lack", "mock", ["lick", "hack", "sick"]),
    {
      lastVisitedWord: "sick"
    },
    " should return based on path ['lick','sick']"
  );
  t.deepEqual(
    findDistance("lack", "mock", ["lick", "nack", "hack", "sick", "nick"]),
    {
      lastVisitedWord: "hack"
    },
    " should return based on path [ 'lack', 'lick', 'sick', 'nick', 'nack', 'hack' ]"
  );

  t.end();
});

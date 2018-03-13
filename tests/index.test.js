const test = require("tape");
const findShortestDistance = require("../index.js");
const array = ["hock", "lick", "hack", "sick", "sock", "mack", "mock"];
const copyArray = Array.from(array);

test("Check the array passed as argument to findShortestDistance() is not mutated", t => {
  findShortestDistance("lack", "mock", array);
  t.deepEqual(
    array,
    copyArray,
    "the function should not mutate the array passed as argument"
  );
  t.end();
});

test("Check  findShortestDistance() returns the shortest path to convert start word to end word", t => {
  t.deepEqual(
    findShortestDistance("lack", "mock", array),
    2,
    "the test should pass based on the following possible converstions:[[ 'lack', 'lick', 'sick', 'sock' ],[ 'lack', 'hack', 'hock' ],[ 'lack', 'mack' ]] "
  );
  t.deepEqual(
    findShortestDistance("lack", "sock", array),
    3,
    "the test should pass based on either the following possible converstions:[[ 'lack', 'lick', 'sick' ],[ 'lack', 'hack', 'hock' ]] "
  );
  t.deepEqual(
    findShortestDistance("lack", "sick", array),
    2,
    "the test should pass based on either the following possible converstions:[[ 'lack', 'lick' ],[ 'lack', 'hack', 'hock', 'sock' ]] "
  );
  t.deepEqual(
    findShortestDistance("lack", "lick", array),
    1,
    "the test should pass based on the following possible converstions:[[ 'lack', 'lick']] "
  );
  t.deepEqual(
    findShortestDistance("lack", "lack", array),
    0,
    "should return 0 if the start word is the same as the end word"
  );
  t.deepEqual(
    findShortestDistance("lack", "lagg", array),
    -1,
    "should return -1 if there is no possible path"
  );
  t.end();
});

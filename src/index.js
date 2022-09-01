const { checkAndAdd } = require('./checkAndAdd');
const {
  toAddTo, // list of words to which we are adding
  toBeAdded, // list of words to be added
  finalList, // list to test against
} = require('../arrays');

const list = [...toAddTo];

console.log('words to add:', toBeAdded);
console.log('original list:', list, '\n');
toBeAdded.forEach((word) => {
  console.log('add [', word, '] to the list');
  if (!checkAndAdd(list, word)) {
    console.log('something has gone terribly wrong\n');
    return;
  }
  console.log('list:', list, '\n');
});

console.log('adding to the list was'
  + (JSON.stringify(list) === JSON.stringify(finalList) ? ' ' : ' un')
  + 'successful\n');

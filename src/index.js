const fs = require('fs');
const { checkAndAdd } = require('./checkAndAdd');
const toAddToFile = process.argv[2]; // list of words to which we are adding
const toBeAddedFile = process.argv[3];
const toAddTo = JSON.parse(fs.readFileSync(toAddToFile).toString());
const toBeAdded = JSON.parse(fs.readFileSync(toBeAddedFile).toString());
const finalList = JSON.parse(fs.readFileSync('testArray.json').toString());

const list = toAddTo;

console.log('original list:', list, '\n');
console.log('words to add:', toBeAdded);

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

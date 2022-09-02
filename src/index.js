const { checkAndAdd } = require('./checkAndAdd');
const fs = require('fs');
const readline = require('readline');

const list = [];
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('please enter a word to ad to the list (or type \'exit()\' to exit) >');
rl.on('line', (word) => {
  if (word === 'exit()') {
    process.exit();
  }
  if (!checkAndAdd(list, word)) {
    console.log('something has gone terribly wrong\n');
  }
  console.log('current list: ', list);
  rl.prompt();
});

// need this to get the ball rolling
rl.prompt();

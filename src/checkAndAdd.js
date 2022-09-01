const checkAndAdd = (list, word) => {
  if(!list.includes(word)) {
    list.push(word);
  }
  return list.includes(word);
}

module.exports = {
  checkAndAdd,
};

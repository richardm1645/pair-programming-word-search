const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) {
    return false;
  }
    
  //searching horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const i of horizontalJoin) {
    if (i.includes(word)) {
      return true;
    }
  }

  //searching vertically
  let verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let slice = letters[0].slice(i, i + 1);
    verticalJoin.push(slice);
  }

  for (let j = 1; j < letters.length; j++) {
    for (let k = 0; k < verticalJoin.length; k++) {
      verticalJoin[k] += letters[j][k];
    }
  }

  if (verticalJoin.includes(word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;


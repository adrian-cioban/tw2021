const sampleString = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
  const words = text.split(' ');
  const result = {};
  for (let word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  for (let word in result) {
    result[word] /= word.length;
  }
  return result;
};

//console.log(getCounts(sampleString));

const relativeFrequency = (string) => {
  const result = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (letter in result) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  for (let letter in result) {
    result[letter] /= letter.length;
  }

  return result;
};

console.log(relativeFrequency(sampleString));

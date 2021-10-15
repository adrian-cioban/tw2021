const dictionary = [
  'the',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'lazy',
  'dog'
];

const sampleText = `
  best
  read
  on
  windy
  nights`;

const checkAcrostih = (text, dictionary) => {
  const candidate = text
    .split('\n')
    .filter((e) => e)
    .map((e) => e.trim())
    .map((e) => e[0])
    .join('');
  return dictionary.indexOf(candidate) !== -1;
};

console.log(checkAcrostih(sampleText, dictionary));

const censorText = (text, dictionary) => {
  let result = [];
  let words = text.split(' ');
  for (let word of words) {
    if (word === dictionary) {
      let censorWord = [];
      censorWord += word[0];
      for (let i = 1; i < word.length - 1; i++) {
        censorWord += '*';
      }
      censorWord += word[word.length - 1];
      result += censorWord + ' ';
    } else {
      result += word + ' ';
    }
  }
  return result;
};

console.log(censorText('javascript este minunat', 'este'));

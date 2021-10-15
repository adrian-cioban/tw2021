const words = [
  'fox',
  'wolf',
  'snake',
  'crocodile',
  'lion',
  'cat',
  'crocodile',
  'horse'
];

const forbiddenWord = 'crocodile';
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);

console.log(filterWords(words, forbiddenWord, minLength));

const ani = [2000, 2005, 2001, 1995, 2009, 2010];

let varste = ani.map((x) => 2021 - x).filter((x) => x > 18);

console.log(varste);

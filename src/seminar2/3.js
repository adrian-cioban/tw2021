let occurences = (text, character) => {
  // let count = 0;
  // for (var i = 0; i < text.length; i++) {
  //   if (text.charAt(i) === character) {
  //     count++;
  //   }
  // }
  // return count;
  return text.split(character).length - 1;
};

//console.log(occurences('sample text', 'e'));

//implementează o funcție care primește ca parametru o listă de numere și returnează un array conținând acele numere
const convert = (numbers) => {
  let result = [];
  let splitNumbers = numbers.split(' ');
  for (let number of splitNumbers) {
    result.push(Number(number));
  }
  return result;
};

console.log(convert('1 2.1 3 4 5'));

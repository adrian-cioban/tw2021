let sayHello = (name) => `Hello, ${name}!`;

//console.log(sayHello(process.argv[2]));

const concatOfStrings = (arrayOfStrings) => {
  let result = '';
  for (let string of arrayOfStrings) {
    result += string;
  }

  return result;
};

let array = ['banane', 'mere', 'pere'];
console.log(concatOfStrings(array));

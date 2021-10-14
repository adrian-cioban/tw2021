function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

//console.log(checkDivisible(10, 2));
//console.log(checkDivisible(10, 3));

const numberOfDifferentCharacters = (string1, string2) => {
  if (string1.length !== string2.length) {
    return -1;
  } else {
    let count = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        count++;
      }
    }
    return count;
  }
};

console.log(numberOfDifferentCharacters('phone', 'phone'));
console.log(numberOfDifferentCharacters('phone', 'phones'));
console.log(numberOfDifferentCharacters('photo', 'phone'));

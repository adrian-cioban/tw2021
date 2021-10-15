const array = [1, 2, 3, 4, 5];
let average = array.reduce((sum, value) => sum + value, 0) / array.length;

console.log(average);

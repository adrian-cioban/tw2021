const squareDimensions = [3, 5, 12, 3, 5, 3];

const getTotalArea = (squareDimensions) =>
  squareDimensions
    .map((side) => side * side)
    .reduce((prev, current) => prev + current, 0);

const result = getTotalArea(squareDimensions);
console.log('result: ', result);

const numbers = [4, 5, 12, 15, 20, 21];
const number = 3;

let result2 = numbers
  .filter((x) => x % number === 0)
  .reduce((prev, current) => prev + current, 0);

console.log(result2);

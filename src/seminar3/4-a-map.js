const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (const element of array) {
    result.push(transformation(element));
  }
  return result;
};

console.log(map(sampleArray, (x) => x * 2));

const reduce = (array, transformation) => {
  let result2 = 0;
  for (let element of array) {
    result2 += element;
  }
  return result2;
};

console.log(reduce(sampleArray, 0));

function addToArray(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ['a'];

console.log(addToArray(array, 'b', 'c').join(', '));

let arrayCombined = (array1, array2) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
};

let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];

console.log(arrayCombined(array1, array2));

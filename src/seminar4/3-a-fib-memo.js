function fibGen() {
  const cache = [1, 1];
  const fib = (index) => {
    if (index < cache.length) {
      console.log('found ' + index);
      return cache[index];
    } else {
      console.log('calculated ' + index);
      cache[index] = fib(index - 1) + fib(index - 2);
      return cache[index];
    }
  };
  return fib;
}

const fib = fibGen();
console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

// implementați o variantă recursiva a unei funcții de exponențiere.
// Atât rezultatele finale cât și cele intermediare vor fi memoizate
function exp() {
  const cache = [0, x];
  const f = (x, pow) => {
    if (pow < cache.length) {
      console.log('found ' + pow);
      return cache[pow];
    } else {
      console.log('calculated ' + pow);
      cache[pow] = f(x, pow - 1) * x;
      return cache[pow];
    }
  };
  return f;
}
let x = 4;
const f = exp();

console.log(f(x, 4));
console.log(f(x, 2));
console.log(f(x, 3));
console.log(f(x, 5));

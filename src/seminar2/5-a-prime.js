const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

// if (process.argv.length < 3) {
//   console.log('not enough params');
// } else {
//   console.log(checkPrime(parseInt(process.argv[2])));
// }

const fibonacci = (order) => {
  switch (order) {
    case 0:
      return 1;
    case 1:
      return 1;
    default:
      return fibonacci(order - 1) + fibonacci(order - 2);
  }
};

if (process.argv.length < 3) {
  console.log('not enough params');
} else {
  console.log(fibonacci(parseInt(process.argv[2])));
}

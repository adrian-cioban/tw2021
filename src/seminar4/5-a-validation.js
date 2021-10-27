const orederCoffee = (type) => {
  const types = {
    SPECIAL: 'SPECIAL',
    REGULAR: 'REGULAR'
  };

  if (Object.values(types).indexOf(type) === -1) {
    throw new Error('coffee error');
  } else {
    console.log(`preparing ${type} coffee`);
  }
};

// try {
//   orederCoffee('REGULAR');
//   orederCoffee('SWEET_COFFEE_NO_SUGAR_NO_CAFFEINE');
// } catch (err) {
//   console.warn(err);
// }

// implementați funcția increaseSalary care primește ca parametrii un array
// de salarii și un număr reprezentând procentul cu care se vor mări (ex 10).
// Funcția aruncă excepții dacă primul parametru nu este un array sau al
// doilea parametru nu este un număr
const increaseSalary = (array, number) => {
  if (Array.isArray(array) === false) {
    throw new Error('not an array');
  } else {
    if (Number.isNaN(number) === true) {
      throw new Error('not a number');
    } else {
      console.log(`salariile se vor mari cu ${number}%`);
    }
  }
};

increaseSalary([2000, 3000], 10);

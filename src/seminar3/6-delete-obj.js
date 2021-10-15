const getFilteredObjects = (array, object) => {
  return array.filter((element) => {
    let result = false;
    Object.keys(object).forEach((key) => {
      if (!element[key] || element[key] !== object[key]) {
        result = true;
      }
    });
    return result;
  });
};

const laptops = [
  {
    brand: 'HP',
    processor: 'i5',
    ram: 8
  },
  {
    brand: 'Lenovo',
    processor: 'i5',
    ram: 16
  },
  {
    brand: 'Acer',
    processor: 'i5',
    ram: 8
  },
  {
    brand: 'Asus',
    processor: 'i7',
    ram: 8
  }
];

const result = getFilteredObjects(laptops, { processor: 'i5', ram: 8 });
console.log('result: ', result);

const sortDynamic = (key, order = 'asc') => {
  const sortOrder = order === 'asc' ? 1 : -1;
  return (a, b) => {
    const A = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const B = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
    if (A < B) {
      return sortOrder * -1;
    } else if (A > B) {
      return sortOrder * 1;
    } else {
      return 0;
    }
  };
};

console.log(laptops.sort(sortDynamic('brand', 'asc')));

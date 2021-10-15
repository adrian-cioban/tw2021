const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf('{' + i + '}') !== -1) {
      modified = modified.replace('{' + i + '}', format[i]);
    }
  }
  return modified;
};

console.log(
  formatString("this is a {0} string and we've {1} it", 'nice', 'formatted')
);

const formatString2 = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf('{substantiv}') !== -1) {
      modified = modified.replace('{substantiv}', format[i]);
    } else {
      if (modified.indexOf('{adjectiv}') !== -1) {
        modified = modified.replace('{adjectiv}', format[i]);
      }
    }
  }
  return modified;
};

console.log(
  formatString2('un {substantiv} este {adjectiv}', 'căluț', 'drăguț')
);

String.prototype.capitalizeWords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
};

console.log('this words will be capitalized.'.capitalizeWords());

// implementați metoda 'times' pe tipul Number, astfel încât
// 3.times(() => {}) să execute funcția de 3 ori
Number.prototype.times = function () {
  for (let i = 0; i < this.valueOf(); i++) {
    console.log('executare functie');
  }
};

let n = 3;
console.log(n.times());

class Stream {
  #value;
  #nextValue;
  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor(value) {
    super(0, (value) => value + 1);
  }
}

// const constant = new ConstantStream(1);
// const nextInteger = new NextIntegerStream();
// for (let i = 0; i < 10; i++) {
//   console.log(`constant[${i}] = ${constant.next}`);
//   console.log(`nextInteger[${i}] = ${nextInteger.next}`);
// }
// console.log(Stream.count);

//implementați un tip obiectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată. Constructorul primește valoarea inițială a secvenței. Singura metodă este 'next' care calculează următoarea valoare din șir
class SirValoriPare extends Stream {
  constructor(value) {
    super(value, (value) => {
      if (value % 2 === 0) {
        return value + 2;
      } else {
        return value + 1;
      }
    });
  }
}

const valoriPare = new SirValoriPare(4);
for (let i = 0; i < 10; i++) {
  console.log(`valoriPare[${i}] = ${valoriPare.next}`);
}

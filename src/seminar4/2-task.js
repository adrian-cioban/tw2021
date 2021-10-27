//implementați următoarea structură de tipuri. Software este un tip care
//are metoda 'run'. Browser moștenește Software și poate adăuga și
//instala Plugin. Un Browser poate avea multiple Plugin

class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  use() {
    console.log(`${this.name} is used`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
  }

  installPlugin(name) {
    const p1 = new Plugin(name);
    this.plugins.push(p1);
  }

  usePlugins() {
    for (const p of this.plugins) {
      p.use();
    }
  }
}

const s1 = new Software('edge');
s1.run();

const p1 = new Plugin('adblock');
p1.use();

const b1 = new Browser('chrome');
b1.run();
b1.addPlugin(p1);
b1.installPlugin('color picker');
b1.usePlugins();

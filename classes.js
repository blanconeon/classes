//Classes:

class Animal {
  constructor(name) { // name is set on object definition “Rex”
    this._name = name;
    this._behavior = 0;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior() {          // simple method
    this._behavior++;
  }
}

class Dog extends Animal {
  constructor(name, breed) { // name here inherits the ability to set a name, it does not inherit an actual name. And breed is new to this subclass
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  set breed(newBreed) {
    this._breed = newBreed;
  }
}

let rex = new Dog('Rex', 'Labrador');

console.log('Before:', rex.behavior);   // 0
rex.incrementBehavior();                // method call — note the ()
console.log('After:', rex.behavior);    // 1

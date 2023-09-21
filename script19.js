//ES6 classes
// class declaration

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  startEngine() {
    console.log("Engine has been started");
  }
}

let honda = new Car("Red", 2023);
honda.startEngine();

// Important points regarding class
// Classes are not hoisted
// Classes are also first class citizens(pass as an argument or return)
// Classes are executed in strict mode

// Class in heritance

// Child class
class Bike extends Car {
  // Adding some properties and method
  constructor(color, model, engineCapacity) {
    // it will tell what properties we need in this child class
    super(color, model); // it will call the parent class (which will have these properties)
    this.engineCapacity = engineCapacity;
  }
}
let newBike = new Bike("black", 2024, "125cc");
console.log(newBike);

//Chaining methods

class bankAccounts {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.movements = [];
  }
  getMovements() {
    return this.movements;
  }

  deposit(val) {
    this.movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}

let account = new bankAccounts("Zack", 1234);
account.deposit(25).withdraw(10).deposit(90);
console.log(account.getMovements());
console.log(account);

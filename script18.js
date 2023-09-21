// object oriented programming

// Constructor function and the "new" operator

// we can not use arrow function in constructor

// Call Constructor function using "new" keyword

let Car = function (color, model) {
  this.color = color;
  this.model = model;
};

let car1 = new Car("red", 2021);
let car2 = new Car("yellow", 2022);

// Prototype
// Every function in javascript is also a constructor
// whenever a function is called as a constructor then that function includes a property called prototype with which you can add new methods and properties

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log(this.name);
};

const person = new Person("p1");

person.printName();

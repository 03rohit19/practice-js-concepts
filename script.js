// What are the possible ways to create objects in javascript
// 1) using object constructor
var d = new Object();
console.log(d);
// 2) using create.object
var car = {
  model: "BMW",
  color: "red",
};

var electricCar = Object.create(car);
console.log(electricCar.color);
//3) using function constructor
var obj = function (name) {
  this.name = name;
};
var e = new obj("hii");
console.log(e);
// 4) using function constructor + prototype
function myobj() {}
myobj.prototype.name = "hello";
var k = new myobj();
console.log(k);

// 5) object initializer
var o1 = {
  name: "ravi",
  show: function () {
    return this.name;
  },
};
console.log(o1.name);
console.log(o1.show());

// 6) ES6 class syntax
class person {
  constructor(name) {
    this.name;
  }
}
let o4 = new person("rahul");
console.log(o4.name);

// prototypes

// prototypical inheritance

// Objects are extended from other objects . And we can reuse their properties and methods.
// objects are chained in prototypical inheritance
// Objects have hidden property called [ prototype ]

let animal = {
  eats: true,
  walks: function () {
    return "walks";
  },
};
let dog = { barks: true };
let myDog = { name: "jhoori" };

dog.__proto__ = animal;
myDog.__proto__ = dog;

console.log(dog.barks);
console.log(dog.eats);
console.log(dog.walks());
console.log(myDog.walks());

//__proto__ : is a getter or setter of prototype, wrirring properties doesnt call inherited properties

for (let key in dog) {
  console.log(key);
}

for (let a of Object.keys(dog)) {
  console.log(a);
}

for (let b of Object.values(dog)) {
  console.log(b);
}

// prototype version vs class version

// prototype version
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return this.name;
};

let user = new User("rohit");
user.sayHi();

//class version
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return this.name;
  }
}

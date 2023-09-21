//objects

let car = {
  color: "black",
  company: "hyundai",
  model: "2023",
};

console.log(car["color"]);
// modify the object

car["color"] = "brown";
car.company = "suzuki";

// deleting object properties
let object = {
  prop1: "value1",
  prop2: "value2",
};

delete object.prop1;
delete object["prop2"];

//method
let person = {
  ageCalculator: function (birthyear) {
    let age = 2023 - birthyear;
    return age;
  },
};

console.log(`your age is ${person.ageCalculator(2003)}`);

// this method
// in each method we have access to a special keyword called"this"

// "this" represent that object who calls that method which give access "this"

let person1 = {
  firstname: "abc",
  secondname: "dgc",
  city: "delhi",
  education: "sde",
  getSummary: function () {
    return `${this.firstname} lives in ${this.city}`;
  },
};

console.log(person1.getSummary);

// forEach method in array
let drama = ["cringe", "happy", "sad"];
drama.forEach(function (element) {
  console.log(element);
});

//object inside array
let user = [
  {
    username: "john",
    reason: "abusive content",
  },
  { username: "rocky", reason: "copywrite-issue" },
];

for (let i = 0; i < user.length; i++) {
  console.log(`blocked users are ${user[i].username}`);
}

//math

let num = 9.6;
console.log(Math.round(num)); //round to nearest
console.log(Math.floor(num)); //round to down
console.log(Math.ceil(num)); //round to up
console.log(Math.trunc(num)); //remove decimal part

let random = Math.random;
console.log(Math.round(random * 100));

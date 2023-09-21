// object references

// let address = { city: "laal kuwaan", state: "uttarakhand" }; // object reference
// let person = {
//   name: "john",
//   address: addressObject,
// };

// this usage in object
function sayHi() {
  return "hi" + this.name;
}
let john = "john";
let obj1 = {
  name: john,
};

obj1.say = sayHi;
console.log(obj1);
console.log(obj1.say());

// functions as object

// memoization

// this,call,apply,bind

let person = {
  name: "jam",
  age: 23,
  location: "delhi",
};

function checkName(a, b) {
  return this.name;
}
//method 1 without using call
person.check = checkName;
console.log(person.check());
//method 2 with using call

let Name = checkName.call(person, 1, 2);
console.log(Name);

// with using apply

let apply = checkName.apply(person, [1, 2]);
console.log(apply);

// bind
let fx = checkName.bind(person);
console.log(fx.name);

// debounce
// run or call a function only when it has not been called again for a fixed time
// suppose if u are typing and pause for 1 sec only then that function should called

let count = 1;

function showCount() {
  count++;
  console.log(count);
}

function debounce(fx, time) {
  let id = null;
  return function (x) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(fx, time, x);
  };
}

let showCountD = debounce(showCount, 2000);
showCountD();

const el = document.getElementById("text1");
const logo = document.getElementById("text-output1");

el.addEventListener(
  "keyup",
  debounce(function (e) {
    logo.innerText = e.target.value;
  }, 1000)
);

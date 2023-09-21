// functions
// it is simply a piece of code which we ca use in our code many times
// it is just like a variable holding some piece of code

// function declaration
function declare() {
  console.log("declared");
}

//func call
declare();

//func expression
let fun = function () {
  console.log("new declaration");
};
fun(); // calling func expression

// passing values (arguments and parameters)
let invitation = function (name) {
  // here name is parameter
  console.log(`hello ${name} you are welcome`);
};
invitation("marrie"); // here marie is argument

// basic age calc
let agecalc = function (birthyear, currentyear = 2023) {
  let age = currentyear - birthyear;
  return age;
};
console.log(agecalc(1997));

// arrow function
let invitation2 = (name) => `HII ${name} welcome to the party`;
console.log(invitation2("rohit"));

//Higher order function (passing function as an argument)

let uppercase = function (str) {
  return str.toUpperCase();
};

let lowercase = function (str) {
  return str.toLowerCase();
};

let transformer = function (str, func) {
  return func(str);
};

transformer("hello", uppercase);

//function returning another function

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};

let complimented = compliment("you are a good coder");
complimented("rohit");

// setTimeOut and setInterval
// setTimeOut : runs function once after interval of time
// setInterval : runs repeatedly

function greeting(name) {
  console.log(`hello ${name} welcome to the community`);
}

setTimeout(greeting, 3000, "rohit");

//call fback function

var cal = function (fx, a, b) {
  return fx(a, b);
};
var diff = function (a, b) {
  return a - b;
};

cal(diff, 9, 8);

// Closure: A function along with its lexical scope forms a closure

function createUser(name) {
  let greeting = "hi";
  function greet() {
    return greeting + " " + name + " is created";
  }
  return greet; // Return the greet function
}

let welcomeJohn = createUser("john");

let welcomeJack = createUser("jack"); // Now call createUser with john
console.log(welcomeJohn());
console.log(welcomeJack()); // Call welcomeJohn function to get the greeting

// IIFE: Immediately Invoked Function Expression

(function () {
  var x = 1;
  return x;
})(); // Invoke the function immediately

// Currying

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3)); // Call sum function with one argument at a time

let add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // Call add function with one argument at a time

let log = (time) => (type) => (msg) =>
  `at ${time.toLocaleString()}: severity ${type} => ${msg}`; // Fix typo and add missing ${}

let logError = log(new Date())("error");
console.log(log(new Date())("error")("power not sufficient")); // Call log function with parentheses
console.log(logError("due to high temp"));

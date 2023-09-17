// type convertion
let stringType = "54";
console.log(stringType, typeof stringType);

// Number method
let numberType = Number(stringType);
console.log(numberType, typeof numberType);

// Array
let dishes = ["Biryani", "chat", "parathe"];
dishes[0] = "kheer";

// array methods
// join methods
console.log(dishes.join(","));

// indexOf
console.log(dishes.indexOf("chat")); //case sensitive

// concat method
let newDishes = ["sweet-dish", "pani-puri"];
console.log(dishes.concat(newDishes));
let updatedDish = dishes.concat(newDishes);

//length method
console.log(dishes.length);
console.log(updatedDish.length);

//Push method
console.log(updatedDish.push("chole"));

//pop method
console.log(dishes.pop());

// boolean values and comparison operators

let booleanType = true;
let stringtype = "true";
console.log(typeof booleanType, typeof stringtype);

// methods returns boolean type
let email = "wowexample@gmail.com";
let value = console.log(email.includes("@"));

// comparison operators always return booolean values

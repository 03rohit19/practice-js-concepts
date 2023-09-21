// Local storage
// get item
// set item
// update item

// set the item in local storage

localStorage.setItem("passion", "programming");
localStorage.setItem("age", 24);
console.log(localStorage);

// get item from local storage

console.log(localStorage.getItem("age"));

// update item
console.log(localStorage.setItem("age", 26));

// remove item if you want to remove some specific things

localStorage.removeItem("age");

// how to store complex data like array in local storage

let vehicles = [
  {
    company: "Honda",
    model: "2009",
  },
  {
    company: "Maruti",
    model: "2010",
  },
];

let stringOfVehicles = JSON.stringify(vehicles);
console.log(localStorage.setItem("vehicles", stringOfVehicles));

// get stored item again in object format

let storedData = localStorage.getItem("vehicles");
let objectFormat = JSON.parse(storedData);
console.log(objectFormat);

// array destructuring

let hotel = {
  name: "Taj hotel",
  location: " Mumbai",
  categories: ["north-indian", "chinese", "italian"],
};

let array = [1, 2, 3, 4];
let x = array[0];
let y = array[1];
let z = array[2];
let a = array[3];

console.log("without sestructuring", x, y, z, a);

// with destructuring
let items = [1, 2, 3, 4];

let [s, d, f, g] = items;
console.log("with destructuring", s, d, f, g);

// let [first, second] = hotel.categories;
// console.log(first, second);

let [first, , third] = hotel.categories;
console.log(first, third);

let nums = [1, 2, [3, 4]];
let [j, , [k, l]] = nums;
console.log(j, k, l);

// object destructuring

let Hotel = {
  Name: "Rock-hard",
  Location: "Whitefield",
  Categories: ["korean", "japanese", "indian"],
  mainMenu: ["starter", "main-course", "dessert"], // Changed "desert" to "dessert"
  openingHours: {
    sunday: { open: "10:00 AM", close: "11:00 PM" },
    monday: { open: "11:00 AM", close: "12:00 PM" },
  },
  Menutype: "platanium",
};

//Optional chaining
// let us suppose we want to check this hotel open on saturday or not
console.log(Hotel.openingHours.saturday?.open);
//on checking previous value of optional chaining => null and undefined

// for of loop
let menu = [...Hotel.Categories, ...Hotel.mainMenu]; // Corrected the object name to Hotel
console.log(menu);
for (let el of menu) console.log(el);
for (let item of menu.entries()) {
  console.log(`${i + 1}:${item}`);
}

// enhanced object literal

let { Name: HotelName, Location, Categories = [], mainMenu = [] } = Hotel;
console.log(HotelName, mainMenu, Location, Categories);
console.log(Hotel);

let { Name, openingHours } = hotel;
console.log(Name, openingHours);

let {
  sunday: { open, close },
} = openingHours;
console.log(open, close);

// spread operator

// unpacking of array elements

let num1 = [1, 3, 4, 5];
console.log(...num1);

let newarr = [9, 10, ...num1];
let updatedMenu = [...Hotel.mainMenu, "FoodE", "FoodF"];

// rest operator (Get elements and packed them into array)

let [u, b, ...rest] = num1;

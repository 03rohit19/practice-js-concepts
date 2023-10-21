let admins = ["john", "paul", "Neha", "harry"];

let output = admins.slice(2, 4);
console.log("output :", output);

let arr = [1, 2, 3, 4, 5, 6, 7];
let deletedArr = arr.splice(2, 2);

arr.splice(1, 0, 12, 13, 15);
console.log("deleted array", deletedArr);
console.log("added array", addedEl);

// 7.5: You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element

const arr1 = [1, 4, 7, 6, 8];
let updatedArr = arr1.map((arr) => arr * 2);
console.log(updatedArr);

// You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%

const arr2 = [10, 40, 70, 60, 80];
let passedArr = arr2.filter((e) => e > 75);
console.log(passedArr);

// You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

let nums = [2, 3, 5, 7, 8, 4, 9];
const sum = nums.reduce((acc, red) => acc + red, 0);
console.log(sum);

let nums2 = [2, 3, 5, 6, 8, 6, 4, 8];
let index = nums.indexOf(8);
console.log(index);

// You have given an array of objects of users as below. Find the specified user with name = "John"

// Also find the position (index+1) of that user inside the array?

let users = [
  {
    name: "Paul",
    age: 24,
    verified: true,
  },
  {
    name: "John",
    age: 21,
    verified: false,
  },
  {
    name: "Neha",
    age: 19,
    verify: true,
  },
];

const index1 = users.findIndex((user) => user.name === "John");

if (index1 !== -1) {
  console.log(`Position of John is in index ${index1 + 1}`);
} else {
  console.log("John is not present");
}

let nums1 = [16, 17, 18, 28, 22];
let gretorThan = nums1.every((e) => e > 15);
console.log(gretorThan);

let arr12 = [1, 2, 3, 4, 5];

let arr21 = [6, 7, 8, 9, 10];

let combinedArray = [...arr12, ...arr21];
console.log(combinedArray);

localStorage.setItem("name", "rohit");
localStorage.setItem("age", "25");

const myName = localStorage.getItem("name");
const myAge = localStorage.getItem("age");

console.log("name:", myName);
console.log("age", myAge);

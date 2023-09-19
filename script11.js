// DOM manipulation

// querry selector
let result = document.querySelector("p");
let result1 = document.querySelector(".coderfriend");
let result3 = document.querySelector("#coder");

querySelectorElemen.forEach((element) => {
  console.log(element);
});

// updating and changing the content
//innertext = reterive and set the selector in plain text

let heading = document.querySelector("h1");
console.log(heading.innerText);

//innerhtml = retrieve and set the selector in html format
console.log(heading.innerHTML);

//getting and setting attribute of elements
//get
let getlink = document.querySelector("a");

// console.log(setlink.getAttribute("href"));

//set
// Get the anchor element using querySelector
// let getlink = document.querySelector("a");

// Set the "href" attribute to the correct URL
getlink.setAttribute("href", "http://youtube.com");

// Update the text content of the anchor element
getlink.innerText = "Master Class of JS";

//changing style
heading.style.color = "red";

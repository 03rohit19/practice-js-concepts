// form events

let form = document.querySelector(".sign-up-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(email.value, password.value);
});

// working with arrays

// splice
//array.splice(index,deltedvalue,valueTobeadded)
// return deleted array
let num = [1, 2, 3, 4];
let updated = num.splice(1, 1, 1);
console.log("updatedarray", updated);

//map method

let salaries = [2000, 3000, 4000];
let newSal = salaries.map((sal) => {
  let incrementSal = salaries / 2;
  return salary + incrementSal;
});
console.log(newSal);

//filter

let gifts = ["rose", "diary", "macbook", "perfume"];

let filteredGift = gifts.filter((gift) => {
  if (gift == "rose" || gift == "macbook") {
    return gift;
  }
});

console.log(filteredGift);

// reduce
///array.reduce(function(total,currentvalue),initialvalue)
// return single value
let val = [1, 2, 3, 4, 5, 6];
let redVal = val.reduce(function (total, currentvalue) {
  return total + currentvalue;
}, 0);
console.log(redVal);

//find method

let students = [
  { id: 1, name: "john" },
  { id: 2, name: "cena" },
];

let result = students.find((res) => {
  return res.id === 1;
});
console.log(result);

// find index
let ages = [12, 34, 2, 3, 4];
let resultAge = ages.findIndex((age) => {
  return age > 15;
});
console.log(resultAge);

// some and every method

// some method return true if any array element pass the test
let scores = [1, 2, 3, 4, 5, 6, 7];
let someSco = scores.some((e) => {
  return e > 4;
});
console.log(someSco);

let newSco = [1, 2, 3, 4, 5, 6];
let resSco = newSco.every((e) => {
  return e > 2;
});
console.log(resSco);

//flatmap
let cart = [
  {
    name: "Mobile",
    qty: 1,
    price: 29990,
  },
  {
    name: "macBook",
    qty: 1,
    price: 230000,
  },
];

let newCart = cart.flatMap((items) => {
  if (items.name == "Mobile") {
    return [
      items,
      {
        name: "screenguard",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [items];
  }
});

console.log(newCart);

// sorting in array
let array = [1, 2, 43, 5];
let newarray = array.sort((a, b) => {
  return a - b;
});

console.log(newarray);

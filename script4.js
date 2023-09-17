var arr = [
  { price: 100, product: "mobile" },
  { price: 200, product: "PC" },
  { price: 300, product: "LAPtop" },
  { price: 400, product: "tab" },
];

var newArr = arr.map(function (value) {
  return value.price;
});
console.log(newArr);

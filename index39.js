const side = [1, 2, 3, 4, 5];

const calculateArea = function (side) {
  return side * side;
};

const calculatePerimeter = function (side) {
  return 4 * side;
};

const calculate = function (side, logic) {
  const output = [];
  for (let i = 0; i < side.length; i++) {
    output.push(logic(side[i]));
  }
  return output;
};

console.log(calculate(side, calculateArea));
console.log(calculate(side, calculatePerimeter));

// find out the maximum number in the array

const arr = [1, 2, 3, 45, 6];

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      return max;
    }
  }
}
const res = findMax(arr);
console.log(res);

const result = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(result);

const ages = [12, 3, 4, 5, 12, 3, 4];
// output {12 :2 , 3:2 , 4:1 so on}

let output = ages.reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(output);

const users = [
  { username: "ram", age: 30 },
  { username: "shyam", age: 23 },
  { username: "ramesh", age: 13 },
  { username: "ramu", age: 20 },
];

const output2 = users.reduce(function (acc, curr) {
  if (curr.age < 25) {
    acc.push({ username: curr.username, age: curr.age });
  }
  return acc;
}, []);

console.log(output2);

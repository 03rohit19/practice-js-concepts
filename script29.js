//js technical coding round interview
//question1
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
for (let key in input1) {
  console.log(key);
}
const input2 = { a: 2, e: 12, f: 5, d: 10 };

const output = { d: 10, e: 12 };

function fn(input1, input2) {
  let obj = {};
  for (let key in input1) {
    if (input1[key] === input2[key]) {
      obj[key] = input1[key];
    }
  }

  return obj;
}
console.log(fn(input1, input2));

// question2
const b2 = [1, 2, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3, 8, 8, 9];
const a1 = [1, 2, -2, 11, 7, 1];
let res1 = a1.sort((a, b) => a - b);
console.log(res1);
const out = [7];
const b = [1, 4, 7, 4, 7, 2];
const out2 = [4];

function secondLargest(input) {
  let arr = input.sort((a, b) => a - b);
  let res = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (res != input[i]) {
      res = input[i];
      break;
    }
  }
  console.log(input);
  return res;
}

let res2 = secondLargest(b2);
console.log(res2);

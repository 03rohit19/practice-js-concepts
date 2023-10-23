let mathsMarks = 87;
let engMarks = 78;
let scienceMarks = 89;

function passedOrNot(math, eng, sci) {
  math = math > 75 ? math : 0;
  eng = eng > 75 ? eng : 0;
  sci = sci > 75 ? sci : 0;
  return { math, eng, sci };
}

const res = passedOrNot(mathsMarks, engMarks, scienceMarks);
const res2 = passedOrNot(76, 74, 79);
console.log("First:", res);
console.log("******************");
console.log("second:", res2);

// Write a JavaScript function that uses logical operators to determine if a given number is both greater than 10 and less than 20. Test the function with different numbers and explain the results.

function check(num) {
  return num > 10 && num < 20;
}

let number = check(9);
console.log(number);

let marks = 50;
let age = 18;

let Result = marks > 40 ? (age > 18 ? "pass" : "ageIssue") : "MarksIssue";
console.log(Result);

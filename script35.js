let num = [1, 2, 3, 4, 5, 6, 7];

for (let keys of num) {
  console.log(keys);
}
let arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];

arr1[2] = 10;

console.log(arr, arr1);

let array = ["input_name", "user_name"];

function convertToCamelCase(variableName) {
  let words = variableName.split("_");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}

const upperCaseVariables = array.map(convertToCamelCase);
console.log(upperCaseVariables);

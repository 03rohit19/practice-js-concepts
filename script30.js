let s = "aabb";
let t = "ccdd";

const checkIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const sHash = {};
  const tHash = {};
  for (i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    if (!sHash[charS]) sHash[charS] = charT;
    if (!tHash[charT]) tHash[charT] = charS;
    if (sHash[charS] !== charT || tHash[charT] !== charS) return false;
  }
  return true;
};
console.log(checkIsomorphic(s, t));

// power sum

function powerSum(array, power = 1) {
  let array = [1, 2, (3)[(3, 4)]];
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum = sum + powerSum(element, power + 1);
    } else {
      sum = sum + element;
    }
  }
  return Math.pow(sum, power);
}
console.log(powerSum(array));

// sum of array

function sumArrExceptAtIndex(arr) {
  const sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        sum = sum + arr[j];
      }
    }
    sumArray.push(sum);
  }
  return sumArray;
}

const resArray = sumArrExceptAtIndex([1, 2, 3, 4, 5]);
console.log(resArray);

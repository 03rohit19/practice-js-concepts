// DSA array sorting

function sortedArray(array) {
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
}

const a = [1, 3, 5, 2];
console.log(sortedArray(a));

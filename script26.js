// Asynchronous javascript

console.log(1);
setTimeout(console.log, 1000, 3);
console.log(2);

function sum(a, b) {
  console.log("sum", a + b);
  return a + b;
}

let asyncFx = (a, b, cb) =>
  setTimeout(
    () => cb(sum(a, b)),

    3000
  );

let x = asyncFx(4, 5, function (res) {
  console.log(res * res);
});

// // Promise

// let promise = new Promise((resolve, reject) => {
//   //if async task is succesfull
//   resolve(data);
//   // if async task is rejected
//   reject(data);
// });

// promise.then(successfulCallback).catch(errorCallback);

// eXample

// A modified sum function that returns a Promise.
function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 0 && b > 0) {
      resolve(a + b); // Resolve with the sum
    } else {
      reject("input is not correct"); // Reject with an error message
    }
  });
}

// An asynchronous function that uses asyncSum
let asyncFn = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      asyncSum(a, b)
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    }, 3000);
  });

// Call asyncFn and handle the result
asyncFn(2, 3)
  .then((result) => {
    console.log(result); // This will log the sum (5) after 3 seconds.
  })
  .catch((error) => {
    console.error(error); // This will log an error message if inputs are not correct.
  });

Promise.all([asyncFn(1, 2), asyncFn(4, 5)])
  .then((data) => {
    console.log(data); // This will log an array with the sums [3, 9] after all calls have completed.
  })
  .catch((error) => {
    console.error(error); // Handle errors here if any of the asyncFn calls fail.
  });

// async / await

async function test() {
  let data = await asyncFn(6, 7);
  console.log(data);
}

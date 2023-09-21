//async await

// async function always returns a promise
// async and await combo is used to handle promises
// await can only be used inside your async function
// comparision between async await and promise

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved ");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved again ");
  }, 10000);
});

async function handlePromise() {
  console.log("hello world");
  //JS engine waiting for promise to resolve
  let val = await p;
  console.log("hello ram-ram ");
  console.log(val);

  let val2 = await p2;
  console.log("hello ram-ram again");
  console.log(val);
}

// handlePromise();
// function getData() {
// j.s will not wait for promise to resolve
//   p.then(function (res) {
//     console.log(res);
//   });
//   console.log("hello ram-ram");
// }

// getData();

//fetching github user api usng async await

// How fetch works: fetch is basically a promise when it resolved it returns a response whuch is
// a readable stream then conert is it ti json which again a promise on reloved it gives you json value.

const USER_API = "https://api.github.com/users/03rohit19";

async function handleApi() {
  let apiData = await fetch(USER_API);
  let jsonValue = apiData.json();
  console.log(jsonValue);
}

handleApi();

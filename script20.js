// Asynchronous javascript

// Async Code

console.log(1);
console.log(2);
// Async code
setTimeout(() => {
  console.log("Call back function called after 3 seconds");
}, 3000);

console.log(3);
console.log(4);

// Making http request

// Promise

let getSomething = () => {
  new Promise((resolve, reject) => {
    resolve("some data");
    reject("some error");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Asynchronous javascript

// fetch API

fetch("data.json")
  .then((response) => {
    console.log("promise resolved", response);
    return response.json; //returning promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// async and await

let getToDos = async () => {
  try {
    let response = await fetch("data.json");
    //custom error
    if (response !== 200) {
      throw new Error("custom : Error in fetching data");
    }
    let data = await response.json;
    let response2 = await fetch("data2.json");
    console.log(data, response2);
  } catch (error) {
    console.log(error.message);
  }
};

getToDos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

try {
  let x = 5;
  const y = 4;
  y = x;
} catch (error) {
  console.log(error.message);
}

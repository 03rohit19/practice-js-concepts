//fetching github user api usng async await

// How fetch works: fetch is basically a promise when it resolved it returns a response whuch is
// a readable stream then conert is it ti json which again a promise on reloved it gives you json value.

const USER_API = "https://api.github.com/users/03rohit19";

async function handleApi() {
  try {
    let apiData = await fetch(USER_API);
    let jsonValue = await apiData.json();
    console.log(jsonValue);
    console.log(jsonValue.bio, " ", jsonValue.name);
  } catch (err) {
    console.log(err);
  }
}

handleApi();

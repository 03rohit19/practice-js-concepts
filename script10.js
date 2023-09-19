let mainplane = {
  airline: "fly india",
  code: "FI",
  bookings: [],
  book: function (flightcode, name) {
    console.log(
      `${name} Booked flight on ${this.airline} with flight code ${this.code} flightcode ${flightcode}`
    );
    this.bookings.push({
      flight: `${this.airline}`,
      name: name,
      flightNo: `${this.code}${flightcode}`,
    });
  },
};

mainplane.book(555, "john");

// new flight launched

let childplane = {
  airline: "child plane",
  code: "GN",
  bookings: [],
};

let book = mainplane.book;
book.call(childplane, 689, "zack");

let grandchildplane = {
  airline: "grandchild plane",
  code: "HF",
  bookings: [],
};

book.call(grandchildplane, 786, "ram");

console.log(grandchildplane);

//"bind method"

function greet() {
  console.log(`Hello ${this.firstname}${this.lastname}`);
}

let user = {
  firstname: "john",
  lastname: "cena",
};

let greets = greet.bind(user);
greets();

// pass by value or pass by reference

//Pass by reference
let arr = [2, 3, 4, 5];
let getarr = arr;

// any chnges made in getarr will also reflect in arr

// pass by value
let getvalue = [...arr];
getvalue[4] = 9; //chnges made on second array wouldnt reflect on original array
console.log(getvalue);

// For in looop (used in objects)

let car = {
  name: "toyota",
  model: 2002,
  color: "black",
};

for (let key in car) {
  console.log(key);
}

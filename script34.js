// contrutor function

function Bike(make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerator = function () {
    this.speed = this.speed + 50;
    console.log(`${this.make} is running at the speed of ${this.speed} km/hr.`);
  };
  this.break = function () {
    this.speed = this.speed - 20;
    console.log(
      `${this.make} pulls the break now its speed is ${this.speed}km/hr.`
    );
  };
}

const bike1 = new Bike("Bike 1", 120);
const bike2 = new Bike("Bike 2", 140);

bike1.accelerator();
bike1.break();

bike2.accelerator();
bike2.break();

class Person {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  greet() {
    console.log(
      ` Hello my name is ${this.name} my height is ${this.height} cm`
    );
  }
}

const person1 = new Person("Rohit", 160);
person1.greet();

class Car {
  constructor(color, model, company) {
    color = this.color;
    model = this.model;
    company = this.company;
  }
}
const newCar = new Car("Red", 2024, "Toyota");

console.log(newCar.color);

//Prototype
function Cycle(company) {
  this.company = company;
}
Cycle.prototype.run = function () {
  console.log(`${this.company} cycles are of good quality`);
};

const honda = new Cycle("Honda");
honda.run();

// callback funtions

const movies = [{ title: "movie 1" }, { title: "movie 2" }];
function getMovies() {
  setTimeout(() => {
    movies.forEach((movie) => {
      console.log("output :", movie.title);
    }, 2000);
  });
}
function createMovies(movie, cb) {
  setTimeout(() => {
    movies.push(movie);
    cb();
  }, 3000);
}

createMovies({ title: "movie 3" }, getMovies);

function getLastFourElements(...elements) {
  const last4 = elements.slice(-4);
  return last4;
}

const arraua = [1, 2, 3, 4, 5, 6, 7];
const res = getLastFourElements(...arraua);
console.log(res);

let student = {
  Math: {
    score: 75,
  },

  physics: {
    score: 85,
  },
};

const physicsScore = student.physics?.score;
if (physicsScore !== undefined) {
  console.log(`the marks in physics is :${physicsScore}`);
} else {
  console.log("physics marks is not available");
}

let array = ["input_name", "user_name"];

function covertToCamelCase(varible) {
  words = array.split("_");

  for (i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].splice(1);
  }
  words.join("");
}

const upperCaseVariables = array.map(covertToCamelCase);
console.log(upperCaseVariables);

// call , apply and bind

let name = {
  firstname: "rohit",
  lastname: "singh",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + "" + this.lastname + "from" + hometown + "," + state
  );
};

let name2 = {
  firstname: "sachin",
  lastname: "tendulkar",
};

// function borrowing
// Call method
printFullName.call(name2);
printFullName.call(name);
// Apply method
printFullName.apply(name2, ["mumbai", "maharastra"]);

//Bind method
let printMyName = printFullName.bind(name2, "mumbai", "maharastra");
console.log(printMyName);
printMyName();

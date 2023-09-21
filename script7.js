//control flow

// for loops

for (let i = 1; i <= 10; i++) {
  console.log("run the task", i);
}

// access the array values using loops

let dishes = ["poha", "chat", "pani-puri"];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

//"if" ,"else" and "else if" condition
let budget = 5000;

if (budget > 5000) {
  console.log("out of budget");
} else if (budget > 4500) {
  console.log("will do dinner");
} else {
  console.log("all conditions are wrong ");
}

//break

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    console.log("our value is = ", i);
    break;
  }
  console.log("value of i =", i);
}

// logical operators

let password = "querry@";
if (password.length > 4 && password.includes("@")) {
  console.log("password is strong");
} else {
  console.log("weak password");
}
// not operator

let status = false;
if (!status) {
  console.log("your status is true");
}

// ternary operator vs if else condition
let age = 17;
if (age > 18) {
  console.log("quaify");
} else {
  console.log("not applicable");
}

let result = age > 18 ? "qualify" : "not qualified";

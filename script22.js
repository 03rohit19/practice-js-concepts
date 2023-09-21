// looping objects

let Hours = {
  weekend: { open: "10:00AM", close: "11:00PM" },
  weekdays: { open: "12:00AM", close: "5:00PM" },
};
let playingInfo = {
  playerName: "rohit",
  position: "LWF",
  playingStyle: "Attacking",
  teamName: "pahadiFC",
};

let properties = Object.keys(Hours);
console.log(properties);

for (let key of properties) {
  console.log(key);
}

let values = Object.values(Hours);
console.log(values);

for (let key of values) {
  console.log(key);
}

let entries = Object.entries(Hours);
console.log(Hours);

for (let [key, { open, close }] of entries) {
  console.log(`ON ${key} we open at ${open} and close ${close}`);
}

// object literals properties

var name = "abhishek";
var job = "SDE1";
var hobby = "cricket";

var details = {
  name,
  job,
  hobby,
  [keyname]: "rectangle",
};

// console.log(details);
console.log(details.nameOfKey);

// computed keys

let keyname = "nameOfKey";

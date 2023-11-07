// function loop() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// loop();

// for (let i = 1; i < 8; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// function loop3() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function (e) {
//         console.log("hello", x);
//       }, x * 2000);
//     }
//     close(i);
//   }
// }

// loop3();
// a();
// function a() {
//   console.log("a called");
// }

var b = function (p1, p2) {
  console.log(`${p1} is called ${p2} is called`);
};
b("ram", "shyam");

var c = function () {
  return function () {};
};
console.log(c());

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(fn) {
  console.log("x called");
  fn();
}

function y() {
  console.log("y called");
}

x(y);

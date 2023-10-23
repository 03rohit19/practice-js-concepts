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

function loop3() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function (e) {
        console.log("hello", x);
      }, x * 2000);
    }
    close(i);
  }
}

loop3();

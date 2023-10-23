const button = document.getElementById("btn_1");
let isRed = false;

button.addEventListener("click", function () {
  if (isRed) {
    button.style.backgroundColor = "aqua";
  } else {
    button.style.backgroundColor = "red";
  }

  isRed = !isRed;
});

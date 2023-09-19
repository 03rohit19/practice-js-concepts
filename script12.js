// event basics

const ul = document.querySelector("ul");

let button = document.querySelector(".click-me");
button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "something added";
  ul.append(li);
});

// let eventEl = document.querySelector(".click-me");

eventEl.addEventListener("click", function () {
  console.log("clicked");
});

let elements = document.querySelectorAll("li");
elements.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log(e.target);
    // e.target.style.textDecoration = "line-through";
    e.target.remove();
  });
});

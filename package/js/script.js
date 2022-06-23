const popBox = document.querySelector(".popUp");
const wish = document.querySelector(".btn");
const noBtn = document.querySelector(".no");

wish.addEventListener("click", function () {
  popBox.classList.add("show");
});
noBtn.addEventListener("click", function () {
  popBox.classList.remove("show");
});

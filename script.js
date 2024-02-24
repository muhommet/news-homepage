const burgerIcon = document.querySelector("#burger-icon");
const nav = document.querySelector(".burger");
const closeNavButton = document.querySelector("#close-nav");
const overlay = document.querySelector(".overlay");

burgerIcon.addEventListener("click", function () {
  nav.style.display = "block";
  overlay.style.display = "block";
});

closeNavButton.addEventListener("click", function () {
  nav.style.display = "none";
  overlay.style.display = "none";
});

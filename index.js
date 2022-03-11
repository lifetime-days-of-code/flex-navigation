const hamburgerElement = document.querySelector(".hamburger");

const navigationElement = document.querySelector("nav ul");

hamburgerElement.addEventListener("click", () => {
  navigationElement.classList.toggle("open");
});

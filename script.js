const menuButton = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Toggles hamburger button, makes its container sticky, and scrolls the window to the top. 

const hamburger = document.querySelector(".hamB");
const navLinks = document.querySelector(".navLinks");
const head = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    head.classList.toggle("stick");
    window.scrollTo(0, 0);
});
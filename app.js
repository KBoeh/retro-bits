// Toggles hamburger button, disables scrolling, and scrolls to the top. 

const hamburger = document.querySelector(".hamB");
const navLinks = document.querySelector(".navLinks");
const html = document.querySelector("html");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    html.classList.toggle("-is-locked");
    window.scrollTo(0, 0);
});

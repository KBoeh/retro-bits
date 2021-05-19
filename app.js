const hamburger = document.querySelector("#hamB");

// Toggles hamburger button & makes its container sticky.
hamburger.addEventListener('click', () => {
    const nav = document.querySelector("#navLinks");
    const head = document.querySelector("#header");

    if (nav.style.display === "") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "";
    }

    if (head.style.position === "sticky") {
        head.style.position = "static";
    } else {
        head.style.position = "sticky";
    }
});
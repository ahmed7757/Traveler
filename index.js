const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

let span = document.querySelector(".up");

window.addEventListener("scroll", function() {
    span.classList.toggle("show", window.scrollY > 1000)
});

span.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
}

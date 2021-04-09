const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(i => i.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}
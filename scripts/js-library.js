const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", OpenMobileMenu);
navLink.forEach(n => n.addEventListener("click", CloseMobileMenu));

function OpenMobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function CloseMobileMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
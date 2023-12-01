const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
let lang = "en"

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

function changeLink() {
    var theLink = document.querySelector('.resume_link');
    var theObject = document.querySelector('.resume_object');
    if (lang == 'fr') {
        document.querySelector('.resume_changer').innerHTML = "French";
        lang = "en"
        theLink.href = "cv_en_2024.pdf";
        theObject.data = "cv_en_2024.pdf"
    } else {
        document.querySelector('.resume_changer').innerHTML = "English";
        lang = "fr"
        theLink.href = "cv_fr_2024.pdf";
        theObject.data = "cv_fr_2024.pdf"
    }
  } 
  
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dark_mode = document.getElementById("dark_mode");
const body = document.getElementById("body");
const contactContainer = document.querySelector(".nem_container");
const logo = document.getElementById("logo");
const li = document.querySelectorAll(".nav-item");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click'), function(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})

dark_mode.addEventListener('click', function(){
    body.classList.toggle("dark-theme");
    contactContainer.classList.toggle("dark-theme2")
    logo.style.borderBottomColor = "white";
    li.classList.toggle("dark-theme2");
})
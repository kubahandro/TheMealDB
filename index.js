let menu = document.querySelector(".menu-burger");
let header = document.querySelector(".header");
let navRight = document.querySelector(".nav-right");

menu.onclick = function() {
    if (header.style.height == "300px") {
        header.style.height = "91px";
    } else {
        header.style.height = "300px";
    }
}
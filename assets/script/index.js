'use strict';

const cookie = document.querySelector(".cookie")
const overlay = document.querySelector(".overlay")
const btn = document.querySelectorAll(".btn")

window.addEventListener("load", () => {
    cookie.classList.add("popup")
    overlay.style.display = "block"
});

overlay.addEventListener("click", () => {
    cookie.classList.remove("popup")
    overlay.style.display = "none"
});

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        cookie.classList.remove("popup")
        overlay.style.display = "none"
    })
}
const Hamburger = document.querySelector(".Hamburger");
const CloseHam = document.querySelector(".close-ham");
const NavUl = document.querySelector(".navul");



Hamburger.addEventListener("click", function(){
    NavUl.style.width = "100vw";
})

CloseHam.addEventListener("click", function(){
    NavUl.style.width = "0";
})
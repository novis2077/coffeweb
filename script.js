const mobileBack = document.querySelector(".mobile-nav-back")
const hamburger = document.querySelector(".hamburger-menu")
const mobileIcon = document.querySelector(".mobile-hamburger")
const mobilecross = document.querySelector(".mobile-cross")
const nav = document.querySelector("nav")
const menuNav = document.querySelector("ul")
const navItems =document.querySelectorAll(".menu-nav__item")

hamburger.addEventListener("click",responsiveFunction)
let showMenu = false

function responsiveFunction(){
    if(!showMenu){
        mobileBack.classList.add("open")
        mobileIcon.classList.add("open")
        mobilecross.classList.add("open")
        nav.classList.add("open")
        menuNav.classList.add("open")
        navItems.forEach(function(item){item.classList.add("open")})
    
   
        showMenu =true;
    }else{
        mobileBack.classList.remove("open")
        mobileIcon.classList.remove("open")
        mobilecross.classList.remove("open")
        nav.classList.remove("open")
        menuNav.classList.remove("open")
        navItems.forEach(function(item){item.classList.remove("open")})
        
        showMenu = false;
    }
}
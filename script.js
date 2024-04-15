window.onload = () => {
   setTimeout(() => {
     document.querySelector("body").classList.add("display");
   }, 4000);
 };
 
 document.querySelector(".hamburger__menu").addEventListener("click", () => {
   document.querySelector(".container").classList.toggle("change");
 });
 
 document.querySelector(".scroll__btn").addEventListener("click", () => {
   document.querySelector("html").style.scrollBehavior = "smooth";
   setTimeout(() => {
     document.querySelector("html").style.scrollBehavior = "unset";
   }, 1000);
 });
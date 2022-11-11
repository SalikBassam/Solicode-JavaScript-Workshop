let btn = document.getElementById("btn");
let nav = document.getElementById("nav");
let btn2 = document.getElementById("btn2");


btn.onclick = function(){
    nav.style.top="0%";
}
btn2.onclick = function(){
    nav.style.top="-100%";
}

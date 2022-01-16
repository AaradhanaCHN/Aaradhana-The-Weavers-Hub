function cat1(){
    localStorage.setItem("category", "1");
    window.location="category.html"
}
function cat2(){
    localStorage.setItem("category", "2");
    window.location="category.html"
}
function cat3(){
    localStorage.setItem("category", "3");
    window.location="category.html"
}
function cat4(){
    localStorage.setItem("category", "4");
    window.location="category.html"
}
function cat5(){
    localStorage.setItem("category", "5");
    window.location="category.html"
}
function cat6(){
    localStorage.setItem("category", "6");
    window.location="category.html"
}
function cat7(){
    localStorage.setItem("category", "7");
    window.location="category.html"
}
function cat8(){
    localStorage.setItem("category", "8");
    window.location="category.html"
}
function cat9(){
    localStorage.setItem("category", "9");
    window.location="category.html"
}
function cat10(){
    localStorage.setItem("category", "10");
    window.location="category.html"
}
function indexBoot(){
    var myInterval = setInterval(function() {
        if (window.screen.width < 350){
            document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr";
        } else if (window.screen.width < 1050){
            document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr 1fr";
        } else {
            document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        }
        if(window.screen.width < window.screen.height){
            document.getElementById("footer").style.position = "absolute";
            document.getElementById("body").style.fontSize = "26px";
            document.getElementById("business-email-btn").style.fontSize = "28px";
        } else{
            document.getElementById("footer").style.position = "static";
            document.getElementById("body").style.fontSize = "14px";
            document.getElementById("business-email-btn").style.fontSize = "16px";
        }
    }, 1);
}
function catBoot(){
    document.getElementById("cat").innerHTML=localStorage.getItem("category");
}
/* Copyright 2022 © Aaradhana Chennai Private Limited. All rights reserved. */
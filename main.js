gapi.load('auth2', function() {
    gapi.auth2.init();
});
function cat1() {
    localStorage.setItem("category", "1");
    window.location="category.html"
}
function cat2() {
    localStorage.setItem("category", "2");
    window.location="category.html"
}
function cat3() {
    localStorage.setItem("category", "3");
    window.location="category.html"
}
function cat4() {
    localStorage.setItem("category", "4");
    window.location="category.html"
}
function cat5() {
    localStorage.setItem("category", "5");
    window.location="category.html"
}
function cat6() {
    localStorage.setItem("category", "6");
    window.location="category.html"
}
function cat7() {
    localStorage.setItem("category", "7");
    window.location="category.html"
}
function cat8() {
    localStorage.setItem("category", "8");
    window.location="category.html"
}
function cat9() {
    localStorage.setItem("category", "9");
    window.location="category.html"
}
function cat10() {
    localStorage.setItem("category", "10");
    window.location="category.html"
}
function bootTrig() {
    boot();
}
function catBootTrig() {
    boot();
    document.getElementById("cat-type").innerHTML=localStorage.getItem("category");
}
function boot() {
    var page = window.location.pathname.split("/").pop();
    var int1 = setInterval(function() {
        if (window.screen.width < 350) {
            document.getElementById("body").style.fontSize = "26px";
            document.getElementById("h3-txt").style.fontSize = "31px";
            document.getElementById("business-email-btn").style.fontSize = "28px";
            if(page == ""){
                document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr";
            }
        } else if (window.screen.width < 1050) {
            document.getElementById("body").style.fontSize = "20px";
            document.getElementById("h3-txt").style.fontSize = "25px";
            document.getElementById("business-email-btn").style.fontSize = "22px";
            if(page == ""){
                document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr 1fr";
            }
        } else {
            document.getElementById("body").style.fontSize = "14px";
            document.getElementById("h3-txt").style.fontSize = "19px";
            document.getElementById("business-email-btn").style.fontSize = "16px";
            if(page == ""){
                document.getElementById("grid-container").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
            }
        }
        if (window.screen.width*1.55 < window.screen.height) {
            document.getElementById("footer").style.position = "absolute";
        } else {
            document.getElementById("footer").style.position = "static";
        }
    }, 1);
}
/* Copyright 2022 © Aaradhana Chennai Private Limited. All rights reserved. */
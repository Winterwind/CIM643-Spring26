"use strict";

let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");
redClickBox.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "blueviolet";
    redClickBox.style.backgroundColor = "orange";
});

redClickBox.addEventListener("mouseover", function(){
    redClickBox.style.backgroundColor = "blue";
});

let showButton = document.getElementById("show");
let showHideBox = document.getElementById("showHideBox");
showButton.addEventListener("click", function(){
    showHideBox.style.visibility = "visible";
});

let hideButton = document.getElementById("hide");
hideButton.addEventListener("click", function(){
    showHideBox.style.visibility = "hidden";
});

let toggle = false;
let toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", function(){
    if(toggle){
        showHideBox.style.visibility = "hidden";
    } else {
        showHideBox.style.visibility = "visible";
    }
    toggle = !toggle;
});
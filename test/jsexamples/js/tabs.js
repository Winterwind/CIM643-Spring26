"use strict";

let tabContent = document.querySelectorAll(".tabcontent");
tabContent.forEach(tab => {
    tab.style.display = "none";
});

let tablinks = document.querySelectorAll(".tablinks");
tablinks.forEach(button => {
    button.addEventListener('click', function() {
        // console.log(button.innerHTML);
        tabContent.forEach(tab => {
            tab.style.display = "none";
        });
        let currentButton = button.innerHTML;
        document.getElementById(currentButton).style.display = "block";
    });
});
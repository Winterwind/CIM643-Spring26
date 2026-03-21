"use strict";

/* makes the list elements in the nav change color when the user hovers over them*/
let hoverLinks = document.querySelectorAll(".hover");
hoverLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
        link.style.backgroundColor = "blueviolet";
    })
    link.addEventListener("mouseout", function() {
        link.style.backgroundColor = "lavender";
    })
});

/* lets the user click on the images to expand or shrink them */
let images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", function() {
        if (image.classList.contains("zoomed")) {
            image.classList.remove("zoomed");
        } else {
            image.classList.toggle("zoomed")
        }
    })
});

/* makes the character section collapsible */
let last_section = document.getElementById("chars");
last_section.addEventListener("click", function() {
    const char_heading = last_section.querySelector("h2");
    const char_list = last_section.querySelector("ul");

    if (char_heading.innerHTML.includes("▼")) {
        char_heading.innerHTML = "Characters ▲";
        char_list.style.display = "none";
    } else {
        char_heading.innerHTML = "Characters ▼";
        char_list.style.display = "grid";
    }
});
"use strict";

/* makes the list elements in the nav change color when the user hovers over them*/
let hoverLinks = document.querySelectorAll(".hover");
hoverLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
        link.style.backgroundColor = "#ff20ad";
    })
    link.addEventListener("mouseout", function() {
        link.style.backgroundColor = "#ffffbb";
    })
});

/* puts a grey frame on the album covers when the user hovers over them */
let album_covers = document.querySelectorAll(".album_cover");
album_covers.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.border = "5px solid grey";
    })
    image.addEventListener("mouseout", function() {
        image.style.border = "none";
    })
});

/* makes the sections collapsible */
let sections = document.querySelectorAll("section");
sections.forEach(section => {
    const header = section.querySelector("h3")
    header.addEventListener("click", function() {
        const stuff = section.querySelectorAll("p, ul");
        /* Claude helped me with the following loop */
        stuff.forEach(thing => {
            thing.style.display = thing.style.display === "none" ? "" : "none";
        });
    })
});
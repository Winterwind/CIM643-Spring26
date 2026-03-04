"use strict";

let galleryClass = document.querySelectorAll(".imageGallery");
console.log(galleryClass);
console.log(galleryClass.length);

// galleryClass[0].style.display = "none";
// galleryClass[1].style.display = "none";
// galleryClass[2].style.display = "none";

for(let i = 0; i<10; i++) {
    console.log(i)
}

for (let i = 0; i<galleryClass.length; i++) {
    galleryClass[i].style.display = "none";
}

let currentImage = 0;
galleryClass[currentImage].style.display = "block";

let nextButton = document.getElementById('next');

nextButton.addEventListener('click', function() {
    // hide the current image
    galleryClass[currentImage].style.display = "none";
    // increment the Image to point to the next image
    currentImage++;
    // if we are at the end of the gallery, go back to the beginning
    if (currentImage >= galleryClass.length) {
        currentImage = 0;
    }
    // show the next image
    galleryClass[currentImage].style.display = "block";
});

let prevButton = document.getElementById('previous');

prevButton.addEventListener('click', function() {
    galleryClass[currentImage].style.display = "none";
    currentImage--;
    if (currentImage == -1) {
        currentImage = galleryClass.length - 1;
    }
    galleryClass[currentImage].style.display = "block";
});

let startButton = document.getElementById('start');
let autoCycleActive = false;
let cycleInterval;

startButton.addEventListener('click', function() {
    if (!autoCycleActive) {
        autoCycleActive = true;
        cycleInterval = setInterval(function() {
            console.log("interval started")
        }, 3000);
    }
});
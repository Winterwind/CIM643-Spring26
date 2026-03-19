"use strict";

let layout = [
    {
        width: "100px",
        height: "100px",
        color: "blue",
        h1: "hello",
        paragraph: "this is random text"
    }
];

let output = document.getElementById("output");

layout.forEach(element => {
    let newDiv = document.createElement("div");
    newDiv.style.width = element.width;
    newDiv.style.height = element.height;
    newDiv.style.backgroundColor = element.color;
    output.append(newDiv);
});
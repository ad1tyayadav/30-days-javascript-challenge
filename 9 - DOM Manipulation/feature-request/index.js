// Text Content Manipulation Script
const text = document.getElementById("text");

text.innerText = "Yo Baby! I'm changed by DOM Manipulation"


// Element Creation Script
let body = document.querySelector("body");

let div = document.createElement('div');
div.innerText = "Hello Baby! This div is created by DOM maniplution";

body.append(div);


// Element Removal Script
let p = document.querySelector("p");

p.remove();


// Attributes Modification Script
let img = document.querySelector("img");

img.setAttribute("src", "https://images.unsplash.com/photo-1630568001199-984008a7d6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D");


// Event Handling Script
let para = document.querySelector(".para");
let changePara = function () {
    para.innerHTML = "<h3>I'm changed by button clicked<h3/>"
};


let box = document.querySelector(".box");
box.addEventListener("mouseover", ()=>{
    box.style.border = "8px solid blue"
})

box.addEventListener("mouseleave", ()=>{
    box.style.border = "8px solid black"
})
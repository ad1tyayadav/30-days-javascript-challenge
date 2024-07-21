// Activity 1 - Selecting and Manipulating Elements
// Task 1 - Select elemeny by id and change text content
const text = document.getElementById("text");
text.innerText = "Yo Baby! I'm changed by DOM Manipulation"


// Task 2 - Select elemeny by class and change background color
const background = document.querySelector(".background");
background.style.backgroundColor = "lightgreen";


// Activity 2 - Creating and Appending Elements
// Task 3 - Create a div with some text and append in body
let body = document.querySelector("body");

let div = document.createElement('div');
div.innerText = "Hello Baby! This div is created by DOM maniplution";

body.append(div);


// Task 4 - Create a new li item and add it in existing ul
let ul = document.querySelector("ul");

let newLi = document.createElement("li");
newLi.innerText = "I am new li item created by DOM manipulation";

ul.append(newLi);


// Activity 3 - Removing Elements
// Task 5 - Remove a HTML element from body
let p = document.querySelector("p");
p.remove();


// Task 6 - Remove the last child of specific HTML
let parentEle = document.querySelector(".parentElement");
parentEle.lastElementChild.remove();


// Activity 4 - Modifying Attributes and Classes
// Task 7 - Change attribute of element
let img = document.querySelector("img");

img.setAttribute("src", "https://images.unsplash.com/photo-1630568001199-984008a7d6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D");


// Task 8 - Add and Remove a Class
let image = document.querySelector("img");

image.classList.add("image") /*Add class name */

image.classList.remove("image") /*Remove class name */


// Activity 5 - Event Handling
// Task 9 - Add a click  event listner that change para text
let para = document.querySelector(".para");
let changePara = function () {
    para.innerHTML = "<h3>I'm changed by button clicked<h3/>"
};


// Task 10 - Add a mouseover Event thats change its border color
let box = document.querySelector(".box");

box.addEventListener("mouseover", ()=>{
    box.style.border = "8px solid blue"
})

box.addEventListener("mouseleave", ()=>{
    box.style.border = "8px solid black"
})
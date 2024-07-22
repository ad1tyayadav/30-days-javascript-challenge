// Activity 1 - Basic Event Handling
// Task 1 - Change text by click button
let btn = document.querySelector("#btn");
let text = document.querySelector("#ava");

btn.addEventListener("click", function () {
    if (text.innerText === "Hey I'm Ava Addam") {
        text.innerText = "Hey I'm Dani Daniels"
    } else if (text.innerText === "Hey I'm Dani Daniels") {
        text.innerText = "Namste main aapki Poonam Pandey"
    } else {
        text.innerText = "Hey I'm Ava Addam"
    }
});


// Task 2  - Change Image visibility by double click
let img = document.querySelector("#avaimage");

img.addEventListener("dblclick", function () {
    if (img.style.opacity == 0) {
        img.style.opacity = 1;
    } else if (img.style.opacity == 1) {
        img.style.opacity = 0;
    };
});


// Activity 2 - Mouse Event
// Task 3 - Add mouseover event to change bg color
let box = document.querySelector("#box");

box.addEventListener("mouseover", function () {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});


// Task 4 - Add mouseout event to reset bg color
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = `white`;
});


// Activity 3 - Keyboard Event
// Task 5 - When press keydown log key pressed
let keyDown = document.querySelector("#KeyDown");

keyDown.addEventListener("keydown", () => {
    console.log("Key Pressed");
});


// Task 6 - Display the key 
let keyUp = document.querySelector("#KeyUp");

keyUp.addEventListener("keyup", (e) => {
    let span = document.querySelector("span");
    span.innerHTML = `<span>user clicked <b>${e.key}</b> key</span>`;
});


// Activity 4 - Form Events
// Task 7 - Add a submit event and log the details
let submitBtn = document.querySelector("form");

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name")
    let pass = document.querySelector("#password")
    console.log(`name = ${name.value}`);
    console.log(`paasword = ${pass.value}`);
});


// Task 8 - Display value by chosing value
let flavours = document.querySelector("#flavours");
let result = document.querySelector("#change")

flavours.addEventListener("change", (e) => {
    result.textContent = `You Like ${e.target.value} Flavour`
})


// Activity 5 - Event Delegation
// Task 9 - Log the li item when its click using Event Delegation
let parents = document.querySelector("#cuties");

parents.addEventListener("click", (e) => {
    if (e.target && e.target.matches("li.model")) {
        console.log(e.target.textContent);
    };
});


// Task 10 - Add an event listener for dynamically values
let star = document.querySelector(".star");

star.addEventListener("click", (e) => {
    if (e.target && e.target.matches("li")) {
        console.log(e.target.textContent);
    };
});

let addModel = document.querySelector(".addModel");

addModel.addEventListener("click", (e) => {
    e.preventDefault()
    let takeModel = document.querySelector(".takeModel")
    let newModel = document.createElement("li")
    newModel.textContent = takeModel.value;
    star.append(newModel);
});
// Click Event Script
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


// Mouse Event Script
let box = document.querySelector("#box");

box.addEventListener("mouseover", function () {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});


box.addEventListener("mouseout", function () {
    box.style.backgroundColor = `white`;
});


// Form Event Script
let submitBtn = document.querySelector("form");

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name")
    let pass = document.querySelector("#password")
    console.log(`name = ${name.value}`);
    console.log(`paasword = ${pass.value}`);
});


let flavours = document.querySelector("#flavours");
let result = document.querySelector("#change")

flavours.addEventListener("change", (e) => {
    result.textContent = `You Like ${e.target.value} Flavour`
});


// Event Delegation Script
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
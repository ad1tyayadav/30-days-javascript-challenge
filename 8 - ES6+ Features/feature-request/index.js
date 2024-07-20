// Template Literals Script
const fullName = "Mahi";
const age = "44";

console.log(`Player name is ${fullName} and age is ${age}`);


const intro = "This is Indian cricket team"
const team = "India"
const captain = "MS Dhoni"
const winYear = 2024

console.log(`${intro} and the captain is ${captain} and ${team} win world cup in ${winYear} year`);


// Destructing Script
const numArr = [1, 2, 3, 4, 5, 6, 7];
console.log("Number array = " + numArr);
console.log(`first element = ${numArr[0]} && Second element = ${numArr[1]}`);


const book = {
    title: "Mahi",
    author: "Gauti Paaji",
    year: "2069"
};

console.log("Book object = " + book);
console.log(` Book title = ${book.title} && Book author = ${book.author}`);


// Spread & Rest Operators Script
const cuties = ["Ava Addam", "Dani Daniel"];
const allCuties = [...cuties, "Poonam Pandey", "Anjali Arora"];

console.log(allCuties);


const getSum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(getSum(10, 20));
console.log(getSum(10));
console.log(getSum(1, 33, 42, 64));


// Default Parameters Script
const getProduct = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log(getProduct(3, 4));
console.log(getProduct(69));


// Enhanced Object Literals Script
const actressName = "Ava Addam";
const myAge = 34;
const propAge = 'actressAge';

const starDets = {
    actressName,
    [propAge]: myAge,

    greet() {
        console.log(`Hello I'm ${this.actressName} and my age is ${this[propAge]}`)
    }
}

console.log(starDets);
console.log(starDets.greet());


const propName = 'firstName';
const propWork = 'workAs';
const bornYear = 'bornIn';

const Dani = {
    [propName]: 'Dani Dnaiel',
    [propWork]: 'Model',
    [bornYear]: 2069
};

console.log(Dani);
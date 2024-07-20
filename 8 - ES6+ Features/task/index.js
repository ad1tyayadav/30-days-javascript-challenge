// Activity 1 - Template Literals
// Task 1 - Use template literals to log result
const fullName = "Mahi";
const age = "44";

console.log(`Player name is ${fullName} and age is ${age}`);


// Task 2 - Multi line string
const intro = "This is Indian cricket team"
const team = "India"
const captain = "MS Dhoni"
const winYear = 2024

console.log(`${intro} and the captain is ${captain} and ${team} win world cup in ${winYear} year`);


// Activity 2 - Destructing
// Task 3 - Extract values from an array. 
const numArr = [1, 2, 3, 4, 5, 6, 7];
console.log("Number array = " + numArr);
console.log(`first element = ${numArr[0]} && Second element = ${numArr[1]}`);


// Task 4 - Extract values from an object.
const book = {
    title: "Mahi",
    author: "Gauti Paaji",
    year: "2069"
};

console.log("Book object = " + book);
console.log(` Book title = ${book.title} && Book author = ${book.author}`);


// Activity 3 - Spread and Rest Operators
// Task 5 - Use spread to crate an new array which is includes existing array
const cuties = ["Ava Addam", "Dani Daniel"];
const allCuties = [...cuties, "Poonam Pandey", "Anjali Arora"];

console.log(allCuties);


// Task 6 - Use Rest operators in function that return sum of numbers
const getSum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(getSum(10, 20));
console.log(getSum(10));
console.log(getSum(1, 33, 42, 64));


// Activity 4 - Default Parameters
// Task 7 - Create a function that toolk two parameters and return their product set one parameter having a default value 1
const getProduct = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log(getProduct(3, 4));
console.log(getProduct(69));


// Activity 5 - Enhanced Object Literals
// Task 8 - Use enhanced object literals to create an object with methods and properties, then log it to the console
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


// Task 9 - Create an object with computed properties names based on variable
const propName = 'firstName';
const propWork = 'workAs';
const bornYear = 'bornIn';

const Dani = {
    [propName]: 'Dani Dnaiel',
    [propWork]: 'Model',
    [bornYear]: 2069
};

console.log(Dani);
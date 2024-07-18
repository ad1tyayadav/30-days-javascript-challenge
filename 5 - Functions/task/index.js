// Activity 1 - function declaration
// Task 1 - check even odd
let num = Math.floor(Math.random() * 100 + 1)
const checkEvenOdd = () => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd number`);
    };
};
checkEvenOdd(num);


// Task 2 - calculate squre
let randNum = Math.floor(Math.random() * 100 + 1);
function squareCal() {
    if (randNum) {
        let squre = randNum * randNum;
        console.log(`Square of ${randNum} = ${squre}`)

    } else {
        console.log(`please give a vald number`);
    }
}
squareCal(randNum);


// Activity 2 -Function expression
// Task 3 - check maximum
let avaSize = 36
let daniSize = 34

const checkBigger = function checkBigger(size, size1) {
    if (size1 > size) {
        console.log(`size ${size1} is bigger than ${size}`);
    } else if (size === size1) {
        console.log(`both have equal sizes ${size}`);
    } else {
        console.log(`size ${size} is bigger than size ${size1}`);
    };
}

checkBigger(avaSize, daniSize);


// Task 4 - concatenet string
let ava = `Hey I'm Ava and I'm too hot!`
let dani = `Hey I Dani and I'm also hott!`

const concatStr = function concatStr(str, str1) {
    if (str && str1) {
        let finalStr = str + " " + str1;
        console.log(finalStr);
    } else {
        console.log(`Please give two string`);
    };
};

concatStr(ava, dani);


// Activity 3 - Arrow FUnctions
// Task 5 - add two num
const getSum = (num, num1) => {
    let sum = num + num1;
    console.log(`The sum of ${num} and ${num1} is ${sum}`);
};

getSum(5, 4)


// Task 6 - check special char
const checkChar = (string) => {
    let special = /[!@#$%^&*(),.?":{}|<>]/
    const check = special.test(string);
    if (check) {
        console.log(`string "${string}" have a special char`);
    } else {
        console.log(`string "${string}" no contains any special char`);
    }
};

checkChar('Djihdfefghfg');
checkChar('Djihdfefghfg@#');


// Activity 4 - Functions Parameters and Default Values
// Task 7 - Products of two num
const multiplication = (num, num2 = 3) => {
    let product = num * num2;
    console.log(`The product of ${num} and ${num2} = ${product}`)
};
multiplication(3, 4)
multiplication(3)


// Task 8 - Greeting Message
const greeting = (name, age = 18) => {
    console.log(`Naam ${name} aur Umar ${age} varsh ho gyi hai fir bhi maa baap ke paise pe pal rha hai nalla!`);
};
greeting("Viv", 78);


// Activity 5 - High order function
// Task 9 - call a function n times

const callFunc = (func, n) => {
    for (let i = 0; i < n; i++) {
        func();
    };
};

const sampleFunc = () => {
    console.log("Kya bhidu kaisa hai?");
};

callFunc(sampleFunc, 3);


// Task 10 -  Take two function and one value
const highOrderFunc = (func, func1, v) => {
    const first = func(v);
    return func1(first);
};

let sample1 = (v) => {
    return v * v;
};

let sample2 = (first) => {
    return first + 3;
};

console.log(highOrderFunc(sample1, sample2, 3));
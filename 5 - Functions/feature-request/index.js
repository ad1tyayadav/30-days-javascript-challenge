// Even or Odd Function Script
let num = Math.floor(Math.random() * 100 + 1)
const checkEvenOdd = () => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd number`);
    };
};
checkEvenOdd(num);


// Square Calculation Function Script
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


// Concatenation Function Script
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


// Sum Calculation Arrow Function Script
const getSum = (num, num1) => {
    let sum = num + num1;
    console.log(`The sum of ${num} and ${num1} is ${sum}`);
};

getSum(5, 4)


// High-Order Function Script
// Sample 1
const callFunc = (func, n) => {
    for (let i = 0; i < n; i++) {
        func();
    };
};

const sampleFunc = ()=>{
    console.log("Kya bhidu kaisa hai?");
};

callFunc(sampleFunc, 3);


// Sample 2
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
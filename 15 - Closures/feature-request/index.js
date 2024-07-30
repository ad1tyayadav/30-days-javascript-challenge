// Basic Closures Script
const funcA = () => {
    const num = 5;
    const funcB = () => {
        console.log(num);
    }

    return funcB;
};

const result = () => {
    return funcA();
};

const funcB = result();
funcB();


// Counter Clouser Script
const counterFunc = () => {
    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount }

}

const counter = counterFunc();
counter.increment();
console.log(counter.getCount());

// Unique ID Generator Script
const createUniqueId = () => {
    let initialId = 0;

    const idGen = () => {
        const newID = initialId++;
        return newID;
    }

    return idGen;

}

const getId = createUniqueId();
console.log("New ID = ", getId());
console.log("New ID = ", getId());
console.log("New ID = ", getId());


// Loop Closure Script
const funcArr = [];

for (let i = 0; i < 5; i++) {
    funcArr.push(() => {
        console.log(i);
    })
};

funcArr[0]();
funcArr[1]();
funcArr[2]();
funcArr[3]();
funcArr[4]();


// Memoization Script
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
};


const factorial = (num) => {
    if (num < 1) return 1;
    return num * factorial(num - 1);
};


const memoizeFactorial = memoize(factorial);
console.log(memoizeFactorial(5));
console.log(memoizeFactorial(5));
console.log(memoizeFactorial(6));

// Activity 1 - Understanding Closures
// Task 1 - Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. 
const funcA = () => {
    const num = 5;
    const funcB = () => {
        console.log(num);
    }

    return funcB;
};

const result = funcA();
console.log(result());


// Task 2 - Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
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


// Activity 2: Practical Closures
// Task 3 - Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
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


// Task 4 - Create a closure that captures a user's name and returns a function that greets the user by name
const greet = (user) => {
    let username = user;

    function message() {
        return `Hello ${username} your welcome!`
    }
    return message;
};

const greetMessage = greet(`Aditya`)
console.log(greetMessage());


// Activity 3 - Closures in Loops
// Task 5 - Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
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


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = () => {
    let items = [];

    return {
        addItems: (item) => {
            items.push(item);
            console.log(`item added item name = ${item}`);
        },

        removeItem: (item) => {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1)
                console.log('items remove', item);
            } else {
                console.log(`item not found ${item}`);
            }
        },
        listItem: () => {
            console.log(`Items = ${items}`);
        }
    }
}

const myItem = itemManager();
myItem.addItems('Pen');
myItem.addItems(' Asus Laptop');
myItem.addItems('Book');
myItem.removeItem('Book');
myItem.listItem();

// Activity 5 - Memoization
// Task 8 - Create a memoized version of a function that calculates the factorial of a number.
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

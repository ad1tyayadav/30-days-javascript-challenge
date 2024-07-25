// Activity 1 - Basic Error Handling with Try-Catch
// Task 1 - Write a function that intentionaly throw error and use a try-catch
function initError() {
    try {
        throw new Error('Intentional Error');
    } catch (error) {
        console.log(`Error aa gya bhai: ${error}`);
    }
}

initError();


// Task 2 - Create a function that divides two number and throws error when denominator is Zero
const divNum = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("denominator is Zero")
        } else {
            const div = num1 % num2
            console.log(div);
        }
    } catch (error) {
        console.log(`denominator Zero aagya bhai ${error}`);
    }
}

divNum(17, 3);
divNum(7, 0);
divNum(9, 3);


// Activity 2 - Finally Block
// Task 3 - Write a script that includes a try-catch block and a finally block. Log message in the try catch and finally block to observe the execution flow
const finallyBlock = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("denominator is Zero")
        } else {
            const division = num1 / num2
            console.log(`Division result: ${division}`);
        }
    } catch (error) {
        console.log(`denominator Zero aagya bhai ${error}`);
    }
    finally {
        console.log("Entering finally block");
        console.log(`Sum of numbers: ${num1 + num2}`);
    }
}

finallyBlock(5, 2);
finallyBlock(9, 0);


// Activity 3 - Custom Error Object
// Task 4 - Create a custom error class that extends the built-in Error class.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
};

const numCheck = (num) => {
    try {
        if (num < 0) {
            throw new CustomError(`${num} ek nakaratmak number hai jo ki hum swikar nhi kar sakte hai`);
        } else {
            console.log(`${num} ke sakaratmak number hai yeh swikar kiya gya`);
        }
    } catch (error) {
        console.log(`${error.name} = ${error.message}`);
    }
}

numCheck(-4);
numCheck(8);


// Task 5 - Check string is empty if yes then throw a CustomErro use try-catch
const strCheck = (str) => {
    try {
        if (str == "") {
            throw new CustomError(`Kya bhidu khali string kahe ko deta hai?`);
        } else {
            console.log("String =" + " " + str);
        }
    } catch (error) {
        console.log(`${error.name} = ${error.message}`);
    }
};

strCheck("");
strCheck("Eat 5 star and do nothing");


// Activity 4 - Error Handling in Promise
// Task 6 - Create a promise that randomly resolve and reject Use .catch() to handle the rejection
const useCatch = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (num > 5) {
            resolve(`Number ${num} is bigger than five`)
        } else {
            reject(`Number ${num} is less than five thats why Promise Rejcted`);
        }
    }, 1000)
});

useCatch
    .then((message) => console.log(message))
    .catch((error) => console.log(error));


// Task 7 - Use try-catch within an async function to handle error
const pro = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (num > 5) {
            resolve(`Number ${num} is bigger than five`)
        } else {
            reject(`Number ${num} is less than five thats why Promise Rejcted`);
        }
    }, 1000)
});

async function asyncAwait() {
    try {
        let data = await pro;
        console.log(data);
    } catch (error) {
        console.log(`Error aa gya bhai ${error}`);
    }
};

asyncAwait();


// Activity 5 - Graceful Error Handling in Fetch
// Task 8 - Fetch data from invalid url and handle error using .catch()
const fetchCatch = new Promise((resolve, reject) => {
    let API = "https://InvalidUrl.com";
    fetch(API)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Invalid API");
            }
        })
        .then(data => resolve("Data Fetched"))
        .catch(error => reject(error))

});

fetchCatch
    .then((message) => console.log(message))
    .catch((error) => console.log(`Error Aa gya bhidu ${error}`));



// Task 9 - Fetch data from invalid url and handle error using async await with try-catch
const fetchAsync = async function () {
    try {
        let API = "https://InvalidUrl.com"
        let response = await fetch(API);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(`Error Aa gaya baba! ${err.message}`);
    }
}

fetchAsync();
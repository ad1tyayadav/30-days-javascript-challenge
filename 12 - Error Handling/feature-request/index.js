// Basic Error Handling Script
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


// Custom Error Script
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


// Promise Error Handling Script
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


// Fetch Error Handling Script
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
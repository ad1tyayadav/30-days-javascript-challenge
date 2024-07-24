// Promise Creation Script
const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Resolve");
        resolve();
    }, 2000);
});


const rejectPromosie = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Reject");
        reject("Somthing went wrong");
    }, 2000)
}).catch(err => {
    console.log(err);
});


// Promise Chaining Script
const chaining = function getData(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched ${data}`);
            resolve(data);
        }, time)
    });
};

chaining('Data1', 1000)
    .then((data1) => {
        console.log(`Fetched${data1}`)
        return chaining('Data1', 2000);
    })
    .then((data2) => {
        console.log(`Fetched ${data2}`);
        return chaining('Data 3', 1500)
    })
    .then((data3) => {
        console.log(`Proccessing ${data3}`);
        console.log("All data fetched");
    })
    .catch((err) => {
        console.log(err);
    });


// Async/Await Script
const demoFunc = function (data) {

    return new Promise((resolvePromise, rejectPromosie) => {
        setTimeout(() => {
            resolvePromise(data)
        }, 5000)
    })
}

const asyDemo = async function () {
    const data = await demoFunc("Async function solve it");
    console.log(data)
};

asyDemo();


const API = "https://invalid"

const rejectAsync = async function () {
    try {
        const data = await fetch(API);
        const result = await data.json()
        console.log(result)
    } catch (error) {
        console.log(`Error aa gya bhai ${error}`);
    }

}

rejectAsync();


// API Fetch Script
const GIT_API = "https://api.github.com/users/ad1tyayadav"

const fetchData = async function () {
    const result = await fetch(GIT_API);
    const data = await result.json();
    console.log(data.login);
};

fetchData();


// Concurrent Promises Script
const GIT_API_USERS = [
    "https://api.github.com/users/ad1tyayadav",
    "https://api.github.com/users/octocat",
    "https://api.github.com/users/torvalds"
];

const fetchUserData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
};

const fetchAllUserData = async () => {
    try {
        const promises = GIT_API_USERS.map(url => fetchUserData(url));
        const results = await Promise.all(promises);
        results.forEach(user => console.log(user.login));
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

fetchAllUserData();


const fetchFirstUserData = async function () {
    try {
        const promises = GIT_API_USERS.map(url => fetchUserData(url));
        const firstResult = await Promise.race(promises);
        console.log(firstResult.login);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

fetchFirstUserData();
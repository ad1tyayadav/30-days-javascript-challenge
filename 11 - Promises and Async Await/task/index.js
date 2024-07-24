// Activity 1 - Understanding Promises
// Task 1 - Crete a promise that resolve after 2 second
const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Resolve");
        resolve();
    }, 2000);
});


// Task 2 - Crete a promise that reject after 2 second
const rejectPromosie = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Reject");
        reject("Somthing went wrong");
    }, 2000)
}).catch(err => {
    console.log(err);
});


// Activity 2 - Chaining Promises
// Task 3 - Create a promise chaining simulate fetching data from server
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


// Activity 4 - Using Async/Await
// Task 4 - Write async function that waits for a promise to resolve and then log the resolve value
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


// Task 5 - Write async function that waits for a promise to reject and handling using try catch
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


// Activity 5 - Fetching Data from an API
// Task 6 - Use fetch to fetch data from an public api and log the value using Async/Await
const GIT_API = "https://api.github.com/users/ad1tyayadav"

const fetchData = async function () {
    const result = await fetch(GIT_API);
    const data = await result.json();
    console.log(data.login);
};

fetchData();


// Task 7 - Use fetch to fetch data from an public api and log the value using promises
const promFetchData = new Promise((resolvePromise, rejectPromosie) => {
    fetch(GIT_API)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Http error' + response.status)
            }
            return response.json()
        })
        .then(data => resolvePromise(data))
        .catch(error => rejectPromosie(error))
});

promFetchData
    .then((data) => {
        console.log(data.id);
        console.log("Git Hub Feteched");
    })
    .catch((err) => {
        console.log(err);
    });


// Activity 5 - Concurrent Promises
// Task 9 - Use promise.all to log multiple promise
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


// Task 9 - Use promise.racr to log multiple promise
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

import axios from "axios";
import _ from "lodash";

// Activity 1 - Creating and Exporting Modules
// Task 1 - Create a module that exports a function to add two numbers, Import and use this module in another script
const addNum = (num1, num2) => {
    let sum = num1 + num2
    console.log(sum);
};


// Task 2 - Crate a module that export an object representing a person with properties and methods. Import and use this module in another script
const person = {
    name: "Thala",
    age: "age is just a number",
};

export { addNum, person };


// Activity 2 - Named and Default Exports
// Task 3 - {Named exports is already done in task 1 and task 2};


// Task 4 - Default Exports
const getProduct = (num1, num2) => {
    let product = num1 * num2
    console.log(product);
}

export default getProduct;


// Activity 3 - {TAsk 5 done in module.js} 

// Activity 4 - Using Third-Party Modules
// Task 6 - Install a Third-Party Module lodash Using npm and Use a Function from This Module in a Script
const num = [1,2,3,2,4,2,1,5,4,4,5,6]
const uniqNum = _.uniq(num);

console.log(`Uniqe Numbers = ${uniqNum}`);


// Task 7: Install a third-party module axios using npm. Import and use this module to make a network request in a script.
const networkReq = async () => {
    try {
       let data = await axios.get("https://api.github.com/users/ad1tyayadav");
       console.log('github user name = ' + data.data.login);
    } catch (error) {
        console.log(`Error aa gya bhai ${error}`);
    }
};

networkReq();


// Acitivity 5 - {This is optional also i don't know how to complete this task but when i complete 30days challenge I will do it}
import _ from "lodash";
import axios from "axios";

// Basic Module Script
export const addNum = (num1, num2) => {
    let sum = num1 + num2
    console.log(sum);
};


// Named and Default Exports Script
const add = (a, b) => {
    return a + b
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

export { add, subtract, multiply }

export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

export default divide;


// Third-Party Module Script
const num = [1,2,3,2,4,2,1,5,4,4,5,6]
const uniqNum = _.uniq(num);

console.log(`Uniqe Numbers = ${uniqNum}`);


const networkReq = async () => {
    try {
       let data = await axios.get("https://api.github.com/users/ad1tyayadav");
       console.log('github user name = ' + data.data.login);
    } catch (error) {
        console.log(`Error aa gya bhai ${error}`);
    }
};

networkReq();


// Module Building Script(optional)
// Will do soon
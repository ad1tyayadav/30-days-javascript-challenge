// Activity 1 - Varibles

var num = 8
console.log(num);

let string = 'Hey I am String';
console.log(string);


// Activity 2 - Constant

const boolean = true
console.log(boolean);


// Activity 3 - Data Types

let otp = 3423;
console.log(typeof (otp));

let msg = 'hey baby!';
console.log(typeof (msg));

let bool = false;
console.log(typeof (bool));

let father = {
    name: 'BaapJi',
    whosBaap: 'World',
}
console.log(typeof (father));

let cuties = ['Ava Addam', 'Dani Daniels', 'Poonam Pandey'];
console.log(typeof (cuties));


// Activity - 4 Reassigning Varibles

let initVal = "Hey I'm yours baby!";
let val = "I didn't care"
console.log(initVal);
initVal = val;
console.log(initVal);


// Understanding Const (its give error)
// (when we try reassigning value using const)

const newBndi = 'Hello babu kaise ho?';
const ex = 'Bhad mein jaa!';
console.log(newBndi);

try {
    newBndi = ex;
} catch (error) {
console.log("Error aa gya bhai!", error);
}

console.log(newBndi);
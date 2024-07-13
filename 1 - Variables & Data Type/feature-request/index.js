// Varibles & Types console log

let otp = 3423;

let msg = 'hey baby!';

let bool = false;

let father = {
    name: 'BaapJi',
    whosBaap: 'World',
}

let cuties = ['Ava Addam', 'Dani Daniels', 'Poonam Pandey'];


console.log(`Value = ${otp}, Data Type = ${typeof (otp)}`);
console.log(`Value = ${msg}, Data Type = ${typeof (msg)}`);
console.log(`Value = ${bool}, Data Type = ${typeof (bool)}`);
console.log(`Value = ${father.name} & ${father.whosBaap}, Data Type = ${typeof (father)}`);
console.log(`Value = ${cuties}, Data Type = ${typeof (cuties)}`);

// Reassignment Demo
// Using let

let avaAddam = "I'm hot!"
console.log(avaAddam);

avaAddam = "I'm hottest!"
console.log(avaAddam);

// Using const
const daniDaniel = "Ava is hot!"
console.log(daniDaniel);

try {
    daniDaniel = "Ava is too much hot!"
} catch (error) {
    console.log('Error aagya bhai!', error)
}

console.log(daniDaniel) /* after try to reassign value using const */
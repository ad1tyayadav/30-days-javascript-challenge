// Activity -1 arithmatic opreators in JS

const avaSize = 36;
const daniSize = 34;

// addition
const totalSize = (avaSize + daniSize);
console.log(`The total of avaSize and daniSize is = ${totalSize}`);

// substraction 
const diff = (avaSize - daniSize);
console.log(`The diffrence between avaSize and daniSize is = ${diff}`);

// multiplication
const multi = (avaSize * daniSize)
console.log(`The multiple of avaSize and daniSize is = ${multi}`);

// divide
const divide = (avaSize / daniSize)
console.log(`The division of avaSize and daniSize is = ${divide}`);

// reminder
const reminder = (avaSize % daniSize)
console.log(`The reminder of avaSize and daniSize is = ${reminder}`);


// Activity 2 - Assignment opreator
// +=

let avaAddam = 34;
avaAddam += 2;
console.log(`I'm Ava & my size is ${avaAddam}`);

// -=
let daniDaniel = 36;
daniDaniel -= 2;
console.log(`I'm Dani & my size is ${daniDaniel}`);


// Activity 3 - Comparison Opreators
// >

let biggerSize = (avaSize > daniSize)
console.log(`Ava size bigger than Dani = ${biggerSize}`);

// <
biggerSize = (avaSize < daniSize)
console.log(`Ava size smaller than Dani = ${biggerSize}`);


// Function to compare two numbers using >= and <= operator
function compareNum(num1, num2) {
    if (num1 >= num2) {
        console.log(`${num1} is bigger than or equal to ${num2}`);
    } else if (num1 <= num2) {
        console.log(`${num1} is smaller than or equal to ${num2}`);
    }
};
compareNum(aSize, daniSize);
compareNum(daniSize, avaSize);


// Function to compare two numbers using == and === operator
function equalNum(num1, num2) {
    if (num1 === num2) {
        console.log(`${num1} is equal with data type ${num2}`);
    } else if (num1 == num2) {
        console.log(`${num1} is equal to ${num2}`)
    } else {
        console.log(`Nothing is equal`);
    }
};
equalNum(36, avaSize);
equalNum("34", daniSize);
equalNum(daniSize, avaSize);va


// Program using && operator
const avaBigger = true;
const daniSmaller = false;

const bothSmall = avaBigger && daniSmaller;

console.log(`Ava have big? = ${avaBigger}`);
console.log(`Dani have small? = ${daniSmaller}`);
console.log(`Both have Small? = ${bothSmall}`);


// Program using || operator
const bothBigger = avaBigger || daniSmaller;

console.log(`Ava have big? = ${avaBigger}`);
console.log(`Dani have small? = ${daniSmaller}`);
console.log(`Both have big? = ${bothBigger}`);


//Program using ! operator
console.log(`Ava and Dani have small? = ${!avaBigger}`);
console.log(`Ava and Dani have Big? = ${!daniSmaller}`);


// Ternary opreator
const checkBig = (avaAddam > 32) ? (`Ava have big`) : (`Ava have small`);
console.log(checkBig);
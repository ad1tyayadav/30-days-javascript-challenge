// Array Manipulation Script
const numArr = [1, 2, 3, 4, 5, 6, 32, 65, 76];

numArr.push(6);
console.log(`arrya after using push = ${numArr}`);


numArr.pop();
console.log(`arrya after using pop = ${numArr}`);


numArr.shift();
console.log(`arrya after using shift = ${numArr}`);


numArr.unshift(1);
console.log(`arrya after using unshift = ${numArr}`);


// Array Transformation Script
const double = (x) => {
    return x * x;
};
let square = numArr.map(double);
console.log(`array after using map method to double the array = ${square}`);


const isEven = (x) => {
    return x % 2 === 0;
}
let evenNum = numArr.filter(isEven);
console.log(`array after using filter method to find even numbers from array = ${evenNum}`);


let sum = numArr.reduce((acc, curr) => {
    return acc + curr
}, 0);
console.log(`Calculating sum of all arrays numbers using reduce method = ${sum}`);



// Array Itretion Script
for (let index = 0; index < numArr.length; index++) {
    console.log(numArr[index]);
};


numArr.forEach(element => {
    console.log(element);
});


// Two-Dimensional Array Script
const matrix = [
    [2, 4, 6],
    [7, 5, 9],
    [8, 3, 4]
]
console.log(`matrix = ${matrix}`);


console.log(`Get a specific number from matrix = ${matrix[2][1]}`); /*output = 3*/
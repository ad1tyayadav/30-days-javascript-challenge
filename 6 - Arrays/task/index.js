// Activity 1 - Arrays creation and access
// Task 1 - Arrays of num 1 to 5
const numArr = [1, 2, 3, 4, 5, 6, 32, 65, 76];
console.log(numArr);


// Task 2 - Access the firs and last number of array
console.log(`First number of array is ${numArr[0]} and last number of array is ${numArr[4]}`);


// Activity 2 - Array Methods (Basic)
// Task 3 - Use push method to add a new number in end of the array
numArr.push(6);
console.log(`arrya after using push = ${numArr}`);


// Task 4 - Use pop method to remove last element from array
numArr.pop();
console.log(`arrya after using pop = ${numArr}`);


// Task 5 - Use shift method to remove first element from array
numArr.shift();
console.log(`arrya after using shift = ${numArr}`);


// Task 6 - Use unshift method to add first element in array
numArr.unshift(1);
console.log(`arrya after using unshift = ${numArr}`);


// Activity 3 - Array Methods (Intermediate)
// Task 7 - Use map method to use double the array
const double = (x) => {
    return x * x;
};

let square = numArr.map(double);
console.log(`array after using map method to double the array = ${square}`);


// Task 8 - Use filter method to find only even numbers from array
const isEven = (x) => {
    return x % 2 === 0;
}

let evenNum = numArr.filter(isEven);
console.log(`array after using filter method to find even numbers from array = ${evenNum}`);


// Task 9 - Use reduce method to calculate the sum of numbers
let sum = numArr.reduce((acc, curr) => {
    return acc + curr
}, 0);

console.log(`Calculating sum of all arrays numbers using reduce method = ${sum}`);


// Activity 4 - Array Itreation
// Task 10 - Using for loop in array 
for (let index = 0; index < numArr.length; index++) {
    console.log(numArr[index]);
};


// Task 11 - Using forEach loop in array 
numArr.forEach(element => {
    console.log(element);
});


// Activity 5 - Multi Dimensional Arrays
// Task 12 - Create a two dimensional array (matrix)
const matrix = [
    [2, 4, 6],
    [7, 5, 9],
    [8, 3, 4]
]

console.log(`matrix = ${matrix}`);


// Task 13 - Access the specific number from matrix
console.log(`Get a specific number from matrix = ${matrix[2][1]}`); /*output = 3*/
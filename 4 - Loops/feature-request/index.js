// Number printing script
console.log("Print numbers 1 to 10")
for (let i = 0; i < 10; i++) {
    let num = i + 1;
    console.log(num);
};


// Multiplication table script
console.log('Table of 5')
for (let i = 1; i <= 10; i++) {
    const numbers = i * 5;
    console.log(`5 X ${i} = ${numbers}`);
};


// Pattern printing script
console.log('Print Pattern')
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*'
    }
    console.log(row);
};


// Sum calculation script
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num += 1;
};

console.log(`Sum of numbers from 1 to 10 is: ${sum}`);


// Factorial calculation script
let factorial = 1;
let number = 1;

do {
    factorial *= number;
    number += 1;
} while (10 >= number);

console.log(`Factorial of 10 is ${factorial}`);
// Activity 1 - for loop

// Task 1 - 1 to 10
for (let i = 0; i < 10; i++) {
    let num = i + 1;
    console.log(num);
};


// Task 2 - table of 5
for (let i = 1; i < 11; i++) {
    const numbers = i * 5;
    console.log(`5 X ${i} = ${numbers}`);
};


// Activity 2 - while loop

// Task 3 - Sum of numbers from 1 to 10

let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num += 1;
};

console.log(`Sum of numbers from 1 to 10 is: ${sum}`);


// Task 6 - Factorial of 10

let factorial = 1;
let number = 1;

do {
    factorial *= number;
    number += 1;
} while (10 >= number);

console.log(`Factorial of 10 is ${factorial}`);


// Activity 4 - Nested Loop
// Task 7 -Print the pattern

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*'
    }
    console.log(row);
};


// Activity 5 - Loop control statements
// Task 8 - Skip number 5\

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i);
};


// Task 8 - stop the loop when thala number is come

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i)
}
console.log(`Thala for a reason 7`)
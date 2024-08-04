// Activity 1 - Basic Recursion
// Task 1 - Write a recrusive function to calculate the factorial of a number
const factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
};

let n = 4
console.log(`Factorial of ${n} is ${factorial(n)}`);


// Task 2 - Write a recrusive function to calculate nth Fibonacci number 
const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
};

let num = 8;
console.log(`fibonacci number of ${num} is ${fibonacci(num)}`);


// Activity 2 - Recurison with Arrays
// Task 3 - Write a recrusive function to find the sum of all num in an array.
const getSum = (array, index) => {

    if (index >= array.length) {
        return 0;
    } else {
        return array[index] + getSum(array, index + 1)
    }
};

let arr = [5, 4, 3, 2, 1]
console.log(`The sum of all numbers in array ${getSum(arr, 0)}`);


// Task 4 - Write a recrusive function to find the maximum num in an array
const findMax = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    }

    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest
}

let number = [3, 4, 5, 545, 67]
console.log(`The Maximum number of this array is ${findMax(number)}`);


// Activity 3 - String Manipulation with Recursion
// Task 5 - Write a recrusive function to reverse a string
const reverseStr = (str) => {
    if (str <= 1) {
        return str;
    }
    return reverseStr(str.slice(1)) + str[0];
};

console.log(reverseStr("hello"));


// Task 6 - Write a recrusive function to check if string is a palindrome.
const checkPalindrome = (str) => {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return checkPalindrome(str.slice(1, -1))
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("121"));
console.log(checkPalindrome("10"));


// Skipped both Activity 4 and Activity 5 challenges because I don't know DSA. I'll complete these questions once I learn DSA
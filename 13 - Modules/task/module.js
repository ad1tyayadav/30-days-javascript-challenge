// Activity 3 - Exporting W=Entier Modules
// Task 5 - Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

export const PI = Math.PI;
export const E = Math.E;


export const add = (a, b) => {
    return a + b
};
export const subtract = (a, b) => {
    return a - b;
};
export const multiply = (a, b) => {
    return a * b;
}
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

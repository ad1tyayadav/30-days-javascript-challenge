import getProduct, { addNum, person } from "./index.js"
import * as mathModule from './module.js'

// Part of task 1
addNum(4, 3);


// Part of task 2
console.log(person.name);


// Part of task 4
getProduct(7, 1);


// Part of task 5
console.log("PI:", mathModule.PI);   
console.log("E:", mathModule.E);          
console.log("Addition:", mathModule.add(10, 5));         
console.log("Subtraction:", mathModule.subtract(10, 5)); 
console.log("Multiplication:", mathModule.multiply(10, 5));
console.log("Division:", mathModule.divide(10, 5));    
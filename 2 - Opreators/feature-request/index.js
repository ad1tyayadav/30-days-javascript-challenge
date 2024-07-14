// Airthmetic Opreations

const avaSize = 36;
const daniSize = 34;
const poonamSize = 34;

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


// Comparison all opreators
let biggerSize = (avaSize > daniSize)
console.log(`Ava size bigger than Dani = ${biggerSize}`);

biggerSize = (avaSize < daniSize)
console.log(`Ava size smaller than Dani = ${biggerSize}`);


console.log(`Ava Size bigger or equal to than Dani size = ${avaSize >= daniSize}`);

console.log(`Dani Size smaller or equal to than Ava size = ${daniSize <= avaSize}`);

console.log(`Dani Size equal to Ava size = ${daniSize == avaSize}`);

console.log(`Dani Size not equal Ava size = ${daniSize !== avaSize}`);

console.log(`Dani Size equal to Poonam size with dta type = ${daniSize === poonamSize}`);


// Ternary Opreatot
(avaSize > 32) ? console.log('Ava you are hot!') : console.log('go and increase your size!');

(poonamSize > 32) ? console.log('Poonam you are hot!') : console.log('go and increase your size!');

(daniSize > 32) ? console.log('Dani you are hot!') : console.log('go and increase your size!');
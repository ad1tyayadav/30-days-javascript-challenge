// Activity 1 - Object Creation and Access
// Task 1 - Create an object representing book properties
const book = {
    title: "Captain Cool!",
    author: "Gautam Gambhir",
    year: "2015",
    library: {
        name: "Lab",
        books: ["Captain Cool", "Chiku", "Jaddu"]
    },
};
console.log(book);


// Task 2 - Access title and author
console.log(`Title = ${book.title} and Author = ${book.author}`);


// Activity 2 - Object Methods
// Task 3 - Add a method to the book object to return title and author using this method.
book.bookDets = function () {
    console.log(`Book name is ${this.title} and the author of this book is ${this.author}`);
};

console.log(book.bookDets());


// Task 4 - Override the year of book
book.bookYear = function (year) {
    book.year = year;
};

console.log(book.bookYear(2693));
console.log(book)


// Activity 3 - Nested Object 
// Task 5 - Create an library object and a book array
console.log(book.library);


// Task 6 - Access the library name and books title
console.log(`Library name = ${book.library.name} and available books is ${book.library.books},`);


// Activity 4 - The this Keyword
// Task 7 - Access the library name and books title using this keyword
book.labDets = function () {
    console.log(`Library name is ${this.library.name} and available books is ${this.library.books},`);
};

console.log(book.labDets());


// Activity 5 - Object Iretation
// Task 8 - Use a for in loop to iterate over the properties 
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
};


// Task 9 - Obeject.keys && Object.values methods
const keys = Object.keys(book);
console.log(keys);


const values = Object.values(book);
console.log(values);
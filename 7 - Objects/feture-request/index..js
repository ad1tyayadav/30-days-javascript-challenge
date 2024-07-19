// Book Object Script
const book = {
    title: "Captain Cool!",
    author: "Gautam Gambhir",
    year: "2015",
    library: {
        name: "Lab",
        books: ["Captain Cool", "Chiku", "Jaddu"]
    },
};


book.bookDets = function () {
    console.log(`Book name is ${this.title} and the author of this book is ${this.author}`);
};

console.log(book.bookDets());


book.bookYear = function (year) {
    book.year = year;
};

console.log(book.bookYear(2693)); 
console.log(book);


// Library Object Script
console.log(book.library);

book.labDets = function () {
    console.log(`Library name is ${this.library.name} and available books is ${this.library.books},`);
};

console.log(book.labDets());


// Object Iteration Script
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
};

const keys = Object.keys(book);
console.log(keys);

const values = Object.values(book);
console.log(values);
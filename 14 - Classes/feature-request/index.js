// Basic Class Script
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    };

    greet() {
        return `Hello ${this.name} your age is ${this.age}`;
    };

    // This is for Statics Methods and Properties Script
    static greeting() {
        return `This is genric greeting message for Person`;
    };
};

const person = new Person("Ava Addam", 38);
console.log(person.greet());


// Class Inheritance Script
class Student extends Person {
    constructor(name, age, id) {
        super(name, age)
        this.id = id;
    }

    studentId() {
        return this.id;
    }

    greet() {
        return `Hello ${this.name} your age is ${this.age} and your student ID is ${this.id}`
    }
};

const student = new Student("Johny", 39, 1);
console.log("Student Id = ", student.id);


console.log(student.greet());


// Static Methods and Properties Script
// {Logic added in Person class}
console.log(Person.greeting());


// Getters and Setters Script
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    };

    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    set fullName(name) {
        const [firstname, lastname] = name.split(' ');
        this.firstname = firstname;
        this.lastname = lastname;
    }

}

const user = new User("Dani", "Khalifa")
console.log("Full Name = ", user.fullName);

user.fullName = "Ava Addams";

console.log(`updated name = ${user.fullName}`);


// Private Fields Script(optional)
// Will do soon
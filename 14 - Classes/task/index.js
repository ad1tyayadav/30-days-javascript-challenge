// Activity 1 - Class Defination
// Task 1 - Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    };

    greet() {
        return `Hello ${this.name} your age is ${this.age}`;
    };

    // Task 2 - Add a method to the Person class that updates the age property
    updtage(age) {
        return this.age = age;
    }

    // Task 5 - Add a static method for genric greeting message
    static greeting() {
        return `This is genric greeting message for Person`;
    };
};

//  Create an instance of the class and log the greeting message.
const person = new Person("Ava Addams", 38);
console.log(person.greet());

//  logs the updated age.
console.log("Updated age = " + person.updtage(35));


// Activity 2 - Class Inheritance
// Task 3 - Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
class Student extends Person {
    static countStudents = 0;
    constructor(name, age, id) {
        super(name, age)
        this.id = id;
        Student.countStudents++;
    }

    studentId() {
        return this.id;
    }

    // Task 4 - Override the greeting message 
    greet() {
        return `Hello ${this.name} your age is ${this.age} and your student ID is ${this.id}`
    }

    // Task 6 - Student count method
    static getStudentsCount() {
        return Student.countStudents;
    }
};

// Create an instance of the Student class and log the student ID.
const student = new Student("Johny", 39, 1);
console.log("Student Id = ", student.id);


// Override the greet message
console.log(student.greet());


// Activity 3 - Statics Methods and Properties
// Task 5 - Call the static method on the Person class
console.log(Person.greeting());


// Task 6 - log the students count number
console.log("Total no of students is", Student.getStudentsCount());


// Activity 4 - Getters and Setters
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    };

    // Task 7 - Getter for full name
    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    // Task 8 - Setter for full name
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


// Acitivity 5 - {This is optional also i don't know how to complete this task but when i complete 30days challenge I will do it}
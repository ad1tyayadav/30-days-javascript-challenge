// Activity 1: if-Else
// Task 1
const num = Math.floor(Math.random() * 100 + 1);
if (num > 0) {
    console.log(`${num} is a postive number`);
} else if (num == 0) {
    console.log(`${num} is a Zeroo!`);
} else {
    console.log(`${num} is negative number`);
}


// Task 2
const checkAge = (age) => {
    if (age >= 18) {
        console.log(`your age ${age} you can vote`);
    } else {
        console.log(`Ja beta abhi teri umar nhi hai`);
    }
};
checkAge(18);
checkAge(15);
checkAge(99);


// Activity 2: Nested if-Else
// Task 3
let num1 = 1;
let num2 = 4;
let num3 = 7;
const largeNum = () => {
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(`${num1} is largest number`);
        }
        else {
            console.log(`${num3} is largest number`);
        }
    }
    else {
        if (num2 >= num3) {
            console.log(`${num2} is largest number`);
        } else {
            console.log(`${num3} is largest number`);
        }
    }
};

largeNum();


// Activity 3 - Switch case
// Task 4
let day = Math.floor(Math.random() * 7);

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.lg("Thursday");
        break;

    case 6:
        console.log("Friday");
        break; o

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("YE DIN SAMBHAV NAHI HAI PARTH")
};


// Task 5
let Marks = (Math.floor(Math.random() * 10 + 1) * 10) - 10;

switch (Marks) {
    case 90:
        console.log(`Le Beta Bullet chla! tere pure ${Marks} aur A grade hai1`);
        break;

    case 80:
        console.log(`Tere ko splendor milega ${Marks} aur B grade hai Shabhash munnna!`);
        break;

    case 70:
        console.log(`Tuje electric milega vro ${Marks} aur C grade par itna bhut hai chutiye!`);
        break;

    case 60:
        console.log(`Le beta desi cycle ${Marks} aur D grade pe itna hi`);
        break;

    case 50:
        console.log(`Krun teri Gudi Laal? ${Marks} aur E grade leke aya hai BKL`);
        break;

    case 0:
        console.log(`Tujhe samman nhi ${Marks} marks pe sirf Saman Milega`);
        break;

    default:
        console.log(`Kya be loveday ${Marks} pe kuch nhi hai tere liye`)
};


// Activity 4: Conditional ternory opreator
// Task 6
const checkEveOdd = (num % 2 === 0 ? `sankhya ${num} ek Sam sankhaya hai` : `sankhya ${num} ek Visam sankhaya hai`);
console.log(checkEveOdd);


// Activity 5: Combining Conditional
// Task 7
const checkYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`Bdahi ho saal ${year} ek leap varsh hai`);
    } else {
        console.log(`Abe yrr saal ${year} ek leap varsh Nhi hai`)
    }
};
checkYear(2024);
checkYear(2023);
checkYear(2028);
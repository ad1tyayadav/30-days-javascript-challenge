// Number Check Script 
const num = Math.floor(Math.random() * 100)
if (num > 0) {
    console.log(`${num} is a postive number`);
} else if (num == 0) {
    console.log(`${num} is a Zeroo!`);
} else {
    console.log(`${num} is negative number`);
};


// Voting Eligiblity Script
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


// Day of the week script
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


// Grade Assignment Script
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


// Leap year checker
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
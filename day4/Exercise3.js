//1. Write a program which tells the number of days in a month.
let month = prompt("Enter a month: ");
if (month == "February") {
    console.log( month + "has 28 days");
}
else if (month == "April" || month == "June" || month == "September" || month == "November") {
    console.log( month + "has 30 days");
}
else {
    console.log( month +"has 31 days ");
}

//2. Write a program that will give the number of days in a month, now consider leap year.
let month1 = prompt("Enter a month: ");
let year = prompt("Enter a year: ");
if (month1 == "February") {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log(month1 + "has 29 days");
    }
    else {
        console.log(month1 + "has 28 days");
    }
}
else if (month1 == "April" || month1 == "June" || month1 == "September" || month1 == "November") {
    console.log(month1 + "has 30 days");
}
else {
    console.log(month1 + "has 31 days ");
}
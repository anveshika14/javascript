/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C  
50-59, D
0-49, F*/
let score = prompt("Enter your score: ");
if (score >= 80 && score <= 100) {
    console.log("A");
}
else if (score >= 70 && score <= 79) {     
    console.log("B");
}
else if (score >= 60 && score <= 69) {
    console.log("C");
}
else if (score >= 50 && score <= 59) {
    console.log("D");
}
else if (score >= 0 && score <= 49) {
    console.log("F");
}
else {
    console.log("Invalid score");
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, it is Autumn.
December, January or February, it is Winter.
March, April or May, it is Spring.
June, July or August, it is Summer.*/
let month = prompt("Enter a month: ");
if (month == "September" || month == "October" || month == "November") {
    console.log("Autumn");
}
else if (month == "December" || month == "January" || month == "February") {
    console.log("Winter");
}
else if (month == "March" || month == "April" || month == "May") {
    console.log("Spring");
}
else if (month == "June" || month == "July" || month == "August") {
    console.log("Summer");
}
else {
    console.log("Invalid month");
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("Enter a day: ");
if (day == "Saturday" || day == "Sunday") {
    console.log("Weekend");
}
else {
    console.log("Working day");
}


/*1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */
let base = prompt("Enter base of the triangle: ");
let height = prompt("Enter height of the triangle: ");
let area = 0.5 * base * height;
console.log("The area of the triangle is: " + area);

/*2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
let A = prompt("Enter side a:");
let B = prompt("Enter side b:");
let C = prompt("Enter side c: ");
let perimeter = Number(A) + Number(B) + Number(C);
console.log("The perimeter is: " + perimeter);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("length: ");
let width = prompt("width: ");   
let a = length * width;
let p = 2 * (Number(length) + Number(width));
console.log("area : " + a);
console.log("perimeter: " + p);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt("radius: ");
let pi = 3.14;
let aCircle = pi * r * r;
let c= 2 * pi * r;
console.log("area : " + aCircle);
console.log("circumference : " + c);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2  

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2; 
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("slope: " + slope);

//7. Compare the slope of above two questions.

//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = prompt("x: ");
let y = x * x + 6 * x + 9;
console.log("y: " + y);

/*9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */
let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
let pay = hours * rate;
console.log("Your weekly earning is: " + pay);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let n = prompt("Enter your name: "); 
if (n.length > 7) {
    console.log("Your name is long.");
}
else {
    console.log("Your name is short.");
}   

//11. Compare your first name length and your family name length and you should get this output.
let firstName = "Anveshika";
let lastName = "Shukla";      

if (firstName.length > lastName.length) {
    console.log("Your first name, " + firstName + " is longer than your family name, " + lastName);
} 
else if (firstName.length < lastName.length) {
    console.log("Your family name, " + lastName + " is longer than your first name, " + firstName);
}
else {
    console.log("Both names are equal in length.");
}

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 23;
let yourAge = 30; 
console.log("I am " + (myAge - yourAge) + " years older than you.");

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let year = prompt("Enter the year you were born: ");
let age = 2023 - year;
if (age >= 18) {
    console.log("You are allowed to drive.");
}
else {
    console.log("You need to wait " + (18 - age) + " years to drive.");
}

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt("Enter number of years: ");
let seconds = years * 365 * 24 * 60 * 60;
console.log("You lived " + seconds + " seconds.");

//15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm 
// DD/MM/YYYY HH:mm
let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1; 
let Day = date.getDate();
let Hours = date.getHours();
let Minutes = date.getMinutes();
let Seconds = date.getSeconds();
let time = Year + "-" + Month + "-" + Day + " " + Hours + ":" + Minutes;
console.log(time);
let time1 = Day + "-" + Month + "-" + Year + " " + Hours + ":" + Minutes;
console.log(time1);
let time2 = Day + "/" + Month + "/" + Year + " " + Hours + ":" + Minutes;
console.log(time2);


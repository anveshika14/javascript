//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age: ");
if (age >= 18) {
    console.log("You are old enough to drive");
}
else {
    let y= 18-age;
    console.log("You are left with " + y + "years to drive");
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myage = 23;
let yourage = prompt("Enter your age: ");
if (myage > yourage) {
    let diff = myage - yourage;
    console.log("I am" + diff + "years older than you");
}
else if(myage < yourage) {
    let diff1 = yourage - myage;
    console.log("You are " + diff1 + "older than me");
}
else {
    console.log("We are the same age");
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways: using if else and ternary operator.
let a = 5;
let b = 3;
// Using if else statement
if (a > b) {
    console.log("a is greater than b");
}       
else {
    console.log("a is less than b");
}
// Using ternary operator
let result = (a > b) ? "a is greater than b" : "a is less than b";
console.log(result);

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number: ");
if (number%2==0) {
    console.log(number + " is an even number");
}
else {
    console.log(number + " is an odd number");
}



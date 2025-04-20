//1. Declare a function fullName and it print out your full name.
function fullName() {
    console.log("Anveshika Shukla");
}

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Anveshika", "Shukla"));

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10)); 

//4. An area of a rectangle is calculated as follows: area = width * height. Write a function which calculates areaOfRectangle.
function areaOfRectangle(width, height) {
    return width * height;
}
console.log(areaOfRectangle(5, 10)); 

//5. A perimeter of a rectangle is calculated as follows: perimeter = 2 * (width + height). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(width, height) {
    return 2 * (width + height);
}
console.log(perimeterOfRectangle(5, 10));

//6. A volume of a rectangular prism is calculated as follows: volume = width * height * depth. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(width, height, depth) {
    return width * height * depth;
}
console.log(volumeOfRectPrism(5, 10, 15));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.
function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}
console.log(circumOfCircle(5));

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume;
}
console.log(density(10, 2));

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return distance / time;
}
console.log(speed(100, 2));

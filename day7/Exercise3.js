//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {  
    const numberOfCharacters = parseInt(prompt("Enter the number of characters for the user ID:"));
    const numberOfIds = parseInt(prompt("Enter the number of user IDs to generate:"));
    const ids = [];

    for (let i = 0; i < numberOfIds; i++) {
        ids.push(userIdGenerator(numberOfCharacters));
    }

    return ids;
}
console.log(userIdGeneratedByUser());

//2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(rgbColorGenerator());

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
    const hexColors = [];

    for (let i = 0; i < num; i++) {
        const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        hexColors.push(hexColor);
    }

    return hexColors;
}
console.log(arrayOfHexaColors(5)); 

//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
    const rgbColors = [];

    for (let i = 0; i < num; i++) {
        rgbColors.push(rgbColorGenerator());
    }

    return rgbColors;
}
console.log(arrayOfRgbColors(5));

//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb("#FF5733"));

//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb) {
    const rgbValues = rgb.match(/\d+/g);
    const hex = '#' + rgbValues.map(value => {
        const hexValue = parseInt(value).toString(16).padStart(2, '0');
        return hexValue;
    }).join('');
    return hex;
}
console.log(convertRgbToHexa("rgb(255, 87, 51)"));

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(num, format) {
    const colors = [];

    for (let i = 0; i < num; i++) {
        if (format === 'hex') {
            colors.push(arrayOfHexaColors(1)[0]);
        } else if (format === 'rgb') {
            colors.push(rgbColorGenerator());
        }
    }

    return colors;
}
console.log(generateColors(5, 'hex'));
console.log(generateColors(5, 'rgb'));

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    return value === null || value === undefined || (typeof value === 'object' && Object.keys(value).length === 0);
}
console.log(isEmpty([])); 
console.log(isEmpty({})); 
console.log(isEmpty("")); 

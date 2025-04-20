//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    const result = a * x + b * y + c;
    return result === 0;
  }
console.log(solveLinEquation(2, 3, -6, 0, 2)); 
  
//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    if (a === 0) {
      return "Not a quadratic equation.";
    }
  
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `Two real roots: x = ${root1}, x = ${root2}`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return `One real root: x = ${root}`;
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      return `No real roots. Complex roots: x = ${realPart} ± ${imaginaryPart}i`;
    }
  }
console.log(solveQuadEquation(1, -3, 2)); 

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    arr.forEach((value) => {
      console.log(value);
    });
  }
printArray([1, 2, 3, 4, 5]);

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('en-US', options).replace(',', '');
  }
console.log(showDateTime());

//5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    return [y, x];
  }
console.log(swapValues(3, 5)); 

//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
console.log(reverseArray([1, 2, 3, 4, 5]));

//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the capitalized array.
function capitalizeArray(arr) {
    return arr.map((value) => value.toUpperCase());
  }
console.log(capitalizeArray(['apple', 'banana', 'cherry']));

//8. Declare a function name addItem. It takes an item parameter and adds the item to the end of the array.
function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
console.log(addItem([1, 2, 3], 4));

//9. Declare a function name removeItem. It takes an item parameter and removes the item from the array.
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
console.log(removeItem([1, 2, 3, 4], 3));

//10. Declare a function name sumOfNumbers. It takes a number parameter and it returns the sum of all numbers in that range.
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
console.log(sumOfNumbers(5));

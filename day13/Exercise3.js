//1.Check the speed difference among the following loops: while, for, for of, forEach
const arr = Array.from({ length: 1000000 }, (_, i) => i);

// Measure while loop
console.time('while');
let i = 0;
while (i < arr.length) {
  arr[i];
  i++;
}
console.timeEnd('while');

// Measure for loop
console.time('for');
for (let j = 0; j < arr.length; j++) {
  arr[j];
}
console.timeEnd('for');

// Measure for...of loop
console.time('for...of');
for (const num of arr) {
  num;
}
console.timeEnd('for...of');

// Measure forEach loop
console.time('forEach');
arr.forEach(num => {
  num;
});
console.timeEnd('forEach');

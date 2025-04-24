//1.Find a union b
const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];
const union = [...new Set([...a, ...b])];
console.log(union); 

//2.Find a intersection b
const intersection = a.filter(value => b.includes(value));
console.log(intersection);

//3.Find a with b
const difference = a.filter(value => !b.includes(value));
console.log(difference);


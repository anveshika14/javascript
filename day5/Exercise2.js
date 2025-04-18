//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations and change the string to array and count the number of words in the array
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[.,]/g, '').split(' ');
console.log(words.length);

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.push('Gas');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

//4. add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

//5. add Sugar at the end of you shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);

//6. remove 'Honey' if you are allergic to honey
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
console.log(shoppingCart);

//7. modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

//8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['India', 'USA', 'China', 'Ethiopia'];
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
}else {
    countries.push('Ethiopia');
}
console.log(countries);

//9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
}
else {
    webTechs.push('Sass');
}
console.log(webTechs);

/*10. Concatenate the following two variables and store it in a variable fullStack
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB']; 
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); 


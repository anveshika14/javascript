//1. Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
countries.forEach(country => console.log(country));

//2. Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.forEach(name => console.log(name));

//3. Use forEach to console.log each country in the countries array.
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
countries.forEach(country => console.log(country));

//4. Use forEach to console.log each name in the names array.
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.forEach(name => console.log(name));

//5. Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const upperCaseCountries = countries2.map(country => country.toUpperCase());
console.log(upperCaseCountries);

//7. Use map to create an array of countries length from countries array.
const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const countriesLength = countries3.map(country => country.length);
console.log(countriesLength);

//8. Use map to create a new array by changing each number to square in the numbers array.
const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers1.map(number => number ** 2);
console.log(squaredNumbers);

//9. Use map to change to each name to uppercase in the names array.
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const upperCaseNames = names2.map(name => name.toUpperCase());
console.log(upperCaseNames);

//10. Use map to map the products array to its corresponding prices.
const products = [
  { product: 'banana', price: 3 },
  { product: 'milk', price: 2 },
  { product: 'pasta', price: 4 },
  { product: 'potato', price: 1 },
  { product: 'coffee', price: 5 },
];
const productPrices = products.map(product => product.price);
console.log(productPrices);

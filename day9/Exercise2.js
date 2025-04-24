//1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products1 = [
  { product: 'banana', price: 3 },
  { product: 'milk', price: 2 },
  { product: 'pasta', price: 4 },
  { product: 'potato', price: 1 },
  { product: 'coffee', price: 5 },
];
const totalPrice = products1
  .filter(product => product.price > 2) 
  .map(product => product.price) 
  .reduce((acc, price) => acc + price, 0); 
console.log(totalPrice); 

//2. Find the sum of price of products using only reduce reduce(callback))
const products2 = [
  { product: 'banana', price: 3 },
  { product: 'milk', price: 2 },
  { product: 'pasta', price: 4 },
  { product: 'potato', price: 1 },
  { product: 'coffee', price: 5 },
];
const totalPrice2 = products2.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice2);

//3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Pakistan', 'Afghanistan', 'Kazakhstan'];
const categorizeCountries = (countries, pattern) => {
  return countries.filter(country => country.includes(pattern));
};

const landCountries = categorizeCountries(countries3, 'land');
console.log(landCountries); 

const iaCountries = categorizeCountries(countries3, 'ia');
console.log(iaCountries); 

const islandCountries = categorizeCountries(countries3, 'island');
console.log(islandCountries); 

const stanCountries = categorizeCountries(countries3, 'stan');
console.log(stanCountries);

//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countries4 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Pakistan', 'Afghanistan', 'Kazakhstan'];
const countCountriesByFirstLetter = (countries) => {
    const letterCount = {};
    countries.forEach(country => {
        const firstLetter = country[0].toUpperCase();
        if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
        } else {
        letterCount[firstLetter] = 1;
        }
    });
    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
    }
const result = countCountriesByFirstLetter(countries4);
console.log(result);

//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const countries5 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Pakistan', 'Afghanistan', 'Kazakhstan'];
const getFirstTenCountries = (countries) => {
    return countries.slice(0, 10);
}
const firstTenCountries = getFirstTenCountries(countries5);
console.log(firstTenCountries);

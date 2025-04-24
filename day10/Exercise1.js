//1.create an empty set
const emptySet = new Set();
console.log(emptySet);

//2.Create a set containing 0 to 10 using loop
const setWithLoop = new Set();
for (let i = 0; i <= 10; i++) {
  setWithLoop.add(i);
}
console.log(setWithLoop);

//3.Remove an element from a set
const setToRemove = new Set([1, 2, 3, 4, 5]);
setToRemove.delete(3);
console.log(setToRemove);

//4.Clear a set
const setToClear = new Set([1, 2, 3, 4, 5]);
setToClear.clear();
console.log(setToClear);

//5.Create a set of 5 string elements from array
const array = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const setFromArray = new Set(array);
console.log(setFromArray);

//6.Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const countriesMap = new Map();
countries.forEach(country => {
  countriesMap.set(country, country.length);
});
console.log(countriesMap);



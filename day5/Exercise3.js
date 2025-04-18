const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Sorted ages: ${ages}`);
console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);

//Find the median age(one middle item or two middle items divided by two)
const medianAge = ages.length % 2 === 0 ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2 : ages[Math.floor(ages.length / 2)];
console.log(`Median age: ${medianAge}`);

//Find the average age(all items divided by number of items)
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average age: ${averageAge}`);

// Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log(`Range of ages: ${range}`);

//Compare the value of (min - average) and (max - average), use abs() method 
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log(`Difference between min and average: ${minDiff}`);
console.log(`Difference between max and average: ${maxDiff}`);

// 1.Slice the first ten countries from the countries array
const ften = countries.slice(0, 10);
console.log(ften);

// 2.Find the middle ten countries from the countries array
const middleIndex = Math.floor(countries.length / 2);
const middleCountries = countries.slice(middleIndex - 5, middleIndex + 5);
console.log(middleCountries);

// 3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const halfIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfIndex);
const secondHalf = countries.slice(halfIndex);
console.log(`First half: ${firstHalf}`);
console.log(`Second half: ${secondHalf}`);

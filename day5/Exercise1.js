//1. Declare an empty array;
const arr = [];

//2. Declare an array with 5 number of elements;
const arr1 = [1, 2, 3, 4, 5];

//3. Find the length of your array
console.log(arr1.length);

//4. Get the first item, the middle item and the last item of the array
console.log(arr1[0]); 
console.log(arr1[Math.floor(arr1.length / 2)]); 
console.log(arr1[arr1.length - 1]);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'Anveshika', true, null, undefined, { name: 'shivanshi' }, [1, 2, 3]];
console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

//10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

//12. Print the array like a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.


//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found using if else
const company = prompt('Enter a company name: ');
if (itCompanies.includes(company)) {
    console.log(company + ` exists in the array.`);
}
else {
    console.log(company +` does not exist in the array.`);
}

//14. Filter out companies which have more than one 'o' without the filter method

//15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

//17. Slice out the first 3 companies from the array
const first3 = itCompanies.slice(0, 3);
console.log(first3);

//18. Slice out the last 3 companies from the array
const last3 = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(last3);

//19. Slice out the middle IT company or companies from the array   

//20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//21. Remove the middle IT company or companies from the array

//22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

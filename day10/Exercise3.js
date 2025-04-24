//1.How many languages are there in the countries object file.
const countries = require('./countries.js'); // Assuming you have a file named countries.js
const languages = new Set();
countries.forEach(country => {
  country.languages.forEach(language => {
    languages.add(language);
  });
});
console.log(languages.size);

//2.*** Use the countries data to find the 10 most spoken languages:
const countriesData = require('./countries.js'); 
const languageCount = new Map();
countriesData.forEach(country => {
  country.languages.forEach(language => {
    if (languageCount.has(language)) {
      languageCount.set(language, languageCount.get(language) + 1);
    } else {
      languageCount.set(language, 1);
    }
  });
});
const sortedLanguages = Array.from(languageCount.entries()).sort((a, b) => b[1] - a[1]);
const top10Languages = sortedLanguages.slice(0, 10);
console.log(top10Languages);



//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const countries = [
  { name: 'Finland', capital: 'Helsinki', population: 5540720 },
  { name: 'Sweden', capital: 'Stockholm', population: 10327589 },
  { name: 'Denmark', capital: 'Copenhagen', population: 5818553 },
  { name: 'Norway', capital: 'Oslo', population: 5421241 },
  { name: 'Iceland', capital: 'Reykjavik', population: 343599 },
  { name: 'Pakistan', capital: 'Islamabad', population: 225199937 },
  { name: 'Afghanistan', capital: 'Kabul', population: 38928346 },
  { name: 'Kazakhstan', capital: 'Nur-Sultan', population: 18776707 },
];

const sortCountriesByName = (countries) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};
const sortCountriesByCapital = (countries) => {
  return countries.sort((a, b) => a.capital.localeCompare(b.capital));
};
const sortCountriesByPopulation = (countries) => {
  return countries.sort((a, b) => a.population - b.population);
};
const sortedByName = sortCountriesByName(countries);
console.log('Sorted by name:', sortedByName);
const sortedByCapital = sortCountriesByCapital(countries);
console.log('Sorted by capital:', sortedByCapital);
const sortedByPopulation = sortCountriesByPopulation(countries);
console.log('Sorted by population:', sortedByPopulation);








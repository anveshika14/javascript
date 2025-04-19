/*1. Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba*/
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
let length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 15
for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id);

/*2. Write a script which generates a random hexadecimal number.
'#ee33df'*/
let hex = '#';
for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
}
console.log(hex);

/*3. Write a script which generates a random rgb color number.
'rgb(240,180,80)'*/
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = `rgb(${r},${g},${b})`;
console.log(rgb);

/*4. Using the above countries array, create the following new array:
['Albania', 'Bolivia', 'Canada', 'Dominican Republic']*/
let countries = ['Albania', 'Bolivia', 'Canada', 'Dominican Republic', 'Ethiopia', 'Finland', 'Germany', 'Ghana', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Ireland', 'Italy', 'Kenya', 'Madagascar', 'Mexico', 'Mali', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Rwanda', 'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Venezuela', 'Vietnam'];
let newCountries = countries.filter(country => country.length > 6);
console.log(newCountries);

/*5. Using the above countries array, create an array for countries length'.
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]*/
let countryLengths = countries.map(country => country.length);
console.log(countryLengths);

/*6. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]*/



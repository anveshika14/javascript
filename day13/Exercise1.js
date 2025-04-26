//1.Display the countries array as a table
console.table(countries);

///2.Display the countries object as a table
console.table(countriesObject);

///3.Use console.group() to group logs
console.group('Countries');
console.log('Finland');
console.log('Sweden');
console.log('Denmark');
console.groupEnd('Countries');
console.group('Cities');
console.log('Helsinki');
console.log('Stockholm');
console.log('Copenhagen');
console.groupEnd('Cities');

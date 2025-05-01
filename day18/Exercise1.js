//1.Read the countries API using fetch and print the name of country, capital, languages, population and area


fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
        console.log("Country Name:", country.name.common);
        console.log("Capital:", country.capital ? country.capital[0] : "N/A");
        console.log("Languages:", Object.values(country.languages || {}).join(", "));
        console.log("Population:", country.population);
        console.log("Area:", country.area, "sq km");
        console.log("-----------------------------");
        });
    })
    .catch((error) => console.error("Error fetching countries data:", error));

    
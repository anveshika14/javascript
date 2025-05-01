//1.Read the cats api and find the average weight of cat in metric unit.
fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
        const totalWeight = data.reduce((sum, cat) => {
            const weightRange = cat.weight.metric.split(" - ");
            const averageWeight = (parseFloat(weightRange[0]) + parseFloat(weightRange[1])) / 2;
            return sum + averageWeight;
        }, 0);
        const averageWeight = totalWeight / data.length;
        console.log("Average Weight of Cats in Metric Unit:", averageWeight.toFixed(2), "kg");
    })
    .catch((error) => console.error("Error fetching cat data:", error));

//2.Read the countries api and find out the 10 largest countries
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const sortedCountries = data.sort((a, b) => b.area - a.area);
        const largestCountries = sortedCountries.slice(0, 10);
        console.log("10 Largest Countries by Area:");
        largestCountries.forEach((country) => {
            console.log(country.name.common, "-", country.area, "sq km");
        });
    })
    .catch((error) => console.error("Error fetching countries data:", error));

//3.Read the countries api and count total number of languages in the world used as officials.
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const languages = new Set();
        data.forEach((country) => {
            if (country.languages) {
                Object.values(country.languages).forEach((language) => {
                    languages.add(language);
                });
            }
        });
        console.log("Total Number of Official Languages in the World:", languages.size);
    })
    .catch((error) => console.error("Error fetching countries data:", error));
    
//1. Print out all the cat names in to catNames variable.
const catNames = ["Milo", "Leo", "Luna", "Bella", "Oliver", "Charlie", "Max", "Simba", "Chloe", "Nala"];
const catNamesList = document.createElement("ul");
catNames.forEach((catName) => {
    const listItem = document.createElement("li");
    listItem.textContent = catName;
    catNamesList.appendChild(listItem);
});
document.body.appendChild(catNamesList);


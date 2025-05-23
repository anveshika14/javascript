//1. Create an empty object called dog
let dog = { };

//2. Print the the dog object on the console
console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which returns woof woof
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 5;
dog.bark = function() {
    return "Woof Woof";
}

//4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name); 
console.log(dog.legs); 
console.log(dog.color); 
console.log(dog.age); 
console.log(dog.bark()); 

//5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Labrador";
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}`;
}


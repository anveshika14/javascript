//1.Override the method you create in Animal class
// Parent class
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    makeSound() {
      return `${this.name} makes a generic animal sound.`;
    }
  
    describe() {
      return `${this.name} is ${this.age} years old, has ${this.color} color, and has ${this.legs} legs.`;
    }
  
    move() {
      return `${this.name} moves using its ${this.legs} legs.`;
    }
  }
  
  // Child class
  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs); // Call parent constructor
      this.breed = breed; // Additional property for Dog
    }
  
    // Overriding makeSound method
    makeSound() {
      return `${this.name} barks loudly! 🐕`;
    }
  
    // You can even add new methods
    fetch() {
      return `${this.name} is fetching the ball! 🎾`;
    }
  }
  
  // Example usage
  const myDog = new Dog("Rocky", 2, "black", 4, "Labrador");
  
  console.log(myDog.describe());     // Inherited from Animal
  console.log(myDog.makeSound());    // Overridden in Dog
  console.log(myDog.move());         // Inherited from Animal
  console.log(myDog.fetch());        // New method in Dog
  
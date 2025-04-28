//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods.

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
    
    makeSound() {
        return `${this.name} makes a sound.`;
    }
    }


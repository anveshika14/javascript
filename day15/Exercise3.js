//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.


class Statistics {
    constructor(data) {
        this.data = data;
    }

    mean() {
        const sum = this.data.reduce((acc, val) => acc + val, 0);
        return sum / this.data.length;
    }

    median() {
        const sorted = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    mode() {
        const frequency = {};
        this.data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
        const maxFreq = Math.max(...Object.values(frequency));
        return Object.keys(frequency).filter(num => frequency[num] === maxFreq).map(Number);
    }

    range() {
        return Math.max(...this.data) - Math.min(...this.data);
    }

    variance() {
        const mean = this.mean();
        return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.data.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    count() {
        return this.data.length;
    }

    percentile(p) {
        const sorted = [...this.data].sort((a, b) => a - b);
        const index = Math.ceil((p / 100) * sorted.length) - 1;
        return sorted[index];
    }

    frequencyDistribution() {
        const frequency = {};
        this.data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
        return frequency;
    }
}
// Example usage
const sampleData = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7];
const stats = new Statistics(sampleData);
console.log("Mean:", stats.mean());
console.log("Median:", stats.median()); 
console.log("Mode:", stats.mode()); 
console.log("Range:", stats.range()); 
console.log("Variance:", stats.variance()); 
console.log("Standard Deviation:", stats.standardDeviation()); 
console.log("Min:", stats.min()); 
console.log("Max:", stats.max()); 
console.log("Count:", stats.count());
console.log("90th Percentile:", stats.percentile(90)); 
console.log("Frequency Distribution:", stats.frequencyDistribution()); 

//2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    }

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    }

    totalIncome() {
        return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    }

    totalExpense() {
        return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    accountInfo() {
        return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    }
}

//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
        { description: "Salary", amount: 5000 },
        { description: "Freelance", amount: 2000 }
    ],
    expenses: [
        { description: "Rent", amount: 1500 },
        { description: "Groceries", amount: 300 }
    ],
    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo() {
        return `Account Holder: ${this.firstName} ${this.lastName}`;
    },
    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },
    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

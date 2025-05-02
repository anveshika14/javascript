//1.Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
    let firstName = "Anveshika";
    let lastName = "Shukla";
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        return incomes.reduce((acc, income) => acc + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }

    function accountInfo() {
        return `Account Holder: ${firstName} ${lastName}`;
    }

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}

const account = personAccount();
account.addIncome("Salary", 5000);
account.addIncome("Freelance", 2000);
account.addExpense("Rent", 1500);
account.addExpense("Groceries", 300);

console.log(account.accountInfo()); 
console.log("Total Income: $" + account.totalIncome()); 
console.log("Total Expense: $" + account.totalExpense()); 
console.log("Account Balance: $" + account.accountBalance()); 
console.log("Incomes: ", account.incomes); 
console.log("Expenses: ", account.expenses); 

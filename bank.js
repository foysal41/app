class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.transactions = []; // Array to store transaction history
  }

  recharge(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount, date: new Date() });
    document.write(`Your account loaded ${amount}`);
  }

  withdraw(amount) {
    if (this.balance < amount) {
      document.write(`Insufficient balance. Please load your account.`);
    } else {
      this.balance -= amount;
      this.transactions.push({ type: "withdrawal", amount, date: new Date() });
    }
  }

  getResult() {
    return this.balance;
  }

  viewFullInformation() {
    document.write(`<br> You Account Number is: ${this.accountNumber} <br>`);
    document.write(`You Name is: ${this.accountHolder} <br> `);
    document.write(`Your Current Balance Is $${this.balance} <br>`);

    // Display transaction history
    document.write("<br> Transaction History: <br>");
    this.transactions.forEach(transaction => {
      document.write(`Type: ${transaction.type}, Amount: ${transaction.amount}, Date: ${transaction.date} <br>`);
    });
  }
}

const account_one = new BankAccount(1001, "Foysal Jaman", 1500);

account_one.recharge(200);
account_one.withdraw(100);
account_one.viewFullInformation();

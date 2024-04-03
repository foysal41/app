class BankAccount {
  constructor (accountNumber , accountHolder , balance){
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  recharge(amount){
    this.balance += amount;
    console.log(`Your account loaded ${amount}`);
  }

  withdwrew(amount){
    if(this.balance <= 0){
      console.log(`You current balance is zero please Load `)
    }else{
      this.balance -= amount;
    }
  }

  getResult(){
    return this.balance;
  }

  viewFullINformation(){
    console.log(`You Account Number is: ${this.accountNumber}`);
    console.log(`You Name is: ${this.accountHolder}`);
    console.log(`Your Curren Balance Is $${this.balance}`);
  }
}


const account_one = new BankAccount(1001 , "Foysal Jaman" , 1500);


account_one.recharge(200);
account_one.viewFullINformation();
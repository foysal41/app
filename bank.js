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
    this.viewFullInformation();

     // Show deposit notification
    this.showNotification("success", `Deposit of $${amount} successful.`);
  }

  withdraw(amount) {
    if (this.balance < amount) {
      document.write(`Insufficient balance. Please load your account.`);
    } else {
      this.balance -= amount;
      this.transactions.push({ type: "withdrawal", amount, date: new Date() });
      this.viewFullInformation();

      // Show withdrawal notification
      this.showNotification("success", `Withdrawal of $${amount} successful.`)
    }
  }

  updatPersonalInfo(newAccountHolder){
    this.accountHolder = newAccountHolder;

    //যখন আমার নাম চেঞ্জ হবে তখন এই নোটিফিকেশন তা দেখাবে 
  this.showNotification("Info" , `Personal information updated successfully`);

  // আপডেট ইনফরমেশন তা দেখার জন্য 
    this.viewFullInformation();
  }

  closeAccount(){
    this.showNotification("Info" , `Account closed successfully.`)
    document.getElementById("account-info").innerHTML = "";
    document.getElementById("account-info-two").innerHTML = "";
  }


  


  getResult() {
    return this.balance;
  }

  viewFullInformation() {

    //INfo html

    let infoHtml =  `
      <h2> Account Information </h2>
      <ul class="account-info">
        <li> <strong> Account Name: </Strong> ${this.accountHolder}  </li>
        <li><strong> Account Number: </strong> ${this.accountNumber} </li>
        <li><strong> Balance: </strong> ${this.balance} </li>
    `;

    document.getElementById("account-info").innerHTML = infoHtml;



    // Display transaction history
   // Initialize the HTML string
let infoHtmlTwo = "<h2>Transaction History</h2><ul class='account-info-two'>";

// Iterate over each transaction and append its details to the HTML string
this.transactions.forEach(transaction => {
  infoHtmlTwo += `<li>Type: ${transaction.type}, Amount: ${transaction.amount}, Date: ${transaction.date}</li>`;
});

// Close the <ul> tag
infoHtmlTwo += "</ul>";

// Set the HTML content to the "account-info-two" element
document.getElementById("account-info-two").innerHTML = infoHtmlTwo;

  }

 // Method to display notifications
  showNotification(type, message){
    const notification = document.createElement("div");
    notification.classList.add("notification" , type);
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() =>{
      notification.remove();
    }, 4000);
  }
}

const account_one = new BankAccount(1001, "Foysal Jaman", 1500);

document.getElementById("transaction-form").addEventListener("submit", function(event){
  event.preventDefault();

  const amount = parseInt(document.getElementById("amount").value);
  account_one.recharge(amount);
});

document.getElementById("withdraw-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value); // Corrected ID
  account_one.withdraw(withdrawAmount);
});


// ব্যক্তিগত তথ্য আপডেট করার জন্য eventListner
document.getElementById("update-info-btn").addEventListener("click" ,
  function(event){
    const newAccountHolder = prompt("Enter Your New Name");

    if(newAccountHolder !== null && newAccountHolder !== ""){
      account_one.updatPersonalInfo(newAccountHolder)
    }
  });

  // ব্যক্তিগত তথ্য Delete করার জন্য 
  document.getElementById("close-account-btn").addEventListener("click" , 
  function(event){
    account_one.closeAccount();
  });


account_one.viewFullInformation();
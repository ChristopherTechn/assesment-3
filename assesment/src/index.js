// // import React from 'react';
// import App from './App';


 class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this._accountNumber =accountNumber;
    this._accountHolder = accountHolder;                  // This is the class library of Bank account.
                                                           
                                                           //using the _underscore element in their names shows the use of 
                                                           //encapsulation in the code. since they can only be accesssed using the getter element. 
    this._balance = balance;
  }

  getAccountNumber() {
    return this._accountNumber;
  }

  getAccountHolder() {                                    //Here we return the values of each.
    return this._accountHolder;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
    console.log(`Deposited ${amount} into account ${this._accountNumber}`);
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew ${amount} from account ${this._accountNumber}`);
    } else {
      console.log(`Insufficient funds in account ${this._accountNumber}`);  
  }
}
}

//SavingsAccount and its properties.
class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, interestRate) {
   
   //here this super keyword is the one used as an inheritance to show
   //the exact class SavingsAccount has inherited some properties of 
   //class BankAccount. and the extend is used to call that class.
      super(accountNumber, accountHolder, balance);
     interestRate=0.05;
  }
//claculates the interest
  calculateInterest() {
    const interest = this._balance * 0.05;
    console.log(`Interest for account ${this._accountNumber}: ${0.05}`);  ///here it calculates the interest for the account which is 0.05.
    return interest;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, overdraftLimit) {
    super(accountNumber, accountHolder, balance);                              //the extends represents inheritance of class BankAccount.
    this._overdraftLimit = overdraftLimit;
  }


  // this one checks how much you withdrew from your account and if it is excess it will 
  // throw an overdraft. meaning you withdrew more money than what is in your bank account.

       //Polymorphism is demonstrated through the withdraw(amount)       
      // method in the CheckingAccount class. While the BankAccount class
    //defines a withdraw(amount) method, the CheckingAccount class overrides
      // this method with its own implementation to support overdraft withdrawals.

  withdraw(amount) {

    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew ${amount} from account ${this._accountNumber}`);
    } else if (amount <= this._balance + this._overdraftLimit) {
      this._balance -= amount;
      console.log(`Withdrew ${amount} from account ${this._accountNumber} (including overdraft)`);  //this is the overdraft if u withdraw more than your account
                                                                                                    //balance plus a 1000 then you can not withdraw.
                                                                                              
    } else {
      console.log(`Withdrawal amount exceeds overdraft limit for account ${this._accountNumber}`);
    }
  }
}

// Create instances of bank accounts
const savingsAccount = new SavingsAccount.toString('70067', 'kANGETHE',5000);
const checkingAccount = new CheckingAccount('Cvbnm', 'wa iria', 2000, 1000);

// const savingsAccountNumber =('saa001')
// const savingsAccountAccountholder =('saa001')
// const savingsAccontBalance =('saa001')



// Retrieve account information
console.log(savingsAccount.getAccountNumber()); 
console.log(savingsAccount.getAccountHolder()); // here we are getting the AccountNumber,Accountname and your balance
console.log(savingsAccount.getBalance()); 

console.log(checkingAccount.getAccountNumber());
console.log(checkingAccount.getAccountHolder()); // here u are checking your accountNumber,Accountname  and your balance
console.log(checkingAccount.getBalance()); 


// Deposit an amount
savingsAccount.deposit(200); //deposit 200
checkingAccount.deposit(500); // Deposited 500 into account Cvbnm

// Withdraw an amount
savingsAccount.withdraw(2000); // Withdrew 2000 from account 70067
checkingAccount.withdraw(4000); // Withdrew 3000 from account Cvbnm (including overdraft)

// interest amount for SavingsAccount
savingsAccount.calculateInterest(); // Interest for account 70067 250


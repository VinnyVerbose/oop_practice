/*

Great. We’ll start with Project 1: Bank Account.

Goal: practice one class managing its own state.

Build a BankAccount class with:

owner
balance
deposit(amount)
withdraw(amount)
getBalance()

Rules:

deposit should increase balance
withdraw should decrease balance
withdraw should not allow balance to go below 0
getBalance should return the current balance

Try writing it first.

*/

class BankAccount{
    constructor(name, startingBalance){
        this.owner = name;
        this.balance = startingBalance;
    }

    deposit(amt){
        this.balance += amt;
    }

    withdrawl(amt){
        const difference = this.balance - amt;
        if(difference > 0){
            this.balance -= amt;
        }else {
            return 'Funds not available';
        }
    }

    getBalance(){
        return this.balance;
    }

}
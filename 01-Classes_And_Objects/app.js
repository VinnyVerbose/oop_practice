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

const account = new BankAccount('Vinny', 100);

console.log(account.owner) // 'Vinny'
console.log(account.getBalance()) // 100

account.deposit(50);
console.log(account.getBalance()) // 150

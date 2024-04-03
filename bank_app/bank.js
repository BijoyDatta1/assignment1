class BankAccount{
    constructor(accountNumber,ownerName,balance){
         this.accountNumber = accountNumber;
         this.ownerName = ownerName;
         this.balance = balance;
    };

    deposit(amount){
        this.balance += amount;
        console.log(`deposit amount $${amount} now total amount is $${this.balance}`);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`withdraw amount $${amount} now total amount is $${this.balance}`);
        }else{
            console.log('Insufficient funds');
        }
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        console.log(`user account number ${this.accountNumber}`);
        console.log(`usser name ${this.ownerName}`);
        console.log(`account balance $${this.balance}`);
    }
}

console.log('user1');
let user1 = new BankAccount(1001,'Bijoy',900);
user1.displayAccountInfo();
user1.deposit(200);
user1.withdraw(500);


console.log('user2');
let user2 = new BankAccount(1002,'Rudro',1000);
user2.displayAccountInfo();
user2.deposit(200);
user2.withdraw(1400);




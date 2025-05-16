{

    // Access Modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;


        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }

    };


    class StudentAccount extends BankAccount {
        test() {

        }
    }


    const myAccount = new BankAccount(111, "Sohun", 20);

    myAccount.addDeposit(200);
    const myBalance = myAccount.getBalance();
    console.log(myBalance);

}
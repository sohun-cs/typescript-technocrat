{

    // Encapsulation
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

        // 1
        private getBalance() {
            return this._balance;
        }


        getHiddenMethod() {
            return this.getBalance();
        }

    };


    class StudentAccount extends BankAccount {
        test() {
            this.getHiddenMethod()
        }
    }


    const myAccount = new BankAccount(111, "Sohun", 20);

    myAccount.addDeposit(200);
    const myBalance = myAccount.getHiddenMethod();
    console.log(myBalance);

}
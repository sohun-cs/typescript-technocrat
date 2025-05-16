{

    // Getter and Setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;


        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }


        set deposit(amount: number) {
            this._balance = this.balance + amount;
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        get balance() {
            return this._balance
        }

        // getBalance() {
        //     return this._balance;
        // }

    };


    const myAccount = new BankAccount(111, "Sohun", 20);

    // myAccount.addDeposit(200);

    myAccount.deposit = 50

    // const myBalance = myAccount.getBalance(); //function call korte hocche

    const myBalance = myAccount.balance; // property er moto kore.
    console.log(myBalance);

}
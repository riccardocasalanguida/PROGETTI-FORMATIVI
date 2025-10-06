class MotherAccount {
    constructor(balance = 0, firstDeposit = 0, firstDraw = 0, secondDeposit = 0, secondDraw = 0) {
        this.balance = balance;
        this.firstDeposit = firstDeposit;
        this.firstDraw = firstDraw;
        this.secondDeposit = secondDeposit;
        this.secondDraw = secondDraw;
    }
    getFirstDeposit() {
        return this.balance + this.firstDeposit;
    }
    getFirstDraw() {
        return this.getFirstDeposit() - this.firstDraw;
    }
    getSecondDeposit() {
        return this.getFirstDraw() + this.secondDeposit;
    }
    getTotalAccount() {
        return this.getSecondDeposit() - this.secondDraw;
    }
}
let saldoAttuale = new MotherAccount(0, 500, 300, 100, 50);
console.log(`SALDO ATTUALE:     ${saldoAttuale.getTotalAccount()}`);
//# sourceMappingURL=test2.js.map
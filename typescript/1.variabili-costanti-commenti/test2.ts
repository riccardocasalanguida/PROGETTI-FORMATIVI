class MotherAccount {
    private balance: number
    private firstDeposit: number
    private firstDraw: number
    private secondDeposit: number
    private secondDraw: number
    
    constructor(
        balance = 0, 
        firstDeposit = 0, 
        firstDraw = 0, 
        secondDeposit = 0,
        secondDraw = 0) {
            this.balance = balance
            this.firstDeposit = firstDeposit
            this.firstDraw = firstDraw
            this.secondDeposit = secondDeposit
            this.secondDraw = secondDraw
    }
    public getFirstDeposit(): number {
        return this.balance + this.firstDeposit
    }
    public getFirstDraw(): number {
        return this.getFirstDeposit() - this.firstDraw
    }
    public getSecondDeposit(): number {
        return this.getFirstDraw() + this.secondDeposit
    }
    public getTotalAccount(): number {
        return this.getSecondDeposit() - this.secondDraw
    }
}
let saldoAttuale = new MotherAccount(0,500,300,100,50) 
console.log(`SALDO ATTUALE:     ${saldoAttuale.getTotalAccount()}`);

package com.inner.classes;

public class AccountSpecifiche {

	private int balance;
	private int firstDeposit;
	private int firstDraw;
	private int secondDeposit;
	private int secondDraw;
	private int canoneAnnuo;
	private int impostaBollo;

	public AccountSpecifiche(int balance, int firstDeposit, int firstDraw, int secondDeposit, int secondDraw,
			int canoneAnnuo, int impostaBollo) {

		this.balance = balance;
		this.firstDeposit = firstDeposit;
		this.firstDraw = firstDraw;
		this.secondDeposit = secondDeposit;
		this.secondDraw = secondDraw;
		this.canoneAnnuo = canoneAnnuo;
		this.impostaBollo = impostaBollo;
	}

	class Operazioni {
		
		public int getFirstDeposit() {
			return balance + firstDeposit;
		}

		public int getFirsDraw() {
			return getFirstDeposit() - firstDraw;
		}

		public int getSecondDeposit() {
			return getFirsDraw() + secondDeposit;
		}

		public int getSecondDraw() {
			return getSecondDeposit() - secondDraw;
		}
		
		public int getInteressi() {
			return getSecondDraw() * canoneAnnuo / 100;
		}
		
		public int getImpostaBollo() {
			return getSecondDraw() * impostaBollo / 100;
		}
		
		public int getTotalAccount() {
			return getSecondDraw() - (getInteressi() + getImpostaBollo());
		}
		
		
		
	}
	
	
	public static void main(String[] args) {

		AccountSpecifiche account = new AccountSpecifiche(0, 1000, 500, 1000, 500, 11, 30);
		AccountSpecifiche.Operazioni ope = account.new Operazioni();
		
		System.out.println("SALDO ATTUALE: " + ope.getTotalAccount());
		
		
		
		
	}

}

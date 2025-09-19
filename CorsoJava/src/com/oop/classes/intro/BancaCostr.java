package com.oop.classes.intro;

public class BancaCostr {
	
	private int balance = 0;
	private int firstDeposit = 0;
	private int firstDraw = 0;
	private int secondDeposit = 0;
	private int secondDraw = 0;
	private int thirdDeposit = 0;
	private int thirdDraw = 0;
	private int canoneAnnuo = 0;
		

	public BancaCostr(int balance, int firstDeposit, int firstDraw, int secondDeposit, int secondDraw, int thirdDeposit,
			int thirdDraw, int canoneAnnuo) {
		this.balance = balance;
		this.firstDeposit = firstDeposit;
		this.firstDraw = firstDraw;
		this.secondDeposit = secondDeposit;
		this.secondDraw = secondDraw;
		this.thirdDeposit = thirdDeposit;
		this.thirdDraw = thirdDraw;
		this.canoneAnnuo = canoneAnnuo;
	}

	public int getFirstDeposit() {
		return balance + firstDeposit;
	}

	public int getFirstDraw() {
		return getFirstDeposit() - firstDraw;
	}

	public int getSecondDeposit() {
		return getFirstDraw() + secondDeposit;
	}

	public int getSecondDraw() {
		return getSecondDeposit() - secondDraw;
	}
	
	public int getThirdDeposit() {
		return getSecondDraw() + thirdDeposit;
	}
	
	public int getThirdDraw() {
		return getThirdDeposit() - thirdDraw;
	}
	
	public int getCanoneAnnuo() {
		return getThirdDraw() - canoneAnnuo;
	}
	
	public int getTotalAccount() {
		return getThirdDraw() - canoneAnnuo;
	}
	
	
	
	public static void main(String[] args) {

		
		BancaCostr banca = new BancaCostr(100,50,20,10,5,50,15,15);
		System.out.println("SALDO ATTUALE: €" + banca.getTotalAccount());		
		
		
	}

}

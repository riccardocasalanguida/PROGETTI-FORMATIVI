package com.oop.interfaces;

public class AccountUnicredit implements IAccountUnicredit, IAccountWeBank {

	
	private int balance;
	private int firstDeposit;
	private int firsDraw;
	private int secondDeposit;
	private int secondDraw;
	private int interessi;
	private int impostaBollo;
	
	
	public AccountUnicredit(int balance, int firstDeposit, int firsDraw, int secondDeposit, int secondDraw,
			int interessi, int impostaBollo) {
		this.balance = balance;
		this.firstDeposit = firstDeposit;
		this.firsDraw = firsDraw;
		this.secondDeposit = secondDeposit;
		this.secondDraw = secondDraw;
		this.interessi = interessi;
		this.impostaBollo = impostaBollo;
		
		
	}

	@Override
	public int getFirstDeposit() {
		return balance + firstDeposit;
	}

	@Override
	public int getFirsDraw() {
		return getFirstDeposit() - firsDraw;
	}

	@Override
	public int getSecondDeposit() {
		return getFirsDraw() + secondDeposit;
	}

	@Override
	public int getSecondDraw() {
		return getSecondDeposit() - secondDraw;
	}
	
	@Override
	public int getInteressi() {
		return getSecondDraw() * interessi / 100;
	}
	
	@Override
	public int getImpostaBollo() {
		return getSecondDraw() * impostaBollo / 100;
	}
	
	@Override
	public int getTotalAccount() {
		return getSecondDraw() - (getInteressi() + getImpostaBollo());
	}
	

	
	public static void main(String[] args) {

		
		AccountUnicredit account = new AccountUnicredit(0,400,100,80,20,10,34);
		System.out.println(account.getTotalAccount());
		
		
		
		
	}


}

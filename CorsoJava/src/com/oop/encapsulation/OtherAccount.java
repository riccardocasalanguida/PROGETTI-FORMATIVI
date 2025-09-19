package com.oop.encapsulation;

public class OtherAccount extends MyAccount{


	private int interest;

	public OtherAccount(int bilancio, int firstDeposit, int secondDeposit, int firstDraw, int secondDraw, int interest) {
		super(bilancio, firstDeposit, secondDeposit, firstDraw, firstDraw, secondDraw);

		this.interest = interest;
	}

	public int getFirstDeposit() {
		return bilancio + firstDeposit;
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
	
	public int getInterest() {
		return getSecondDraw() * interest / 100;
	}	
	
	public int getTotalAccount() {
		return getSecondDraw() - getInterest();
	}
	
}


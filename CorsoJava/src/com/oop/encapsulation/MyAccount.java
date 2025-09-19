package com.oop.encapsulation;

public class MyAccount {
	protected int bilancio;
	protected int firstDeposit;
	protected int secondDeposit;
	protected int firstDraw;
	protected int secondDraw;

	public MyAccount(int bilancio, int firstDeposit, int secondDeposit, int fistDraw, int secondDraw, int firstDraw) {
		this.bilancio = bilancio;
		this.firstDeposit = firstDeposit;
		this.secondDeposit = secondDeposit;
		this.firstDraw = firstDraw;
		this.secondDraw = secondDraw;
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

	public int getTotalAccount() {
		return getSecondDraw();
	}
	
	
	
}

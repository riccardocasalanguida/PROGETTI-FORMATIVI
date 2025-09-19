package com.oop.classes.intro;

public class FirstAccount {      //MainAccount2

	private int balance;
	private int primoDeposito;
	private int primoPrelievo;
	private int secondoDeposito;
	private int secondoPrelievo;


	public void setBalance(int balance) {
		this.balance = balance;
	}
	public int getPrimoDeposito() {
		return balance + primoDeposito;
	}
	public void setPrimoDeposito(int primoDeposito) {
		this.primoDeposito = primoDeposito;
	}
	public int getPrimoPrelievo() {
		return getPrimoDeposito() - primoPrelievo;
	}
	public void setPrimoPrelievo(int primoPrelievo) {
		this.primoPrelievo = primoPrelievo;
	}
	public int getSecondoDeposito() {
		return getPrimoPrelievo() + secondoDeposito;
	}
	public void setSecondoDeposito(int secondoDeposito) {
		this.secondoDeposito = secondoDeposito;
	}
	public int getSecondoPrelievo() {
		return getSecondoDeposito() - secondoPrelievo;
	}
	public void setSecondoPrelievo(int secondoPrelievo) {
		this.secondoPrelievo = secondoPrelievo;
	}
	
	public int getTotaleConto() {
		return getSecondoPrelievo();
	}
	
	
	
	
	
}

package com.oop.classes.intro;

public class NewBank {

	private int saldo;
	private int primoDeposito;
	private int primoPrelievo;
	private int secondoDeposito;
	private int secondoPrelievo;
	private int canoneAnnuo;

	

	public void setSaldo(int saldo) {
		this.saldo = saldo;
	}

	public int getPrimoDeposito() {
		return saldo + primoDeposito;
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

	public int getCanoneAnnuo() {
		return getSecondoPrelievo() * canoneAnnuo / 100;
	}

	public void setCanoneAnnuo(int canoneAnnuo) {
		this.canoneAnnuo = canoneAnnuo;
	}

	public int getSaldoAttuale() {
		return getSecondoPrelievo() - getCanoneAnnuo();
	}



	public static void main(String[] args) {

		NewBank banca = new NewBank();
		banca.setCanoneAnnuo(10);
		banca.setSaldo(500);
		banca.setPrimoDeposito(50);
		banca.setPrimoPrelievo(30);
		banca.setSecondoDeposito(100);
		banca.setSecondoPrelievo(40);
		
		System.out.println("SALDO ATTUALE €" + banca.getSaldoAttuale());	
		
		
		
		
		
	}

}

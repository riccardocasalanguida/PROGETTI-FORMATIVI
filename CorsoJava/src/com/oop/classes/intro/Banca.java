package com.oop.classes.intro;

public class Banca {

	private int saldo = 0;
	private int primoDeposito = 0;
	private int primoPrelievo = 0;
	private int secondoDeposito = 0;
	private int secondoPrelievo = 0;
		
	
	

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
		return primoDeposito - primoPrelievo;
	}

	public void setPrimoPrelievo(int primoPrelievo) {
		this.primoPrelievo = primoPrelievo;
	}

	
	public int getSecondoDeposito() {
		return this.getPrimoPrelievo() + secondoDeposito;
	}

	public void setSecondoDeposito(int secondoDeposito) {
		this.secondoDeposito = secondoDeposito;
	}

	public void setSecondoPrelievo(int secondoPrelievo) {
		this.secondoPrelievo = secondoPrelievo;
	}
	
	public int getTotaleAggiornato() {
		return this.getSecondoDeposito() - secondoPrelievo;
	}

	public String toString() {
		return "All'interno del conto in banca al momento ci sono: " + this.getTotaleAggiornato() + "€.";
	}



	public static void main(String[] args) {
		
		
		Banca banca = new Banca();
		banca.setSaldo(0);
		banca.setPrimoDeposito(500);
		banca.setPrimoPrelievo(100);
		banca.setSecondoDeposito(50);
		banca.setSecondoPrelievo(30);
		
		
		System.out.println(banca);
		
		
		

	}

}

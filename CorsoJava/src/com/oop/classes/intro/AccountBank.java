package com.oop.classes.intro;

public class AccountBank {

	private int saldo;
	private int primoDeposito;
	private int primoPrelievo;
	private int secondoDeposito;
	private int secondoPrelievo;
		
	
	public AccountBank(int saldo, int primoDeposito, int primoPrelievo, int secondoDeposito, int secondoPrelievo) {
		this.saldo = saldo;
		this.primoDeposito = primoDeposito;
		this.primoPrelievo = primoPrelievo;
		this.secondoDeposito = secondoDeposito;
		this.secondoPrelievo = secondoPrelievo;
	}

		public int getPrimoDeposito() {
			return saldo + primoDeposito;
		}
	
		public int getPrimoPrelievo() {
			return getPrimoDeposito() - primoPrelievo;
		}

		public int getSecondoDeposito() {
			return getPrimoPrelievo() + secondoDeposito;
		}
		
		public int getSecondoPrelievo() {
			return getSecondoDeposito() - secondoPrelievo;
		}
		
		public int getSaldoAttuale() {
			return getSecondoPrelievo();
		}
		
		

	public static void main(String[] args) {

		AccountBank banca = new AccountBank(500,50,30,100,40);
		
		System.out.println("SALDO ATTUALE €" + banca.getSaldoAttuale());
		
		
		
	}

}

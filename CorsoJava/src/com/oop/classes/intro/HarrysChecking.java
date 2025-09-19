package com.oop.classes.intro;

//scrivere un programma che costruisca un conto bancario chiamato

//harrysChecking, versi in esso $1000, prelevi da esso $500, prelevi altri $400 e
//infine visualizzi il saldo rimanente.
//Il programma deve poi creare un altro conto bancario chiamato momsSaving,
//utilizzando il costruttore che inizializza la variabile balance.
//Su quest’ultimo conto deve essere poi applicato un interesse del 10%, a seguito
//del quale viene stampato il saldo.

public class HarrysChecking {

	protected int conto;
	protected int primoVersamento;
	protected int primoPrelievo;
	protected int secondoPrelievo;

	public HarrysChecking(int conto, int primoVersamento, int primoPrelievo, int secondoPrelievo) {
		super();
		this.conto = conto;
		this.primoVersamento = primoVersamento;
		this.primoPrelievo = primoPrelievo;
		this.secondoPrelievo = secondoPrelievo;
	}

	public int getPrimoVersamento() {
		return conto + primoVersamento;
	}
	
	public int getPrimoPrelievo() {
		return getPrimoVersamento() - primoPrelievo;
	}
	
	public int getSecondoPrelievo() {
		return getPrimoPrelievo() - secondoPrelievo;	
	}
	
	public int getInteressi() {
		return getSecondoPrelievo() * 10 / 100;
	}
	
	public int getTotale() {
		return getSecondoPrelievo() - getInteressi();
	}

	
	
	
	
}

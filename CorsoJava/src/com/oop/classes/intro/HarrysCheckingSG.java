package com.oop.classes.intro;

public class HarrysCheckingSG {

	protected int conto;
	protected int primoVersamento;
	protected int primoPrelievo;
	protected int secondoPrelievo;

	public void setConto(int conto) {
		this.conto = conto;
	}

	public int getPrimoVersamento() {
		return conto + primoVersamento;
	}

	public void setPrimoVersamento(int primoVersamento) {
		this.primoVersamento = primoVersamento;
	}

	public int getPrimoPrelievo() {
		return getPrimoVersamento() - primoPrelievo;
	}

	public void setPrimoPrelievo(int primoPrelievo) {
		this.primoPrelievo = primoPrelievo;
	}

	public int getSecondoPrelievo() {
		return getPrimoPrelievo() - secondoPrelievo;
	}

	public void setSecondoPrelievo(int secondoPrelievo) {
		this.secondoPrelievo = secondoPrelievo;
	}

	public int getInteressi() {
		return getSecondoPrelievo() * 10 / 100;
	}

	public int getTotale() {
		return getSecondoPrelievo() - getInteressi();
	}

//	public static void main(String[] args) {
//
//		HarrysCheckingSG check = new HarrysCheckingSG();
//		check.setConto(0);
//		check.setPrimoVersamento(1000);
//		check.setPrimoPrelievo(500);
//		check.setSecondoPrelievo(400);
//
//		System.out.println(check.getSecondoPrelievo());
//		
//		HarrysCheckingSG momsSaving = new HarrysCheckingSG();
//		momsSaving.setConto(0);
//		momsSaving.setPrimoVersamento(1000);
//		momsSaving.setPrimoPrelievo(500);
//		momsSaving.setSecondoPrelievo(400);
//		
//		System.out.println(momsSaving.getTotale());
//
//	}

}

//scrivere un programma che costruisca un conto bancario chiamato

//harrysChecking, versi in esso $1000, prelevi da esso $500, prelevi altri $400 e
//infine visualizzi il saldo rimanente.
//Il programma deve poi creare un altro conto bancario chiamato momsSaving,
//utilizzando il costruttore che inizializza la variabile balance.
//Su quest’ultimo conto deve essere poi applicato un interesse del 10%, a seguito
//del quale viene stampato il saldo.
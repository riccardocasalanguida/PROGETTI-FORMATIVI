package com.oop.classes.intro;

public class Professionista {

	private int redditoAnnuoLordo;
	private int coeffRedd;
	private int tassaInps;
	private int tassaIrpef;
	
	public Professionista(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef) {
		super();
		this.redditoAnnuoLordo = redditoAnnuoLordo;
		this.coeffRedd = coeffRedd;
		this.tassaInps = tassaInps;
		this.tassaIrpef = tassaIrpef;
	}

	public int getUtileTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;
	}

	public int getTassaInps() {
		return getUtileTasse() * tassaInps / 100;
	}

	public int getTassaIrpef() {
		return getUtileTasse() * tassaIrpef / 100;
	}

	public int getRedditoAnnuoNetto() {
		return redditoAnnuoLordo - (getTassaInps() + getTassaIrpef()) / 12;
	}
	
	
	
	
	public static void main(String[] args) {

		Professionista prof = new Professionista(80000,78,26,15);
		
		System.out.println("Reddito Lordo: " + prof.redditoAnnuoLordo);
		System.out.println("Utile Tasse: " + prof.getUtileTasse());
		System.out.println("Tassa Inps: " + prof.getTassaInps());
		System.out.println("Tassa Irpef: " + prof.getTassaIrpef());
		System.out.println("Reddito Netto: " + prof.getRedditoAnnuoNetto());
		
	}

}

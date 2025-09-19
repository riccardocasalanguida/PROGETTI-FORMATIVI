package com.oop.encapsulation;

public class Elettricista extends Docente {

	private int inpsFissa;
	private int importoEccedente;

	public Elettricista(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef, int inpsFissa,
			int importoEccedente) {
		super(redditoAnnuoLordo, coeffRedd, tassaInps, tassaIrpef);
		this.inpsFissa = inpsFissa;
		this.importoEccedente = importoEccedente;
	}

	public int getUtileTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;
	}

	public int getTassaIrpef() {
		return getUtileTasse() * tassaIrpef / 100;
	}

	public int getUtileTassaInps() {
		return (redditoAnnuoLordo - importoEccedente) * coeffRedd / 100;
	}

	public int getTassaInps() {
		return getUtileTassaInps() * tassaInps / 100;
	}

	public int getRedditoNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps() + inpsFissa);
	}

}

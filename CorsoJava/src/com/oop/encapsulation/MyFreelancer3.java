package com.oop.encapsulation;

public class MyFreelancer3 {

	protected int redditoAnnuoLordo;
	protected int coeffRedd;
	protected int tassaInps;
	protected int tassaIrpef;

	public void setRedditoAnnuoLordo(int redditoAnnuoLordo) {
		this.redditoAnnuoLordo = redditoAnnuoLordo;
	}

	public void setCoeffRedd(int coeffRedd) {
		this.coeffRedd = coeffRedd;
	}

	public void setTassaInps(int tassaInps) {
		this.tassaInps = tassaInps;
	}

	public void setTassaIrpef(int tassaIrpef) {
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

	public int getRedditoNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps());
	}

}

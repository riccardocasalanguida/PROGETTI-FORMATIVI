package com.oop.encapsulation;

public class MyCommerciante3 extends MyFreelancer3{

	private int inpsFissa;
	private int importoEccedente;
	
	
	
	
	public void setInpsFissa(int inpsFissa) {
		this.inpsFissa = inpsFissa;
	}

	public void setImportoEccedente(int importoEccedente) {
		this.importoEccedente = importoEccedente;
	}
		
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

	public int getTassaIrpef() {
		return getUtileTasse() * tassaIrpef / 100;
	}

	public int getUtileTassaInps() {
		return redditoAnnuoLordo - importoEccedente;
	}
	
	public int getTassaInps() {
		return getUtileTassaInps() * tassaInps / 100;
	}
	
	public int getRedditoNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps());
	}


	
	
	
	
	
	
	
}

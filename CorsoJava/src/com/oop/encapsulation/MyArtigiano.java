package com.oop.encapsulation;

public class MyArtigiano extends MyFreelancer2 {

	private int inpsFissa;
	private int importoEccedente;
	
	public MyArtigiano(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef, int inpsFissa, int importoEccedente) {
		super(redditoAnnuoLordo, coeffRedd, tassaInps, tassaIrpef);
	}
	@Override
	public int getUtileTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;
	}
	@Override
	public int getTassaIrpef() {
		return getUtileTasse() * tassaIrpef / 100;
	}

	public int getUtileTassaInps() {											///////DA RIVEDERE////////////	
		return ((redditoAnnuoLordo - importoEccedente) * coeffRedd / 100) * tassaInps / 100;
	}
	@Override
	public int getTotaleNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getUtileTassaInps() + inpsFissa);
	}
	

}



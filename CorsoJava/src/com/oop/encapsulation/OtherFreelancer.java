package com.oop.encapsulation;

public class OtherFreelancer extends MyFreelancer {

	public OtherFreelancer(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef) {
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
	@Override
	public int getTassaInps() {
		return getUtileTasse() * tassaInps / 100;
	}
	@Override
	public int getTotaleNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps());
	}
	
	
	
	
	
}

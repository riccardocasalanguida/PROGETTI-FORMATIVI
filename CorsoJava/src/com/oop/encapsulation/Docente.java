package com.oop.encapsulation;

public class Docente {

	protected int redditoAnnuoLordo;
	protected int coeffRedd;
	protected int tassaInps;
	protected int tassaIrpef;

	public Docente(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef) {
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

		public int getRedditoNetto() {
			return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps());
		}
		
		
		

}

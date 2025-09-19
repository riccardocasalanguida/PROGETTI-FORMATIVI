package com.oop.classes.intro;

public class ArtigianoCostr {

	private int redditoAnnuoLordo;
	private int coeffRedd;
	private int tassaIrpef;
	private int tassaInps;
	private int aliquotaInps;
	private int importoEccedente;

	public ArtigianoCostr(int redditoAnnuoLordo, int coeffRedd, int tassaIrpef, int tassaInps, int aliquotaInps,
			int importoEccedente) {
		this.redditoAnnuoLordo = redditoAnnuoLordo;
		this.coeffRedd = coeffRedd;
		this.tassaIrpef = tassaIrpef;
		this.tassaInps = tassaInps;
		this.aliquotaInps = aliquotaInps;
		this.importoEccedente = importoEccedente;
	}

//	fino a 15000 paga 24%
//	su 90000 calcolo irpef
//	aliquota irpef solo dopo i 15000

	public int getUtileTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;
	}
	
	public int getTassaIrpef() {
		return getUtileTasse() * tassaIrpef / 100; 
	}
	
	public int getUtileEccedente() {
		return (redditoAnnuoLordo - importoEccedente) * coeffRedd / 100;
	}
	
	public int getTassaInps() {
		return getUtileEccedente() * aliquotaInps / 100;
	}
	
	public int getRedditoNetto() {
		return redditoAnnuoLordo - (getTassaInps() + getTassaIrpef() + tassaInps);
	}
	
	
	public static void main(String[] args) {

		ArtigianoCostr artigiano = new ArtigianoCostr(90000, 67, 15, 3500, 24, 15000);

		
		
		
		
		
	}

}

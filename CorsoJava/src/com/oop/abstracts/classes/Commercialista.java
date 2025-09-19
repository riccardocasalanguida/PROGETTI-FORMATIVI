package com.oop.abstracts.classes;

public class Commercialista extends Idraulico{

	private int redditoAnnuoLordo;
	private int coeffRedd;
	private int tassaInps;
	private int tassaIrpef;
	
	private int inpsFissa;
	private int importoEccedente;
	private int iva;
	
	public Commercialista(               //70000,67,24,15,3000,15000,22
			int redditoAnnuoLordo, 
			int coeffRedd, 
			int tassaInps, 
			int tassaIrpef, 
			int inpsFissa,
			int importoEccedente,
			int iva) {
		
		this.redditoAnnuoLordo = redditoAnnuoLordo;
		this.coeffRedd = coeffRedd;
		this.tassaInps = tassaInps;
		this.tassaIrpef = tassaIrpef;
		this.inpsFissa = inpsFissa;
		this.importoEccedente = importoEccedente;
		this.iva = iva;
	}


	@Override
	public int GetUtileTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;           //70000,67,24,15,3000,15000,22
	}
	@Override
	public int GetTassaIrpef() {
		return GetUtileTasse() * tassaIrpef / 100;
	}
	@Override
	public int GetTassaInps() {
		return GetUtileTasse() * tassaInps / 100;
	}
	@Override
	public int GetTotaleNetto() {
		return redditoAnnuoLordo - (GetTassaIrpef() + GetTassaInps());
	}
	
	
	
	@Override
	public int GetUtileEccedente() {
		return (redditoAnnuoLordo - importoEccedente) * coeffRedd / 100;
	}
	
	public int GetUtileTassaInps() {
		return GetUtileEccedente() * tassaInps / 100;
	}

	public int GetUtileIva() {
		return GetUtileEccedente() * iva / 100;
	}
	@Override	
	public int GetRedditoNetto() {
		return redditoAnnuoLordo - (GetTassaIrpef() + GetTassaInps() + inpsFissa + GetUtileIva());
	}	
	
	
}

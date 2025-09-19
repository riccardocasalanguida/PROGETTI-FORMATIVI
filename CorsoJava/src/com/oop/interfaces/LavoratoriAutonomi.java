package com.oop.interfaces;

public class LavoratoriAutonomi implements IAvvocato, IPsicologa {

	private int redditoAnnuoLordo;
	private int coeffReddito;
	private int aliquotaIrpef;
	private int aliquotaInps;

	public LavoratoriAutonomi(int redditoAnnuoLordo, int coeffReddito, int aliquotaIrpef, int aliquotaInps) {
		this.redditoAnnuoLordo = redditoAnnuoLordo;
		this.coeffReddito = coeffReddito;
		this.aliquotaIrpef = aliquotaIrpef;
		this.aliquotaInps = aliquotaInps;

	}

	@Override
	public int getUtileTasse() {
		return redditoAnnuoLordo * coeffReddito / 100;
	}

	@Override
	public int getTassaIrpef() {
		return getUtileTasse() * aliquotaIrpef / 100;
	}

	@Override
	public int getTassaInps() {
		return getUtileTasse() * aliquotaInps / 100;
	}

	@Override
	public int getRedditoAnnuoNetto() {
		return redditoAnnuoLordo - (getTassaIrpef() + getTassaInps());
	}

	@Override
	public int getStipendioMensile() {
		return getRedditoAnnuoNetto() / 12;
	}

	public static void main(String[] args) {

		LavoratoriAutonomi avvocato = new LavoratoriAutonomi(80000, 78, 15, 15);
		System.out.println("STIPENDIO MENSILE AVVOCATO: " + avvocato.getStipendioMensile());

		LavoratoriAutonomi psicologa = new LavoratoriAutonomi(60000, 78, 15, 15);
		System.out.println("STIPENDIO MENSILE PSICOLOGA: " + psicologa.getStipendioMensile());

	}

}

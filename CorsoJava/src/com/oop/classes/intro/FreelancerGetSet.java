package com.oop.classes.intro;

public class FreelancerGetSet {

	private int redditoAnnuoLordo = 0;
	private int coeffRedd = 0;
	private int tassaInps = 0;
	private int tassaIrpef = 0;

	public void setRedditoAnnuoLordo(int redditoAnnuoLordo) {
		this.redditoAnnuoLordo = redditoAnnuoLordo;
	}

	public int getUtiliTasse() {
		return redditoAnnuoLordo * coeffRedd / 100;
	}

	public void setCoeffRedd(int coeffRedd) {
		this.coeffRedd = coeffRedd;
	}

	public int getTassaInps() {
		return getUtiliTasse() * tassaInps / 100;
	}

	public void setTassaInps(int tassaInps) {
		this.tassaInps = tassaInps;
	}

	public int getTassaIrpef() {
		return getUtiliTasse() * tassaIrpef / 100;
	}

	public void setTassaIrpef(int tassaIrpef) {
		this.tassaIrpef = tassaIrpef;
	}

	public int getRedditoAnnuoNetto() {
		return (redditoAnnuoLordo - (getTassaInps() + getTassaIrpef())) / 12;
	}

	public static void main(String[] args) {

		FreelancerGetSet freelancer = new FreelancerGetSet();
		freelancer.setRedditoAnnuoLordo(85000);
		freelancer.setCoeffRedd(78);
		freelancer.setTassaInps(26);
		freelancer.setTassaIrpef(15);

		System.out.println("Reddito Lordo: " + freelancer.redditoAnnuoLordo);
		System.out.println("Utile Tasse: " + freelancer.getUtiliTasse());
		System.out.println("INPS: " + freelancer.getTassaInps());
		System.out.println("IRPEF: " + freelancer.getTassaIrpef());
		System.out.println("Reddito Netto al Mese: " + freelancer.getRedditoAnnuoNetto());
	}

}

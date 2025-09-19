package com.oop.classes.intro;

public class Freelancer {

	private int redditoAnnuoLordo;
	private int coeffRedd;
	private int tassaInps;
	private int tassaIrpef;
	
	
	
	public Freelancer(int redditoAnnuoLordo, int coeffRedd, int tassaInps, int tassaIrpef) {
		super();
		this.redditoAnnuoLordo = redditoAnnuoLordo;
		this.coeffRedd = coeffRedd;
		this.tassaInps = tassaInps;
		this.tassaIrpef = tassaIrpef;
	}

		public int getUtiliTasse() {
			return redditoAnnuoLordo * coeffRedd / 100;
		}
	
		public int getTassaInps() {
			return getUtiliTasse() * tassaInps / 100;
		}
	
		public int getTassaIrpef() {
			return getUtiliTasse() * tassaIrpef / 100;
		}

		public int getRedditoAnnuoNetto() {
			return (redditoAnnuoLordo - (getTassaInps() + getTassaIrpef())) / 12;
		}
		
		
	public static void main(String[] args) {
		Freelancer freelancer = new Freelancer(85000, 78, 26, 15);
		
		System.out.println("Reddito Lordo: " + freelancer.redditoAnnuoLordo);
		System.out.println("Utile Tasse: " + freelancer.getUtiliTasse());
		System.out.println("Tassa Inps: " + freelancer.getTassaInps());
		System.out.println("Tassa Irpef: " + freelancer.getTassaIrpef());
		System.out.println("Reddito Annuo Netto: " + freelancer.getRedditoAnnuoNetto());
	}

}

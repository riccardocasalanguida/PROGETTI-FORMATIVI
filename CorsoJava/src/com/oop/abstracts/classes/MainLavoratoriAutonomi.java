package com.oop.abstracts.classes;

public class MainLavoratoriAutonomi {

	public static void main(String[] args) {

		Commercialista comm = new Commercialista(70000,67,24,15,3000,15000,22);
		
		System.out.println("Reddito Netto Commercialista: " + comm.GetTotaleNetto());
		
		Commercialista idra = new Commercialista(70000,67,24,15,3000,15000,22);
		
		System.out.println("Reddito Netto Idraulico: " + idra.GetRedditoNetto());
		
		Commercialista psic = new Commercialista(70000,67,24,15,3000,15000,22);
		
		System.out.println("Reddito Netto Psicologa: " + psic.GetTotaleNetto());		
		
	}

}

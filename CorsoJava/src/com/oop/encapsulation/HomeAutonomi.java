package com.oop.encapsulation;

public class HomeAutonomi {       ////////INCAPSULAMENTO POLIMORFISMO EREDITARIETA'///////////@Override da rivedere///////

	public static void main(String[] args) {

		Docente doc = new Docente(80000,67,26,15);
		System.out.println("Reddito netto Docente: " + doc.getRedditoNetto());
		
		
		Elettricista ele = new Elettricista(90000,67,24,15,3500,15000);
		System.out.println("Reddito netto Elettricista: " + ele.getRedditoNetto());
		
		
	}

}

package com.oop.classes.intro;

public class MainAnagrafica {

	public static void main(String[] args) {

		Anagrafica dati = new Anagrafica();

		dati.setNome("Riccardo");
		dati.setCognome("Casalanguida");
		dati.setTitoloDiStudio("Diploma");
		dati.setNazione("Italia");
				
		System.out.println(dati.getNome());
		System.out.println(dati.getCognome());
		System.out.println(dati.getTitoloDiStudio());
		System.out.println(dati.getNazione());
		
		DatiAnagrafica dati2 = new DatiAnagrafica();

		dati2.setNome("Mario");
		dati2.setCognome("Rossi");
		dati2.setTitoloDiStudio("Laurea");
		dati2.setNazione("Italia");
		
		System.out.println("-----------------------");
		System.out.println(dati2.getNome());
		System.out.println(dati2.getCognome());
		System.out.println(dati2.getTitoloDiStudio());
		System.out.println(dati2.getNazione());
		
	}

}

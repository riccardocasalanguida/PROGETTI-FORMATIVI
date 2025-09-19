package com.collections;

import java.util.*;

public class StudenteComparatore {

	// Ordina gli studenti in base all’età crescente.

	public static void main(String[] args) {
		List<Studente> studentiA = new ArrayList<>();
		studentiA.add(new Studente("Mario", "Rossi", 23));
		studentiA.add(new Studente("Gennaro", "Verdi", 21));
		studentiA.add(new Studente("Paolo", "Bianchi", 40));
		studentiA.add(new Studente("Riccardo", "Bruni", 35));
		studentiA.add(new Studente("Paolo", "Biondi", 15));
		studentiA.add(new Studente("Marco", "Neri", 19));

//      studenti.sort(Comparator.comparingInt(s -> s.getEta()));

//		studentiA.removeIf(s -> s.getEta() < 20);
//
//		for (Studente s : studentiA)
//			System.out.println(s);

//		List<Studente> studentiB = new ArrayList<>();
//		studentiB.add(new Studente("Guido", "Giallini", 37));
//		studentiB.add(new Studente("Alfredo", "Rossi", 31));
//		studentiB.add(new Studente("Sandra", "Giusti", 47));
//		
//		studentiA.addAll(studentiB);
//		for (Studente s : studentiA)
//			System.out.println(s);
//		

//		int contatore = 0;
//		for (Studente s : studentiA) {
//			if (s.getNome().equals("Anna")) {
//				contatore++;
//			}
//		}
//		System.out.println("Anna compare nella lista " + contatore + " volte");		
		
		//Trova e stampa lo studente con età minore.
		
		Studente giovane = studentiA.get(0);
		for (Studente b : studentiA) {
			if (b.getEta() < giovane.getEta()) {
				giovane = b;
			}
		}
		System.out.println("Studente più giovane: " + giovane);

		
		
		
	}

}





package com.oop.classes.intro;

public class MainDipendente2 {

	public static void main(String[] args) {
		Dipendente2 dipendente = new Dipendente2("001A", 1800f, 30);
		System.out.println(dipendente.stampa());

		Dipendente2A dipendenteA = new Dipendente2A("001A", 1800f, 30, 0);

		dipendenteA.prendiMalattia(7);
		System.out.println(dipendenteA.paga(5));
		dipendenteA.stampaMalattia();
	}

}


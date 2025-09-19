package com.collections;

import java.util.ArrayList;

public class Studenti {        ////////////RILEGGERE SPIEGAZIONE/////////////

	private String nome;
	private int eta;

	public Studenti(String nome, int eta) {

		this.nome = nome;
		this.eta = eta;
	}

	public String toString() {
		return nome + " " + eta + " anni";
	}

	public static void main(String[] args) {

		ArrayList<Studenti> studenti = new ArrayList<>();

		studenti.add(new Studenti("Mario", 15));
		studenti.add(new Studenti("Luca", 24));
		studenti.add(new Studenti("Lucia", 26));
		studenti.add(new Studenti("Riccardo", 18));

//		for (Studenti i : studenti) {
//			System.out.println(i);
//		}

//		for (Studenti i : studenti) {
//			if (i.eta >= 20)
//			System.out.println(i);
//		}
		
		
		
		
		
	}

}              

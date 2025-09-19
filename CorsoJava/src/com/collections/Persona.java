package com.collections;

import java.util.*;

public class Persona {

	private String nome;
	private String cognome;
	private int età;

	public Persona(String nome, String cognome, int età) {

		this.nome = nome;
		this.cognome = cognome;
		this.età = età;
	}

	public String toString() {
		return nome + " " + cognome + " " + età;
	}
	


	public static void main(String[] args) {

		Persona p1 = new Persona("Riccardo","Casalanguida",39);
		Persona p2 = new Persona("Mario","rossi",35);
		
		ArrayList<Persona> pers1 = new ArrayList<>(List.of(p1));
		ArrayList<Persona> pers2 = new ArrayList<>(List.of(p2));	

		pers1.addAll(pers2);
		pers1.sort((x, y) -> x.età - y.età);
		System.out.println(pers1);
		
	
	}

}

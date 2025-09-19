package com.oop.classes.intro;

public class Corso {
	
//	//MODEL (SI METTE TUTTO FINO AI METODI DELLA CLASSE,
//	//POI SI CREANO ALTRI FILE CON IL MAIN)
//
//	// ATTRIBUTI DELLA CLASSE                //// TUTTO IN QUESTO ORDINE////
//	private int ore = 0;
//	private String oggettoCorso = "";
//	private String frequenza = "";
//	
//	
//	
//	// COSTRUTTORE (metodo speciale di java) DELLA CLASSE   //DICHIARAZIONE DEL COSTRUTTORE
//	public Corso(int ore, String oggettoCorso, String frequenza) {
//		super();
//		this.ore = ore;
//		this.oggettoCorso = oggettoCorso;
//		this.frequenza = frequenza;
//	}
//
//	
//	//METODI DELLA CLASSE	
//	public int getOre() {
//		return ore;
//	}
//
//	
//	
//	
//	
//	// DA QUI IN POI SI CREANO ALTRI FILE //(nota: void metodo che non restituisce nulla)
//	public static void main(String[] args) {
//		
//		//ARGOMENTI E INIZIALIZZAZIONE DEL COSTRUTTORE
//		Corso corso = new Corso (248,"Backend","Settimanale");
//	
//		System.out.println(corso.frequenza); //ATTRIBUTO
//		System.out.println(corso.getOre()); //METODO
		
	
	private String nome = "";
	private int age = 0;
	private String nation = "";
	private String city = "";
	
	
	
	public Corso(String nome, int age, String nation, String city) {
		this.nome = nome;
		this.age = age;
		this.nation = nation;
		this.city = city;
	}


	public static void main(String[] args) {

	Corso studente = new Corso("Riccardo", 39, "Italia", "Pescara");
	
	System.out.println(studente.nome);
	System.out.println(studente.age);
	System.out.println(studente.city);
	
		
	}

}

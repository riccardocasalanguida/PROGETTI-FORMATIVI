package com.oop.classes.intro;

public class NewDipendente {

	private int stipendio;
	private int oreLavorate;
	
	public NewDipendente(int stipendio, int oreLavorate) {
		this.stipendio = stipendio;
		this.oreLavorate = oreLavorate;
	}

	
	public int getRetribuzioneOraria() {
		return stipendio / oreLavorate;
	}
		
	
	public static void main(String[] args) {

		NewDipendente dipendente = new NewDipendente(1200, 80);
		
		System.out.println("La retribuzione oraria è di €" + dipendente.getRetribuzioneOraria());
		
		
		
	}

}

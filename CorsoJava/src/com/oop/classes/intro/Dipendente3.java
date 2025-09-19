package com.oop.classes.intro;

public class Dipendente3 {

	private String nome;
	private double stipendio;

	public Dipendente3() {
	}

	public Dipendente3(String nome, double stipendio) {
		this.nome = nome;
		this.stipendio = stipendio;
	}

	public String getNome() {
		return nome;
	}
	
	public double getStipendio() {
		return stipendio;
	}
	
	public void setStipendio(double nuovoStipendio) {
		this.stipendio = nuovoStipendio;
	}
	
	public void setNome(String nuovoNome) {
		this.nome = nuovoNome;
	}
	
	public void aumento(double percentuale) {
		this.stipendio = this.stipendio + (stipendio * percentuale) / 100;
	}
	
	
	
	
}

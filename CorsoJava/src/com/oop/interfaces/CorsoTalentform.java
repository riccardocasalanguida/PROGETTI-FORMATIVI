package com.oop.interfaces;

public class CorsoTalentform implements ICorsoTalentform {


	private String durataCorso;
	private String tecnologieCorso;
	private int numeroStudentiCorso;
	private String momdalitaCorso;
	

	public CorsoTalentform(String durataCorso, String tecnologieCorso, int numeroStudentiCorso, String momdalitaCorso) {
		super();
		this.durataCorso = durataCorso;
		this.tecnologieCorso = tecnologieCorso;
		this.numeroStudentiCorso = numeroStudentiCorso;
		this.momdalitaCorso = momdalitaCorso;
	}
	

	

	@Override
	public String getDurataCorso() {
		return durataCorso;
	}

	@Override
	public String getTecnologieCorso() {
		return tecnologieCorso;
	}

	@Override
	public int getNumeroStudentiCorso() {
		return numeroStudentiCorso;
	}

	@Override
	public String getModalitaCorso() {
		return momdalitaCorso;
	}
	
	
	
	public static void main(String[] args) {

		CorsoTalentform corso = new CorsoTalentform("248 ORE","BACKEND-FRONTEND",15,"ONLINE");
				
		System.out.println("DURATA CORSO: " + corso.getDurataCorso());		
		System.out.println("TECNOLOGIE CORSO: " + corso.getTecnologieCorso());		
		System.out.println("NUMERO STUDENTI CORSO: " + corso.getNumeroStudentiCorso());
		System.out.println("MODALITA' CORSO: " + corso.getModalitaCorso());
		
		
		
	}

	
	

}

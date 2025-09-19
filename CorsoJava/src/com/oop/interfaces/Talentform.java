package com.oop.interfaces;

public class Talentform implements IBackend, IFrontend {

	private String projectWork;
	private int numeroOre;
	private String tecnologia;
	private int numeroStudenti;
	
	
	public Talentform(String projectWork, int numeroOre, String tecnologia, int numeroStudenti) {
		super();
		this.projectWork = projectWork;
		this.numeroOre = numeroOre;
		this.tecnologia = tecnologia;
		this.numeroStudenti = numeroStudenti;
		
	}

	@Override
	public String getProjectWork() {
		return projectWork;
	}

	@Override
	public int getNumeroOre() {
		return numeroOre;
	}

	@Override
	public String getTecnologia() {
		return tecnologia;
	}

	@Override
	public int getNumeroStudenti() {
		return numeroStudenti;
	}

	public static void main(String[] args) {

		Talentform back = new Talentform("Applicativo FullStack", 128, "Java", 13);
		System.out.println("TIPOLOGIA PROGETTO: " + back.getProjectWork());
		System.out.println("MONTE ORE: " + back.getNumeroOre());
		System.out.println("TECNOLOGIA" + back.getTecnologia());
		System.out.println(back.getNumeroStudenti());
		System.out.println("");
		
		Talentform front = new Talentform("Applicativo FullStack", 60, "React", 13);
		System.out.println(front.getProjectWork());
		System.out.println(front.getNumeroOre());
		System.out.println(front.getTecnologia());
		System.out.println(front.getNumeroStudenti());
		
		
	}

}

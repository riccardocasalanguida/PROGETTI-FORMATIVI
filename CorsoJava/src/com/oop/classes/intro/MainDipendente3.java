package com.oop.classes.intro;

public class MainDipendente3 {

	public static void main(String[] args) {

		Dipendente3 nuovoDip = new Dipendente3();
		nuovoDip.setNome("Riccardo");
		nuovoDip.setStipendio(1400.50);
		nuovoDip.aumento(10);

		System.out.println("Nome Dipendente: " + nuovoDip.getNome() + " €" + nuovoDip.getStipendio());

		Dipendente3 dip3 = new Dipendente3("Bruno", 1300.50);
		dip3.aumento(10);
		System.out.println("Nuovo Dipendente: " + dip3.getNome() + " €" + dip3.getStipendio());

	}

}

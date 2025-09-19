package com.oop.classes.intro;

public class MainHarrysCheckingSG {

	public static void main(String[] args) {

		HarrysCheckingSG check = new HarrysCheckingSG();
		check.setConto(0);
		check.setPrimoVersamento(1000);
		check.setPrimoPrelievo(500);
		check.setSecondoPrelievo(400);

		System.out.println(check.getSecondoPrelievo());

		HarrysCheckingSG momsSaving = new HarrysCheckingSG();
		momsSaving.setConto(0);
		momsSaving.setPrimoVersamento(1000);
		momsSaving.setPrimoPrelievo(500);
		momsSaving.setSecondoPrelievo(400);

		System.out.println(momsSaving.getTotale());

	}

}

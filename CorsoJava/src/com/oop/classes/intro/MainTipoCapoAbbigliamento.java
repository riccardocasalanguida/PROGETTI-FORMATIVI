package com.oop.classes.intro;

public class MainTipoCapoAbbigliamento {

	public static void main(String[] args) {

		TipoCapoAbbigliamento t = new TipoCapoAbbigliamento("Adidas", "Estivo", 50.99);
		System.out.println(t.getApplicaSconto(10));
		System.out.println("");
		
		
		CapoAbbigliamento c = new CapoAbbigliamento("Adidas", "Estivo", 50.99, 28, 3, 2);
		c.venduto(2);
		c.getDettagli();
		
	}

}

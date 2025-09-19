package com.oop.abstracts.classes;

public class MainAppWeb {

	public static void main(String[] args) {          ///////////////////DA RIIVEDERE///////////////////

		
		ProductAppWeb app = new ProductAppWeb();
		app.setTariffa(250);
		app.setDaysFigma(30);
		app.setDaysMockup(30);
		app.setDaysDBOffline(30);
		app.setDaysResponsive(30);
		app.setDaysMultilanguage(30);
		
		System.out.println("Costo Totale app: " + app.getTotalPriceApp());
		
		
	}

}

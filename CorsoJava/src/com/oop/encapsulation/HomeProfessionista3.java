package com.oop.encapsulation;

public class HomeProfessionista3 {

	public static void main(String[] args) {

		MyFreelancer3 free = new MyFreelancer3();
		free.setRedditoAnnuoLordo(75000);
		free.setCoeffRedd(77);
		free.setTassaIrpef(26);
		free.setTassaInps(15);
		
		System.out.println("Reddito netto: " + free.getRedditoNetto());
		
		
		MyCommerciante3 comm = new MyCommerciante3();
		comm.setRedditoAnnuoLordo(85000);
		comm.setCoeffRedd(67);
		comm.setTassaInps(24);
		comm.setTassaIrpef(15);
		comm.setInpsFissa(3500);
		comm.setImportoEccedente(15000);
		
		System.out.println("Reddito netto: " + comm.getRedditoNetto());
	}

}

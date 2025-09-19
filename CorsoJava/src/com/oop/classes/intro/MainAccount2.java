package com.oop.classes.intro;

public class MainAccount2 {      //MainAccount2

	public static void main(String[] args) {

		FirstAccount first = new FirstAccount();
		first.setBalance(0);
		first.setPrimoDeposito(300);
		first.setPrimoPrelievo(50);
		first.setSecondoDeposito(100);
		first.setSecondoPrelievo(20);
		
		System.out.println("Saldo First Account: €" + first.getTotaleConto());
		
		SecondAccount second = new SecondAccount();
		second.setBalance(0);
		second.setPrimoDeposito(400);
		second.setPrimoPrelievo(50);
		second.setSecondoDeposito(70);
		second.setSecondoPrelievo(30);
		second.setCanoneAnnuo(22);
		
		System.out.println("Saldo Second Account: €" + second.getContoFinale());
		
		
	}

}

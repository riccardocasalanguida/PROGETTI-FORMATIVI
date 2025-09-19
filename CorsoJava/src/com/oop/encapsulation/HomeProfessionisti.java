package com.oop.encapsulation;

public class HomeProfessionisti {

	
	public static void main(String[] args) {

		MyFreelancer2 free = new MyFreelancer2(75000,77,26,15);
		System.out.println(free.getTotaleNetto());
		
		MyArtigiano art = new MyArtigiano(75000,67,24,15,3500,15000);
		System.out.println(art.getUtileTassaInps());
		System.out.println(art.getTotaleNetto());
	}

}

package com.oop.encapsulation;

public class HomeProfessionista{
	


	public static void main(String[] args) {

		MyFreelancer free = new MyFreelancer(85000,67,26,15);
			System.out.println(free.getTotaleNetto());
			
		OtherFreelancer free2 = new OtherFreelancer(75000,78,26,5);
			System.out.println(free2.getTotaleNetto());			
		
	}

}

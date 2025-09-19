package com.math.date;

public class IntroMath {

	public static void main(String[] args) {

//			System.out.println("Round Down " + Math.round(10.4));
//			System.out.println("Round Up " + Math.round(10.8));
//			System.out.println("Round ? " + Math.round(10.5));
//
//			System.out.println("Round Up " + Math.floor(10.8));
//			System.out.println("Round Down " + Math.ceil(10.4));
//
//			System.out.println("Pow " + Math.pow(3, 3));
//			System.out.println("Random " + Math.random());
//			System.out.println("Round Down " + Math.sqrt(9));

//		int numero = -10;
//		System.out.println("Il valore assoluto è " + Math.abs(numero));
//
//		System.out.println("2 elevato alla 5 è " + Math.pow(2, 5));
//		System.out.println("La radice quandrata di 49 è " + Math.sqrt(49));
//		System.out.println("Arrotondamento: " + Math.round(3.6));		
//		System.out.println("Il valore max è " + Math.max(15, 27));	
//		System.out.println("Il valore min è " + Math.min(23, 12));
//		System.out.println("Il valore è " + Math.random());
		
		int numRandom = (int)(Math.random() * 6) + 1;
		System.out.println("Il valore è " + numRandom);
	
		double raggio = 5;
		double area = Math.PI * Math.pow(raggio, 2);
		
		System.out.println(area);
		
		
	}
	

}

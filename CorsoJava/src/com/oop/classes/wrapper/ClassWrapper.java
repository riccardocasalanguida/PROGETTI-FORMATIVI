package com.oop.classes.wrapper;

public class ClassWrapper {

	public static void main(String[] args) {
	
		// BOXING 
		
		
//		Integer number = new Integer(5);
//		System.out.println(number);
//		
//		Double db = Double.valueOf(25.30d);
//		
//		System.out.println(db);
//		
//		
//		
//		// AUTOBOXING 
//		
//		Integer numbers = 35;
//		
//		
//		System.out.println(numbers);
//		
//		
//		Double dbl = 15.3d;
//		
//		System.out.println(dbl);
//		
//		// UNBOXING 
//		
//		
//		
//		int nb = number;
//
//		
//		System.out.println(nb);
//		
//		double dobl = dbl;
//		
//		System.out.println(dobl);
		
		
		
		
		int num = 15;
		
		Integer numA = num;
		
		System.out.println(numA);
		
		////////
		
		Double dob = new Double(50.35d);
		
		double dou = dob;
		
		System.out.println(dou);
		
		///////
		
		String numeri = "123";
		
		int n = Integer.parseInt(numeri);
		
		System.out.println(n);
		
		////////
		
		String dato = "45";
		
		Integer n2 = Integer.valueOf(dato);
			
		System.out.println(n2);
		
		///////
		
		Integer ogg1 = 1000;
		Integer ogg2 = 1000;
		
		if (ogg1 == ogg2) {
			System.out.println("sono uguali");
		}
		else {
			System.out.println("sono diversi");
		}
		
		System.out.println("ogg1 e ogg2 sono uguali: " + ogg1.equals(ogg2));
		
		
		////////
		
		String t = "true";
		
		Boolean.parseBoolean(t);
		
		System.out.println(t);
		
		///////
		
		String s = "127";
		
		Byte b = Byte.valueOf(s); ///quando maiscolo (oggetto es. Byte) si usa il .valueOf
		byte c = Byte.parseByte(s); ///quando minuscolo (primitivo es. byte) si usa il .parse
		
		System.out.println(b);
		System.out.println(c);
		
		////////
		
		char a = '9';
		
		boolean boo = Character.isDigit(a);
		
		System.out.println(boo);
		
//		– Character.isDigit()
//		Traccia:
//		Verifica se il carattere '9' è una cifra numerica.
		
		///////
		
		//Converti la stringa "3.14" in un valore float.
		
		
		
		////////

		Double a1 = Double.valueOf(4.6d);
		Double a2 = Double.valueOf(4.5d);
		int check = Double.compare(a1, a2);
		System.out.println(check);
		
		/////////

		String bbb = "12345";
		
		Short aaa = Short.valueOf(bbb);
		
		System.out.println(aaa);
		
		///////

		Integer numb = new Integer(100);
		Integer numb1 = 10;
		String str = "Numero: " + numb1;
		System.out.println(str);
		
		//////
		
		Integer arr[] = {1,2,3,4,5};
		
		for (Integer arr1 : arr) {
			System.out.println(arr1);
		}
		
		
	}

}

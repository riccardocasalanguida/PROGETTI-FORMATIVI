package com.collections;

import java.util.*;

public class EserciziIterator {

	public static void main(String[] args) {

		List<String> nomi = Arrays.asList("Riccardo","Lucia","Sandro","Alessia");
		Iterator<String> it = nomi.iterator();
		System.out.println(nomi);
		System.out.println("");
		while (it.hasNext()) {
			System.out.println(it.next());
		}
		System.out.println("");
		List<String> nomi2 = Arrays.asList("Riccardo","Lucia","Sandro","Alessia");
		Iterator<String> it2 = nomi2.iterator();
		System.out.println("");
		int count = 0;
		while (it2.hasNext()) {
			it2.next();
			count++;
			System.out.println(count);
		}
		System.out.println("");
		List<Integer> num = Arrays.asList(5,10,15,20);
		Iterator<Integer> it3 = num.iterator();
		int somma = 0;
		while (it3.hasNext()) {
			somma = somma + it3.next();
		}
		System.out.println(somma);
		System.out.println("");
		//////////////
		Iterator<Integer> it4 = num.iterator();
		int numMax = it4.next();
		while (it4.hasNext()) {
		int n = it4.next(); 
		if (n > numMax) numMax = n;
		}
		System.out.println(numMax);
		System.out.println("");
		///////////////
		Iterator<Integer> it5 = num.iterator();
		int numMin = it5.next();
		while (it5.hasNext()) {
		int n = it5.next(); 
		if (n < numMin) numMin = n;
		}
		System.out.println(numMin);
		System.out.println("");
		//////////////
		Iterator<Integer> it6 = num.iterator();
		boolean presente = false;
		while (it6.hasNext()) {
			if (it6.next() == 25) {
				presente = true; 
				break;
			}
		}
		System.out.println("Il valore ricercato è presente? " + presente);
		System.out.println("");
		///////////////////
		List<String> nomi3 = Arrays.asList("Luca","Riccardo","Lucia","Sandro","Alessia");
		List<String> nomiCopia = new ArrayList<>();
		Iterator<String> it7 = nomi3.iterator();
		while (it7.hasNext()) {
			String nome = it7.next();
			nomiCopia.add(nome);
		}
		System.out.println(nomi3);
		System.out.println(nomiCopia);
		System.out.println("");
		
		
		
		
		
		
		
		
		
		
		
		
	}

}

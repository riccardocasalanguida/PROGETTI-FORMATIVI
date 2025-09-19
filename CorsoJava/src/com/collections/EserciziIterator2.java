package com.collections;

import java.util.*;

public class EserciziIterator2 {

	public static void main(String[] args) {
		
		List<Integer> num = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));
		int numeriInteri = 0;
		int elemento = 0;
		Iterator<Integer> it = num.iterator();
		while (it.hasNext()) {
			elemento = it.next();
			if (elemento % 2 == 0)
				numeriInteri++;
		}
		System.out.println("I numeri interi presenti sono: " + numeriInteri);
		System.out.println("");
		///////////////////
		List<Integer> n = Arrays.asList(50, 40, 80);  
		List<Integer> t = new ArrayList<>(); 
		Iterator<Integer> i = n.listIterator();       
		while(i.hasNext()) {                 
		    t.add((int)i.next()*2);          
		}                                    
		System.out.println(n);               
		System.out.println(t);
		System.out.println("");
		///////////////////
		List<String> stringhe = Arrays.asList("hello", " ", "world");  
		Iterator<String> it2 = stringhe.listIterator();                         
		String frase = "";                                             
		while (it2.hasNext()) {                                         
		    String e = (String)it2.next();                              
		    frase = frase.concat(e);                                   
		}                                                              
		System.out.println(frase);
		System.out.println("");
		///////////////
		Set<String> words = new HashSet<>(Arrays.asList("Scarpa", "Cavallo", "Astuccio", "Borsa", "Ancora"));
		Iterator<String> it3 = words.iterator();
		int count = 0;
		while (it3.hasNext()) {
			if (it3.next().startsWith("A")) {
				count++;
			}
		}
		System.out.println("Parole che iniziano per \"A\": " + count);
		System.out.println("");
		List<Integer> num4 = new ArrayList<>(List.of(1,2,3,4,5,6));
        Iterator<Integer> it4 =num4.iterator();
        int cont = 0;
        while (it4.hasNext()) {
        	int pari = it4.next();
        	if(pari % 2 ==0) {
        		cont++;
        	}
        }
        System.out.println("I numeri pari presenti sono: " + cont);
        
		
		
		
		
	}

}

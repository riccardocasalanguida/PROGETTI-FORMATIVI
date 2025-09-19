package com.collections;

import java.util.*;

//arraylist è una lista dove si può scorrere e ritrovare tutti i valori che sono "fermi" nell'array,
//mentre nell'hashset gli elementi sono aggiunti in una "tabella" ma non hanno posizione secifica
//non si possono inserire duplicati, non si può usare il metodo get

public class EsercizioHashSet {

	public static void main(String[] args) {

//		HashSet<String> colori = new HashSet<>();
//		
//		colori.add("bianco");
//		colori.add("nero");
//		colori.add("verde");
//		colori.add("nero");
//		colori.add("giallo");
//		colori.add("bianco");
//		
//		
//		System.out.println("Colori presenti nell'HashSet:");
//        for (String colore : colori) {
//            System.out.println(colore);
//        }
		
		
		
		
		

//		HashSet<String> città = new HashSet<>(List.of("Milano","Pescara","Roma","Bari"));
//		HashSet<String> città = new HashSet<>();
//		
//		città.add("Palermo");
//		città.add("Pescara");
//		città.add("Rovigo");
//		città.add("Verona");

//      HashSet<String> città2 = new HashSet<>(List.of("Palermo","Rovigo","Verona","Pescara"));
//      HashSet<String> città2 = new HashSet<>();
//      
//      
//      città2.add("Palermo");
//      città2.add("Rovigo");
//      città2.add("Verona");
//      città2.add("Pescara");
		
		
		
		
		
		
		
//        città.clear();
//        System.out.println("L'Hashset è vuoto? " + città.isEmpty());

//        System.out.println("");
//		System.out.println("Città presenti nell'HashSet:");
//        for (String city : città) {
//        	System.out.println(city);
//        }
        
//        città.retainAll(città2);
//        
//        System.out.println(città);
        
        
//        città2.addAll(città);
//        
//        System.out.println(città2);

        
//		città.removeAll(città2);
//		
//		System.out.println("Città Presenti solo nel primo HashSet: " + città);
		
//        List<String> arrCittà = new ArrayList<>(città2);
//        System.out.println(arrCittà);
//		
//		System.out.println(città.equals(città2) ? "è uguale" : "è diverso");
		
		HashSet<Integer> numA = new HashSet<>();
		
		numA.add(10);
		numA.add(20);
		numA.add(5);
		numA.add(15);
		numA.add(30);
		
		
		int somma = 0;
		for (Integer i : numA) {
			somma = somma + i;
		}
		
		System.out.println(somma);	
		
		 
		
		
		
		
		
		
	}
}

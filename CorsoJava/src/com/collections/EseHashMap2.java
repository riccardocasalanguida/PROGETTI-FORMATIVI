package com.collections;

import java.util.*;

public class EseHashMap2 {

	public static void main(String[] args) {

		String[] nomi = { "Riccardo", "Lucia", "Mario" };
		Integer[] età = { 25, 30, 28 };
		HashMap<String, Integer> pers = new HashMap<>();
		for (int i = 0; i < nomi.length; i++) {
			pers.put(nomi[i], età[i]);
		}
		System.out.println(pers);
		System.out.println("");
		String frase = "Testo di prova per esercizio di occorrenze per frase";
		HashMap<String, Integer> cont = new HashMap<>();
		for (String i : frase.split(" ")) {
			cont.put(i, cont.getOrDefault(i, 0) + 1);
		}
		System.out.println(cont);
		System.out.println("");
		HashMap<String, Integer> original = new HashMap<>(Map.of("Riccardo", 20, "Sara", 25, "Mario", 32));
		HashMap<Integer, String> inverted = new HashMap<>();
//		for (Map.Entry<String, Integer> i : original.entrySet()) {
//			inverted.put(i.getValue(), i.getKey());
//		}
		for (String i : original.keySet()) {

			inverted.put(original.get(i), i);
		}
		System.out.println(original);
		System.out.println(inverted);
		System.out.println("");
		String maxKey = Collections.max(original.entrySet(), Map.Entry.comparingByValue()).getKey();
		System.out.println(maxKey);
		String minKey = Collections.min(original.entrySet(), Map.Entry.comparingByValue()).getKey();
		System.out.println(minKey);
		System.out.println("");
		HashMap<Integer, Integer> numA = new HashMap<>(Map.of(1, 10, 2, 20, 3, 30));
		HashMap<Integer, Integer> numB = new HashMap<>(Map.of(4, 40, 5, 50, 6, 60));
		int sommaValoriA = 0;
        for (Integer valoreA : numA.values()) {
            sommaValoriA += valoreA;
        }
        for (Map.Entry<Integer, Integer> entry : numB.entrySet()) {
            entry.setValue(entry.getValue() + sommaValoriA);
        }
        System.out.println("Mappa A: " + numA);
        System.out.println("Mappa B (dopo la somma): " + numB);
        ///////////DA RIVEDERE L'ULTIMO...IL RISULTATO NON E' QUELLO RICHIESTO DAL TESTO///////////'
		
		
		
		
		
		
	}

}

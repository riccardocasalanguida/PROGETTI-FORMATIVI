package com.collections;

import java.util.*;

public class EserciziHashMap {

	public static void main(String[] args) {

		HashMap<String, Integer> dati = new HashMap<>();
		dati.put("Riccardo", 25);
		dati.put("Lucia", 35);
		dati.put("Mario", 29);
		dati.put("Anna", 30);
		dati.put("Marco", 23);
		dati.put("Luca", 27);
		System.out.println(dati);
		System.out.println("");
		dati.remove("Luca");
		System.out.println(dati);
		System.out.println("");
		System.out.println(dati.containsKey("Riccardo") ? "Riccardo è presente!" : "Riccardo non è presente!");
		System.out.println("");
		System.out.println(dati.containsValue(30) ? "E' presente un trentenne!" : "Non è presente un trentenne");
		System.out.println("");
		dati.put("Luca", 27);   /////////RIAGGIUNTO//////////
		for (String k : dati.keySet()) {
			System.out.println(k);
		}
		System.out.println("");
		System.out.println(dati.keySet());
		System.out.println("");
		System.out.println(dati.values());
		System.out.println("");
		for (String k2 : dati.keySet()) {
			System.out.println("Nome: " + k2 + " Età: " + dati.get(k2));
		}
		System.out.println("");
		System.out.println("L'HashMap contiene " + dati.size() + " elementi!");
		System.out.println("");
		dati.clear();
		System.out.println(dati.isEmpty() ? "L'HashMap è vuoto!" : "L'HashMap contiene valori");
		System.out.println("");
		System.out.println("");
		/////////////////////////////////////////////
		HashMap<Integer, Integer> num = new HashMap<>();
		for (Integer i = 0; i < 6; i++) {
		num.put(i, i*i);
		}
		System.out.println(num);
		System.out.println("");
		HashMap<String, Integer> pers = new HashMap<>();
		pers.put("Riccardo", 25);
		pers.put("Lucia", 35);
		pers.put("Mario", 29);
		pers.put("Anna", 30);
		pers.put("Marco", 23);
		pers.put("Luca", 27);
		//pers.put("Sara", 19);
		String persMax = null;
		int etàMax = 0;
		for (String k3 : pers.keySet()) {
			if (pers.get(k3) > etàMax) {
				etàMax = pers.get(k3);
				persMax = k3;
			}
		}
		System.out.println("Il più grande ha " + etàMax + " anni, ed il suo nome è " + persMax);
		System.out.println("");
		pers.putIfAbsent("Sara", 19);
		System.out.println(pers);
		System.out.println("");
		
		
		
		
		
		
	}

}

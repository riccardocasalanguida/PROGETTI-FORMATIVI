package com.collections;

import java.util.*;

public class EseHashMap3 {

	public static void main(String[] args) {

		HashMap<String, Integer> map = new HashMap<>(Map.of("B", 7, "A", 5, "C", 6));
		TreeMap<String, Integer> map2 = new TreeMap<>(map);
		System.out.println(map2);
		System.out.println("");
		List<Map.Entry<String, Integer>> map3 = new ArrayList<>(map.entrySet());
		map3.sort(Map.Entry.comparingByValue());
		System.out.println(map3);
		System.out.println("");
		////////////////////////////
		List<String> prima = new ArrayList<>(List.of("a", "b", "c", "d"));
		List<Integer> seconda = new ArrayList<>(List.of(1, 2, 3, 4));
		HashMap<String, Integer> map4 = new HashMap<>();
		for (int i = 0; i < prima.size(); i++) {
			map4.put(prima.get(i), seconda.get(i));
		}
		System.out.println(map4);
		System.out.println("");
		HashMap<String, Integer> map5 = new HashMap<>(Map.of("B", 7, "A", 5, "C", 6, "D", 5));
		int target = 5;
		ArrayList<String> arr = new ArrayList<>();
		for (var i : map5.entrySet()) {
			if (i.getValue() == target) {
				arr.add(i.getKey());
			}
		}
		System.out.println(arr);
		System.out.println("");
		String frutta = "Banana";
		HashMap<Character, Integer> cont = new HashMap<>();
		for (char i : frutta.toCharArray()) {
			cont.put(i, cont.getOrDefault(i, 0) + 1);
		}
		System.out.println(cont);
		System.out.println("");
		HashMap<String, Integer> map6 = new HashMap<>(Map.of("B", 7, "A", 5, "C", 6, "D", 5, "E", 2, "F", 1));
		System.out.println(map6);
		map6.keySet().removeIf(k -> k == "B");
		System.out.println(map6);
		System.out.println("");
		//////////////////////////////
		HashMap<Integer, String> map1 = new HashMap<>();
		map1.put(1, "aaaaa");
		map1.put(2, "bbbb");
		map1.put(3, "ccccccccccccccccccccccccc");
		map1.put(4, "dd");
		int chiaviConStringaPiùLunga = 0;
		for (Map.Entry<Integer, String> entry : map1.entrySet()) {
			int chiave_attuale = entry.getKey();
			String valore_attuale = entry.getValue();

			if (chiaviConStringaPiùLunga == 0) {
				chiaviConStringaPiùLunga = chiave_attuale;
			} else {
				if (valore_attuale.length() > map1.get(chiaviConStringaPiùLunga).length()) {
					chiaviConStringaPiùLunga = chiave_attuale;
				}
			}
		}
		System.out.println("la chiave con la stringa più lunga è " + chiaviConStringaPiùLunga);
		System.out.println("");
		int soglia = 20;                                                       
		HashMap<Integer, Integer> map7 = new HashMap<>(Map.of(1,10,2,20,3,30)); 
		map7.values().removeIf(x -> x < soglia);                                
		System.out.println("mappa con soglia" + map7);
		System.out.println("");
		HashMap<String, Integer> lunghezze = new HashMap<>(Map.of("alfa", 1, "betaGamma", 2,"pi",3));
		String maxL = Collections.max(lunghezze.keySet(),Comparator.comparingInt(String::length));
		System.out.println(maxL); 
		System.out.println("");
		
		
		
	}

}

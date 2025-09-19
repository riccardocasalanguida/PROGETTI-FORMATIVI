package com.collections;

import java.util.*;

public class EserciziIterator3 {

	public static void main(String[] args) {

		HashMap<String, String> capitali = new HashMap<>();
		capitali.put("Italia", "Roma");
		capitali.put("Spagna", "Madrid");
		capitali.put("Germania", "Berlino");
		Iterator<Map.Entry<String, String>> itr = capitali.entrySet().iterator();
		while (itr.hasNext()) {
			Map.Entry<String, String> entry = itr.next();
			// System.out.println(entry.getKey() + entry.getValue());
			System.out.println(entry);
		}
		System.out.println("");
		////////////////
		HashMap<String, Integer> dati = new HashMap<>();
		dati.put("Riccardo", 25);
		dati.put("Lucia", 23);
		dati.put("Mario", 22);
		Iterator<Map.Entry<String, Integer>> iter = dati.entrySet().iterator();
		boolean chiave = false;
		while (iter.hasNext()) {
			if (iter.next().getKey().equals("Riccardo")) {
				chiave = true;
				break;
			}
		}
		System.out.println("Riccardo è presente nel Map? " + chiave);
		System.out.println("");
		////////////////
		Map<String, Integer> voti = new HashMap<>();
		voti.put("A", 100);
		voti.put("B", 80);
		voti.put("C", 60);
		voti.put("D", 40);
		voti.put("F", 10);
		System.out.println("I voti iniziali all'interno del Map sono: " + voti);
		Iterator<Map.Entry<String, Integer>> it = voti.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, Integer> entry = it.next();
			if (entry.getValue() < 50) {
				it.remove();
			}
		}
		System.out.println("I voti attuali all'interno del Map sono: " + voti);
		System.out.println("");
		///////////////
		List<Integer> num4 = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));
		Iterator<Integer> it4 = num4.iterator();
		int cont = 0;
		while (it4.hasNext()) {
			int dispari = it4.next();
			if (dispari % 2 != 0) {
				it4.remove();
				;
			}
		}
		System.out.println("I numeri dispari presenti sono: " + num4);
		System.out.println("");
		/////////////////
		List<Integer> num5 = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));
		ListIterator<Integer> it5 = num5.listIterator(num5.size());
		while (it5.hasPrevious()) {
			System.out.print(it5.previous() + " ");
		}
		System.out.println("");
		System.out.println("");
		/////////////////
		List<Character> lista = new ArrayList<>(List.of('o', 'a', 'i', 'C'));
		ListIterator<Character> ite = lista.listIterator(lista.size());
		String stringa = "";
		while (ite.hasPrevious()) {
			Character c = ite.previous();
			stringa = stringa.concat(String.valueOf(c));
		}
		System.out.println(stringa);
		System.out.println("");
		////////////////////
		String s = "iterator";
		List<Character> chars = new ArrayList<>();
		for (char c : s.toCharArray())
			chars.add(c);
		ListIterator<Character> ite2 = chars.listIterator(chars.size());
		StringBuilder sb = new StringBuilder();
		while (ite2.hasPrevious())
			sb.append(ite2.previous());
		System.out.println(sb); // rotareti
		System.out.println("");
		///////////////////
		List<String> list = new ArrayList<>(List.of("A", "", "B", "", "C", "", "D"));
		Iterator<String> ite3 = list.iterator();
		while (ite3.hasNext()) {
			if (ite3.next().isEmpty()) {
				ite3.remove();
			}
		}
		System.out.println(list);

	}

}

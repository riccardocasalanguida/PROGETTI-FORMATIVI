package com.collections;

import java.util.*;

public class EserciziArrayList {

	public static void main(String[] args) {

		//Scrivi un metodo che rimuove i duplicati da un ArrayList<Integer> mantenendo l’ordine.
		
		ArrayList<Integer> numA = new ArrayList<>(List.of(5, 10, 15, 20, 10, 25, 15));

//		ArrayList<Integer> numC = new ArrayList<>(List.of(55, 10, 115, 20, 510, 225, 415));
		
		ArrayList<Integer> numB = new ArrayList<>(numA.stream().distinct().toList()); 

		
		System.out.println(numB);

		
		
		
//		for (Integer n : numA) {
//			if (!numB.contains(n)) {
//				numB.add(n);
//			}
//
//		}
//
//		System.out.println(numB);

	}

}

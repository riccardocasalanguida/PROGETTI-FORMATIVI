package com.collections;

import java.util.*;

public class EserciziIterator4 {

	public static void main(String[] args) {
		//Contare elementi unici con Set e Iterator
		List<Integer> valori = Arrays.asList(1,2,3,4,4,6,7,8);
		Set<Integer> unici = new HashSet<>();
		Iterator<Integer> it = valori.iterator();
		int cont = 0;
	    while(it.hasNext()) unici.add(it.next());
		System.out.println(unici.size());
		System.out.println(unici);
		System.out.println("");
		//////////////
		List<Integer> nums = List.of(1,2,2,3,4,4,5);
        Set<Integer> unique = new HashSet<>();
        Iterator<Integer> it2 = nums.iterator();
        while(it2.hasNext()) unique.add(it2.next());
        System.out.println("Unici: " + unique.size()); // 5
		
	}

}

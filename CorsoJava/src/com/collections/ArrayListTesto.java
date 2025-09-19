package com.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrayListTesto {

	public static void main(String[] args) {

		List<String> colori = new ArrayList<String>();

		colori.add("rosso");
		colori.add("verde");
		colori.add("blu");
		colori.add("giallo");
		colori.add("arancione");
		
		
		for (String c : colori) {
		
			System.out.println(c);	
			
		}
		
		System.out.println("");
		
		colori.set(1, "nero");
		
		for (String a : colori) {
			
			System.out.println(a);			
		}
		
	}

}

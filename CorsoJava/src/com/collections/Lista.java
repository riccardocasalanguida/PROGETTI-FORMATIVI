package com.collections;

import java.util.ArrayList;
import java.util.List;

public class Lista {

	public static void main(String[] args) {

		List<String> nomi = new ArrayList<String>();
		
		nomi.add("Mario");
		nomi.add("Riccardo");
		nomi.add("Alessia");
		
//		for (String a : nomi) {
//			System.out.println(a);
//		}
		
		for (int i = 0; i < nomi.size(); i++) {
			System.out.println(nomi.get(i));
		}
		
		
		
		
	}

}

package com.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrayListElementi {

	public static void main(String[] args) {

		List<String> prod = new ArrayList<String>();

		prod.add("scarpe");
		prod.add("maglia");
		prod.add("giacca");
		prod.add("pantaloni");
		prod.add("cappello");

//		System.out.println(prod.size());
//
//		for (int i = 0; i < prod.size(); i++) {
//			System.out.println(prod.get(i));
//		}
//
//		System.out.println("---------------------");
//		System.out.println(prod.get(prod.size() - 1));
//		
//		
		
		
		
		
		int index = 0;

		for (String p : prod) {

			if (index == prod.size() - 1) {

				System.out.println(prod);
			}

			index++;
			System.out.println(p);

		
		
		}
		

	}

}

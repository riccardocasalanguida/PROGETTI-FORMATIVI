package com.collections;

import java.util.ArrayList;
import java.util.*;

public class Citta {

	public static void main(String[] args) {

		List<String> city = new ArrayList<String>();

		city.add("milano");
		city.add("napoli");
		city.add("roma");
		city.add("genova");
		city.add("bari");
		
		

			if (city.contains("roma")) {
				System.out.println("L'array contiene: roma");
			}
			else {
				System.out.println("L'array non contiene: roma");
			}
		
		
		
		Collections.sort(city);
		System.out.println(city);
		
		
		
		Collections.reverse(city);
		
		System.out.println(city);
		
		
		
		
		
	}
	
}
	
	
	
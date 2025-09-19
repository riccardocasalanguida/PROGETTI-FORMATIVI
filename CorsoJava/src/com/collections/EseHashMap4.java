package com.collections;

import java.util.*;

public class EseHashMap4 {

	public static void main(String[] args) {
	
	
		HashMap<String,Integer> map1 = new HashMap<>(Map.of("A",2,"B",3,"C",4));
		map1.replaceAll((k,v) -> v = v * v);
		System.out.println(map1);
		System.out.println("");
		HashMap<String,Integer> contatori = new HashMap<>(Map.of("c",5,"b",2));
		contatori.computeIfPresent("a",(k,v)->v+1);
		System.out.println(contatori);
		
		
		
		
	
	
	}
	
}

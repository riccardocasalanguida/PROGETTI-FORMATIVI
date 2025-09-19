package com.collections;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class ArrayListAlfabeto {

	public static void main(String[] args) {

        List<Character> alfabeto = new ArrayList<Character>();
        	
        for (char c = 'A'; c <= 'Z'; c++) {
            alfabeto.add(c);
        }
        
        System.out.println(alfabeto);
        
        Collections.reverse(alfabeto);
        
        System.out.println(alfabeto);
				
        System.out.println(alfabeto.size());
        
        System.out.println(alfabeto.isEmpty() ? "L'array è vuoto!" : "L'array è pieno!");
        
        
	}

}

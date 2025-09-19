package com.collections;

import java.util.ArrayList;

public class ArrayListRemove {

	public static void main(String[] args) {

		ArrayList<Integer> num = new ArrayList<Integer>();

		num.add(5);
		num.add(15);
		num.add(25);
		num.add(35);
		num.add(45);

//		num.remove(Integer.valueOf(15));
//
//		System.out.println("L'array list contiene: " + num);
		
		

		for (int i : num) {
			System.out.println(i);
		}

		System.out.println("");

		num.remove(1);

		for (int a : num) {
			System.out.println(a);
		}

	}

}

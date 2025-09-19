package com.collections;

import java.util.ArrayList;
import java.util.List;

public class Numeri {

	public static void main(String[] args) {

		List<Integer> num = new ArrayList<Integer>();

		num.add(10);
		num.add(15);
		num.add(25);

//
		System.out.println(num);
//		}

		System.out.println(num.size());
		System.out.println(num.get(2));

		System.err.println(num.remove(Integer.valueOf(15)));

//		for (int i : num) {
		System.out.println(num);
//		}

		
		
		
		
		
		
	}

}
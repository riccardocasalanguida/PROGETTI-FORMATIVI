package com.collections;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListNumeri {

	public static void main(String[] args) {

		ArrayList<Integer> num = new ArrayList<Integer>();

		num.add(57);
		num.add(15);
		num.add(254);
		num.add(385);
		num.add(45);

		Collections.sort(num);
		System.out.println(num);

		System.out.println("");

		Collections.reverse(num);
		System.out.println(num);

	}

}

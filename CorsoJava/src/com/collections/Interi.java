package com.collections;

import java.util.ArrayList;

public class Interi {

	public static void main(String[] args) {

		ArrayList<ArrayList<Integer>> numeriInteri = new ArrayList<ArrayList<Integer>>();

		ArrayList<Integer> numA = new ArrayList<Integer>();

		numA.add(25);
		numA.add(35);
		numA.add(45);

		ArrayList<Integer> numB = new ArrayList<Integer>();

		numB.add(20);
		numB.add(30);
		numB.add(40);

		ArrayList<Integer> numC = new ArrayList<Integer>();

		numC.add(15);
		numC.add(55);
		numC.add(85);

		
//		for (ArrayList<Integer> x : numeriInteri)
		numeriInteri.add(numA);
		numeriInteri.add(numB);
		numeriInteri.add(numC);
		System.out.println(numeriInteri);

	}

}

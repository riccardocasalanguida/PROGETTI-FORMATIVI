package com.collections;

import java.util.*;

public class ExampleArrayList {

	public static void main(String[] args) {

		List<String> technology = new ArrayList<String>();

		technology.add("java");
		technology.add("spring");
		technology.add("html");
		technology.add("javascript");
		technology.add("typescript");
		technology.add("css");

		Collections.sort(technology);
		Collections.reverse(technology);

		for (String tech : technology) {

			System.out.println(tech);
		}

		System.out.println(technology.size());
		System.out.println(technology.isEmpty());

		ArrayList<Integer> age = new ArrayList<Integer>();

		age.add(25);
		age.add(35);
		age.add(45);
		age.add(55);
		age.add(65);
		age.add(75);

		age.remove(0);
		age.set(0, 13);

		for (int i : age) {
			System.out.println(i);
		}

		age.clear();
		System.out.println(age.size());
		System.out.println(age.isEmpty());
	}

}

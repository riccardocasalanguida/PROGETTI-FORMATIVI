package com.lambda.expression;

import java.util.*;
import java.util.List.*;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class MainLambda4 {

	public static void main(String[] args) {

		List<Integer> num = List.of(10, 20, 30, 40, 50);
		long count = num.stream().filter(a -> a > 10).count();
		System.out.println("La lista contiene " + count + " numeri maggiori di 10");
		System.out.println("");
		///////
		List<Integer> numA = List.of(10, 20, 30, 40, 50);
		int max = numA.stream().reduce(Integer::max).get();
		System.out.println(max);
		System.out.println("");
		///////
		List<Integer> numB = List.of(10, 20, 10, 40, 10, 60, 20, 40, 70);
		List<Integer> r = numB.stream().distinct().sorted().collect(Collectors.toList());
		System.out.println(r);
		System.out.println("");
		///////
		HashMap<String,Integer> word = new HashMap<>();                /////////********
		String str1 = new String("prova");
		word.put(str1,str1.length());
		String str2 = new String("provaaa");
		word.put(str2,str2.length());
		System.out.println(word);
		System.out.println("");
		///////
		List<String> parole = new ArrayList<>();
		for (Map.Entry<String, Integer> entry : word.entrySet()) {      /////////********
			String parola = entry.getKey();
			parole.add(parola);
		}
		System.out.println(parole);
		String frase2 = parole.stream().reduce("", (a, b) -> a.concat(b));
		System.out.println(frase2);
		System.out.println("");
		/////
		List<Integer> numeri = List.of(1, 2, 3, 4);
		numeri.stream().filter(a -> a % 2 == 0).map(b -> b * 2).forEach(c -> System.out.println(c));
		System.out.println("");
		
		
		
		
		
		
		
		
		
	}

}

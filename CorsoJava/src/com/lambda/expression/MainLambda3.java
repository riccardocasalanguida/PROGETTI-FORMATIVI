package com.lambda.expression;

import java.util.*;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class MainLambda3 {

	public static void main(String[] args) {

		List<Integer> nums = List.of(1, 2, 3, 4);
		int sum = nums.stream().reduce(0, (a, b) -> a + b);
		System.out.println(sum); // 10
		System.out.println("");
		////
		List<Integer> n = new ArrayList<>(List.of(2, 3));
		int somma = n.stream().reduce(-1, (a, b) -> (a + b));
		System.out.println(somma);
		System.out.println("");
		////
		List<Integer> num1 = List.of(1, 5, 3, 4);
		int max = num1.stream().max((x, y) -> x.compareTo(y)).get();
		System.out.println(max);
		System.out.println("");
		/////
		List<Integer> numA = List.of(1, 5, 3, 4);
		boolean verifica = numA.stream().anyMatch((a) -> a % 2 == 0);
		System.out.println(verifica);
		System.out.println("");
		/////
		Supplier<Double> casuali = () -> Math.random();
		System.out.println(casuali.get());
		System.out.println(casuali.get());
		System.out.println("");
		/////
		List<String> nomi = List.of("Java", "è", "complicato..", "ma", "lo", "imparerò!!!");
		String frase = nomi.stream().reduce("", (a, b) -> a + " " + b).trim();
		System.out.println(frase);
		System.out.println("");
		/////
		List<Integer> num = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
		int somma1 = num.stream().filter(num4 -> num4 % 2 != 0).mapToInt(Integer::intValue).sum();
		System.out.println(somma1);
		System.out.println("");
		/////
		List<String> random = List.of("Java", "è", "complicato", "ma", "lo", "imparerò!!!");
		List<String> maiuscolo = random.stream().map(String::toUpperCase).collect(Collectors.toList());
		System.out.println(maiuscolo);
		System.out.println("");
		/////
		List<String> random2 = List.of("Java", "è", "complicato", "ma", "lo", "imparerò");
		List<String> order = random2.stream().filter(word -> word.length() > 3).sorted().collect(Collectors.toList());
		System.out.println(order);
		System.out.println("");
		/////


	}

}

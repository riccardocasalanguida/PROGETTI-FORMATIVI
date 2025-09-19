package com.lambda.expression;

import java.util.*;
import java.util.function.BiFunction;
import java.util.function.Predicate;

public class MainLambda {

	public static void main(String[] args) {

		List<String> names = List.of("Anna", "Marta", "Luca");
		names.forEach(n -> System.out.println(n));
		System.out.println("");
		////////
		List<Integer> num = List.of(1,2,3,4,5);
		num.forEach(num1 -> System.out.println(num1));
		System.out.println("");
		/////
		List<String> città = List.of("Pescara","Roma","Milano","Napoli");
		città.forEach(c -> System.out.println(c));
		System.out.println("");
		/////
		BiFunction<Integer, Integer, Integer> somma = (a,b) -> a + b;
		System.out.println(somma.apply(15, 25));
		System.out.println("");
		/////
		BiFunction<Integer, Integer, Integer> prod = (a,b) -> a * b;
		System.out.println(prod.apply(3, 5));
		System.out.println("");
		/////
		BiFunction<Integer,Integer,Integer> sott = (a,b) -> a - b;
		System.out.println(sott.apply(20, 15));
		System.out.println("");
		//////
		Predicate<Integer> pari = (a) -> a % 2 == 0;
		System.out.println(pari.test(6));
		System.out.println(pari.test(5));
		System.out.println("");
		//////
		Predicate<Integer> dispari = (a) -> a % 2 != 0;
		System.out.println(dispari.test(6));
		System.out.println(dispari.test(5));
		System.out.println("");
		//////
		
		
		
	}

}

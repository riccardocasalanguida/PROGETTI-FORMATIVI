package com.lambda.expression;

import java.util.*;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class MainLambda2 {

	public static void main(String[] args) {

		Function<String, String> maiuscolo = (a) -> a.toUpperCase();
		System.out.println(maiuscolo.apply("hello world"));
		System.out.println("");
		//////
		Consumer<String> stampa = (a) -> System.out.println(a);
		stampa.accept("Hello World");
		System.out.println("");
		//////
		Supplier<Double> val = () -> Math.random();
		System.out.println(val.get());
		System.out.println("");
		//////
		List<Integer> lista = (List.of(1, 2, 3));
		lista.stream().filter(a -> a > 1).forEach(filtrato -> System.out.println(filtrato));
		System.out.println("");
		//////
		List<Integer> numeri = (List.of(1, 2, 3, 4, 5));
		List<Integer> incre = numeri.stream().map(n -> n + 1).collect(Collectors.toList());
		System.out.println(incre);
		System.out.println("");
		//////
		List<String> nomi = List.of("Riccardo", "Lucia", "Alessia");
		nomi.forEach(a -> System.out.println(a));
		System.out.println("");
		//////
		List<String> nomi3 = new ArrayList<>(Arrays.asList("Nicola", "Giulia", "Andrea"));
		nomi3.sort((a, b) -> a.compareTo(b));
		System.out.println("Ordinamento dalla A alla Z: " + nomi3);
		System.out.println("");
		//////
		List<Integer> numeri3 = Arrays.asList(1, 2, 3, 4);
		List<Integer> numeriMoltiplicati = numeri3.stream().map(n -> n * 2).toList();
		System.out.println("I numeri di partenza sono: " + numeri3);
		System.out.println("I numeri moltiplicati sono: " + numeriMoltiplicati);
		System.out.println("");
		//////
		List<String> parole = Arrays.asList("C", "Filtrare", "P");
		List<String> paroleFiltrate = parole.stream().filter(a -> a.length() > 2).collect(Collectors.toList());
		System.out.println(paroleFiltrate);
		System.out.println("");
		//////
		HashMap<String, Integer> mappa = new HashMap<>(Map.of("Anna", 20, "Paolo", 31, "Francesca", 27));
		BiConsumer<String, Integer> stamp = (x, y) -> System.out.println("Chiave " + x + ", valore " + y);
		mappa.forEach(stamp);
		System.out.println("");
		//////
		
		
		
		
		
		
		

	}

}

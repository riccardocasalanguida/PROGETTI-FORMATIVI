package com.lambda.expression;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

import java.util.*;

public class MainLambda5 {

	public static void main(String[] args) {
		
			/////Ordinare lista di stringhe per lunghezza
			List<String> words = new ArrayList<>(List.of("apple","cat","banana","dog"));
	        words.sort((a,b) -> a.length() - b.length());
	        System.out.println(words);
	        System.out.println("");
	        ///Trovare la parola più lunga
	        String longest = words.stream().max((a,b) -> a.length() - b.length()).get();
	        System.out.println(longest); // Stream o Lambda
	        System.out.println("");	        
	        ///Verificare se tutti i numeri sono positivi
	        List<Integer> numeri =Arrays.asList(1, 5, 9, 10);	 ///////////       
	        boolean numeriPositivi = numeri.stream().allMatch(n -> n > 0);	        
	        System.out.println("I numeri sono tutti positivi? " + numeriPositivi);
	        System.out.println("");
	        ////Verificare se almeno un numero è multiplo di 5
	        boolean multi5 = numeri.stream().anyMatch(n -> n % 5 == 0);
	        System.out.println("Sono presenti multipli di 5? " + multi5);
	        System.out.println("");
	        //Stampare tutti i numeri con forEach e lambda
	        numeri.forEach(n -> System.out.println(n));
	        System.out.println("");
	        //Trovare la somma usando reduce
	        int somma = numeri.stream().reduce(Integer::sum).get();
	        System.out.println(somma);
	        System.out.println("");
	        //Filtrare stringhe che contengono "a"
	        List<String> word = new ArrayList<>(List.of("apple", "cow", "cat","banana","dog"));
	        List<String> wordFilter = word.stream().filter(a -> a.contains("a")).collect(Collectors.toList());
	        System.out.println(wordFilter);
	        System.out.println("");
	        //Convertire lista di numeri in lista di stringhe
	        List<Integer> numeri3 =Arrays.asList(1, 5, 9, 10);
	        List<String> numStr = numeri3.stream().map(a -> "num:" + a).collect(Collectors.toList());
	        System.err.println(numStr);
	        System.out.println("");
	        //Ordinare mappe per valore
	        HashMap<String,Integer> dati = new HashMap<>(Map.of("Riccardo", 25, "Lucia", 39, "Mario", 30));
            dati.entrySet().stream().sorted(Map.Entry.comparingByValue())
                    .forEach(a -> System.out.println("CHIAVE: " + a.getKey() + " VALORE: " + a.getValue()));
            System.out.println("");
	        //Ottenere lista di quadrati dei numeri
            List<Integer> numeri4 = Arrays.asList(1, 5, 9, 10);
	        List<Integer> numeriQuad = numeri4.stream().map(n -> n * n).collect(Collectors.toList());
	        System.out.println(numeriQuad);
	        System.out.println("");
	        //Raggruppare parole per lunghezza
	        List<String> parole = List.of("a","ab","abc","de","fgh");
	        Map<Integer,List<String>> grouped = parole.stream().collect(Collectors.groupingBy(String::length));
	        System.out.println(grouped);
	        System.out.println("");
	        
	        
	        
	        
	        
	}

}

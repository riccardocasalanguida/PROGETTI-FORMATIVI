package com.collections;

import java.util.*;

public class EsempiHashSet {

	public static void main(String[] args) {

//		HashSet<String> città = new HashSet<>(Set.of("Milano", "Pescara", "Roma", "Bari"));
//		HashSet<String> città2 = new HashSet<>(Set.of("Palermo", "Rovigo", "Verona", "Firenze"));
//		HashSet<String> città3 = new HashSet<>(città);
//		città3.addAll(città2);
//		System.out.println(città3);

		
		//Crea la differenza tra due insiemi

//		HashSet<Integer> num = new HashSet<>(Set.of(5,10,15,20,25,30));
		
//		HashSet<Integer> num1 = new HashSet<>(Set.of(3,6,9,12,15,18));
//		HashSet<Integer> num2 = new HashSet<>(num);
//		num2.removeAll(num1);
//		//num2.retainAll(num1);
//		System.out.println(num2);
		
//		num.removeIf(x -> x % 2 == 0);
//		System.out.println(num);
		
		
		//Rimuovi tutti gli elementi maggiori della media
		HashSet<Integer> a = new HashSet<>(Set.of(10,20,30,60,90));
		int media = 0;                                             
		for (Integer c:a)                                          
		    media += c;                                            
		media /= a.size();                                         
		HashSet<Integer> tmp = new HashSet<>();                    
		for (Integer b:a)                                          
		    if (b>media)                                           
		        tmp.add(b);                                        
		a.clear();                                                 
		a.addAll(tmp);                                             
		System.out.println(a);
		
		//Verifica se due HashSet contengono esattamente gli stessi elementi
//		HashSet<Integer> a = new HashSet<>(Set.of(10,30,40));
//		Integer[] b = a.toArray(new Integer[3]);             
//		System.out.println(Arrays.toString(b));
		
		
		//Trova elemento minimo e massimo di un HashSet
//		HashSet<Integer> a = new HashSet<>(Set.of(40,10,20,30));        
//		int min = Collections.min(a);                                   
//		int max = Collections.max(a);                                   
//		System.out.println("il minimo è ".concat(String.valueOf(min))); 
//		System.out.println("il massimo è ".concat(String.valueOf(max)));
		
		
		//Convertire HashSet in array
//		HashSet<Integer> a = new HashSet<>(Set.of(10,20,30,60,90));  
//		int media = 0;                                               
//		for (Integer c:a)                                            
//		    media += c;                                              
//		media /= a.size();                                           
//		HashSet<Integer> tmp = new HashSet<>();                      
//		for (Integer b:a)                                            
//		    if (b>media)                                             
//		        tmp.add(b);                                          
//		a.clear();                                                   
//		a.addAll(tmp);                                               
//		System.out.println(a);
		
		
		
		//Verifica se due set sono disgiunti
//		HashSet<Integer> a = new HashSet<>(Set.of(10,20,30));                          
//		HashSet<Integer> b = new HashSet<>(Set.of(10,20,30));                          
//		System.out.println(a.equals(b) ? "i set sono uguali" : "i set sono disgiunti");
		
		
		

		
		
	}

}

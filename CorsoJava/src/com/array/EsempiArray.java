package com.array;

public class EsempiArray {

	public static void main(String[] args) {

//		String[] nome = new String[5];
//		
//		nome[0] = "Luca";
//		nome[1] = "Lucia";
//		nome[2] = "Andrea";
//		nome[3] = "Riccardo";
//		nome[4] = "Alessia";
//		
//		System.out.println(nome[0]);
//		System.out.println("----------------");
//		
//		for (int i = 0; i < nome.length; i++) {
//			System.out.println(nome[i]);
//		}
//		System.out.println("----------------");
//	
//		
//		int[] eta = {25, 15, 35, 39, 45};
//		System.out.println(2);
//		System.out.println("----------------");
//		
//		for (int i : eta) {
//			System.out.println(i);
//		}

//		int[] num = new int[5];
//		
//		num[0] = 5;
//		num[1] = 10;		
//		num[2] = 15;
//		num[3] = 20;
//		num[4] = 25;
//	
//		for (int i = 0; i < num.length; i++) {
//			System.out.println(num[i]);
//		}

//		int[] numB = {2, 4, 6, 8, 10};
//		
//		int somma = 0;
//		for (int i = 0; i < numB.length; i++) {
//			somma = somma + numB[i];
//		}
//		
//		System.out.println(somma);

//		int[] numC = { 2, 4, 6, 8, 10 };
//		int somma = 0;
//		int media = 0;
//		
//		for (int i = 0; i < numC.length; i++) {
//			somma = somma + numC[i];
//
//		}
//
//		media = somma / numC.length;
//		System.out.println(media);
		
		
//		int[] numD = {2, 4, 6, 8, 10};	
//		int max = numD[0];
//		for (int i = 1; i < numD.length; i++) {
//			if (numD[i] > max) {
//				max = numD[i];
//			}
//		}
//		System.out.println(max);
		
		
//		int[] numE = {2, 4, 6, 8, 10};	
//		int min = numE[0];
//		for (int i = 1; i < numE.length; i++) {
//			if (numE[i] < min) {
//				min = numE[i];
//			}
//		}
//		System.out.println(min);
		

//		int[] numF = {3, 4, 6, 7, 10};	
//		int count = 0;
//		
//		for (int i = 0; i < numF.length; i++) {
//			if (numF[i] % 2 == 0) {
//				count++;
//			}
//		}
//		System.out.println(count);
		
		
//		int[] numF = {3, 4, 6, 7, 10};	
//			for (int i = numF.length - 1; i >= 0; i--) {
//				System.out.println(numF[i]);
//			}
		
//		int[] numG = {3, 4, 6, 7, 1};
//		int val = 10;
//		boolean presente = false;
//		for (int i : numG) {
//			if (i == val) {
//				presente = true;
//				break;
//			}
//		}
//		if (presente) {
//			System.out.println("Il numero " + val + " è presente nell'array? " + presente);
//		}
//		else 
//			System.out.println("Il numero " + val + " è presente nell'array? " + presente);
		
		
//		int[] numH = {3, 40, 6, 7, 11};
//		int magg = 0;
//			for (int i : numH) {
//				if (i > 10) {
//					magg++;
//				}
//			}
//		System.out.println("I valori maggiori di 10 sono: " + magg);
		
		
//		int[] arr = {3, 40, 6, 7, 11};
//		int[] arrCopia = new int[5];
//			for (int i = 0; i < arr.length; i++) {
//				arrCopia[i] = arr[i];
//				System.out.println(arrCopia[i]);
//			}
		
//		//Dato un array, calcola la differenza tra il valore massimo e minimo.
//		int[] arr = {3, 40, 6, 7, 11};
//		int max = 0;
//		int min = 0;
//		for (int i)
	
		
//		int[] arr1 = {3, 40, 9, 7, 11};
//		
//		boolean val = false;
//		int indice = 0;
//		for (int i = 0; i < arr1.length; i++) {
//			if (arr1[i] == 9) {
//				val = true;
//				indice = i;
//				break;
//			}
//		}
//		if (val == true) {
//			System.out.println(indice);
//		}
		
//		int[] arr2 = {3, 4, 6, 7, 11};
//		
//		boolean val = true;
//		for (int i = 0; i < arr2.length - 1; i++) {
//			if (arr2[i] > arr2[i + 1]) {
//				val = false;
//				break;
//			}
//		}
//			if (val) {
//				System.out.println("ordinato");
//			}
//			else
//				System.out.println("non ordinato");
		
		
//		int[] arr2 = {3, 4, 6, 7, 11};
//		int pari = 0;
//		int dispari = 0;
//		for (int i = 0; i < arr2.length; i++) {
//			if (arr2[i] % 2 == 0) {
//				pari = pari + arr2[i];	
//			}
//			else {
//				dispari = dispari + arr2[i];
//			}
//		}
//		System.out.println("somma numeri pari: " + pari);
//		System.out.println("somma numeri dispari: " + dispari);
		
		
//		int[] originali = {-2, 4, -1, 3, 0, 7};
//		int[] positivi = new int[originali.length];
//		int j = 0;
//		for (int i = 0; i < originali.length; i++) {
//			if (originali[i] > 0) {
//				positivi[j] = originali[i];
//				j++;
//			}
//		System.out.println(positivi);
//		}
		
//		int[] originali = {-2, 4, -1, 3, 0, 7};
//        int[] positivi = new int[originali.length];
//        int j = 0;
//
//        for (int i = 0; i < originali.length; i++) {
//            if (originali[i] > 0) {
//                positivi[j] = originali[i];
//                j++;
//            }
//        }
//
//        for (int i = 0; i < j; i++) {
//            System.out.print(positivi[i] + " ");
//        }
		
          
//		int[] arr = {2, 4, 1, 3, 3, 7};
//		int cont = 0;
//		for (int i : arr) {
//			if (i == 3) {
//				cont++;
//			}
//		}
//        System.out.println("il 3 è presente " + cont + " volte."); 
       
        
//		int[] arr = {2, 4, 1, 3, 3, 7};          //////////////////    \\\\\\\\\\\\\\\\\\\
//		int provv = arr[0];
//		arr[0] = arr[arr.length - 1];
//		arr[arr.length - 1] = provv;
//		for (int i = 0; i < arr.length; i++) {
//			System.out.print(arr[i] + " ");
//		}
		
		
//		int[] numeri = {10, 20, 30, 40, 50};       /////////////////////////	\\\\\\\\\\\\\\\\\
//
//        System.out.println("Array originale:");
//        for (int n : numeri) {
//            System.out.print(n + " ");
//        }
//
//        int temp = numeri[0];
//        numeri[0] = numeri[numeri.length - 1];
//        numeri[numeri.length - 1] = temp;
//
//        System.out.println("\nArray dopo lo scambio:");
//        for (int n : numeri) {
//            System.out.print(n + " ");
//        }
		
		
//		int[] arr = { 2, 4, 6, 8, 10 };
//		int somma = 0;
//		int media = 0;
//		
//		for (int i = 0; i < arr.length; i++) {
//			somma = somma + arr[i];
//		}
//		
//		media = somma / arr.length;
//		System.out.println(media);
//		
//		
//		for (int i = 0; i < arr.length; i++) {
//			if (arr[i] > media) {
//				System.out.print(arr[i] + " ");
//			}
//		}
		
		
		
//		int[] arr = { 2, 4, 10, 8, 10 };
//		int[] univoci = new int[arr.length];
//		int cont = 0;
//		for (int i = 0; i < arr.length; i++) {
//			boolean presente == false;
//		
//			for (int j = 0; j < cont; j++) {
//			if (arr[i] == univoci[j]) {
//				presente == true;
//				break;
//			}
//		}
//		}	
//		if (!presente) {
//			univoci[cont] = arr[i];
//			cont++;
//		}
//		for (int i = 0; i < cont; i++) {
//			System.out.println(univoci[i] + " ");
//		}
		
		
		
//		int[] arr = {0, 5, 0, 3, 0, 1};       //////////// zdrgh.png ////////////
//		int[] arrZeri = new int [arr.length];
//		for (int i = 0; i < arr.length - 1; i++) {
//			if (i == 0) {
//				
//			}
//		}
//		
		
		
		
		
		

		
		
		
	}

}

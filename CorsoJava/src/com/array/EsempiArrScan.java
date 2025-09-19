package com.array;

import java.util.Scanner;

public class EsempiArrScan {

	public static void main(String[] args) {

		
		
//        Scanner scanner = new Scanner(System.in);
//        int[] arr = new int[5];
//        for (int i = 0; i < arr.length; i++) {
//            System.out.print("Inserisci un numero: ");
//            arr[i] = scanner.nextInt();
//        }
//
//		System.out.print("Numeri inseriti: ");
//		for (int n : arr) {
//			System.out.print(n + " ");
//		}
//
//	   scanner.close();
		
		
//		Scanner scanner = new Scanner(System.in);
//		String[] colori = new String[5];
//		for (int i = 0; i < colori.length; i++) {
//			System.out.print("Inserisci il tuo colore: ");
//			colori[i] = scanner.nextLine();
//		}
//		
//		System.out.print("I tuoi colori: ");
//		for (String j : colori) {
//		System.out.print(j + " ");
//		}
//		
//		
//		scanner.close();
		
		
		
//      Scanner scanner = new Scanner(System.in);
//      int[] arr = new int[5];
//      for (int i = 0; i < arr.length; i++) {
//          System.out.print("Inserisci un numero: ");
//          arr[i] = scanner.nextInt();
//      }
//
//		System.out.print("Numeri inseriti: ");
//		for (int n : arr) {
//			System.out.print(n + " ");
//			}
//		
//		System.out.println(" ");
//		System.out.println("------------------------");
//		
//		int somma = 0;
//		for (int s = 0; s < arr.length; s++) {
//		somma = somma + arr[s];
//		}
//		System.out.println("La somma dei tuoi numeri è: " + somma);
//	
// 	   scanner.close();
		
		
//      Scanner scanner = new Scanner(System.in);
//      int[] arr = new int[5];
//      for (int i = 0; i < arr.length; i++) {
//          System.out.print("Inserisci un numero: ");
//          arr[i] = scanner.nextInt();
//      }
//		
//		System.out.print("Numeri inseriti: ");
//		for (int n : arr) {
//			System.out.print(n + " ");
//			}
//		
//		System.out.println(" ");
//		System.out.println("------------------------");
//
//		double somma = 0;
//		double media = 0;
//		for (int s = 0; s < arr.length; s++) {
//			somma = somma + arr[s];
//			media = somma / arr.length;
//		}
//		System.out.println("La media dei tuoi numeri è: " + media);
//	
//		scanner.close();
		
		
//      Scanner scanner = new Scanner(System.in);
//      int[] arr = new int[5];
//      for (int i = 0; i < arr.length; i++) {
//          System.out.print("Inserisci un numero: ");
//          arr[i] = scanner.nextInt();
//      }
//		
//		System.out.print("Numeri inseriti: ");
//		for (int n : arr) {
//			System.out.print(n + " ");
//			}
//		
//		System.out.println(" ");
//		System.out.println("------------------------");
//		
//		int pari = 0;
//		for (int s = 0; s < arr.length; s++) {
//			if (arr[s] % 2 == 0) {
//				pari++;
//			}
//			
//			
//		}
//		System.out.println("Nel tuo array ci sono " + pari + " numeri pari");
//	
//		scanner.close();
		
		
		
//		Scanner scanner = new Scanner(System.in);
//		String[] nomi = new String[5];
//		for (int i = 0; i < nomi.length; i++) {
//			System.out.print("Inserisci il tuo nome: ");
//			nomi[i] = scanner.nextLine();
//		}
//		
//		System.out.print("I nomi inseriti sono: ");
//		for (String j : nomi) {
//		System.out.print(j + " ");
//		}
//		
//		
//		scanner.close();
		
		
		
      Scanner scanner = new Scanner(System.in);
      int[] arr = new int[5];
      for (int i = 0; i < arr.length; i++) {
          System.out.print("Inserisci un numero: ");
          arr[i] = scanner.nextInt();
      }
		
		System.out.print("Numeri inseriti: ");
		for (int n : arr) {
			System.out.print(n + " ");
			}
		
		System.out.println(" ");
		System.out.println("------------------------");
		
		int temp = arr[0];
//		for (int s = 0; s < arr.length; s++) {   //////ERRORE, CICLO FOR INUTILE//////////
			arr[0] = arr[arr.length - 1];
	        arr[arr.length - 1] = temp;
//			}
		
		System.out.println("Nuovo array con scambio tra primo e ultimo valore: ");
		for (int n : arr) {
			System.out.print(n + " ");
		}
		scanner.close();
		
		
		
		
		
	}

}

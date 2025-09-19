package com.controlflow;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.temporal.*;
import java.time.format.*;
import java.util.*;

public class Esempio {

	public static void main(String[] args) {

//		int numA = 18;
//		
//			if (numA > 0) {
//				System.out.println("Il numero è positivo");
//			}
//			
//			else 
//				System.out.println("Il numero è negativo");

//			if (numA % 2 == 0) {
//				System.out.println("Il numero è pari");
//			}
//			
//			else 
//				System.out.println("Il numero è dispari");

//			if (numA >= 18) {
//				System.out.println("L'utente è maggiorenne");
//			}
//		
//			else 
//				System.out.println("L'utente è minorenne");

//		char carattere = 'C';
//
//		if (carattere == 'A' || carattere == 'E' || carattere == 'I' || carattere == 'O' || carattere == 'U') {
//			System.out.println("Il carattere è una vocale");
//		}
//
//		else
//			System.out.println("Il carattere è una consonante");

//		int numB = 15;
//		
//		if (numB >= 10 || numB <= 100) {
//			System.out.println("Il numero è compreso tra 10 e 100");
//		}
//		
//		else {
//			System.out.println("Il numero non è compreso tra 10 e 100");
//		}

//		int voto = 5;
//		
//		if (voto >= 6) {
//			System.out.println("Studente promosso");
//		}
//		
//		else {
//			System.out.println("Studente bocciato");
//		}

//		int x = 5;
//		int y = 3;
//		
//		if (x > y) {
//			System.out.println("X è maggiore di y");
//		}
//		else if (y > x) {
//			System.out.println("y è maggiore di x");
//		}
//		else {
//			System.out.println("i numeri sono uguali");
//		}

//		String riga = "prova";
//		
//		if (riga.isEmpty()) {
//			System.out.println("La stringa è vuota");
//		}
//		else {
//			System.out.println("La stringa riporta il seguente testo: " + riga);
//		}

//		for (int i = 1; i <= 10; i++) {
//			System.out.print(i + " ");
//		}

//		int somma = 0;
//		for (int i = 1; i <= 100; i++) {
//			somma = somma + i;
//		}
//		System.out.println(somma);

//		int tabellina = 7;
//		for (int i = 1; i <= 10; i++) {
//			System.out.print(i * tabellina + " ");
//		}
//		
//		System.out.println();
//		
//		for (int i = 10; i >= 1; i--) {
//			System.out.print(i * tabellina + " ");
//		}

//		for (int i = 1; i <= 50; i++) {
//			if (i % 3 == 0) {
//				System.out.println(i);
//			}
//		}


//		int numA = 50;
//		int numB = 10;
//		while (numA >= numB) {
//
//			System.out.println(numA);
//			numA = numA -2; 
//
//		}

		
//		int x = 1;
//		int somma = 0;
//		
//		while (x <= 100) {
//			somma = somma + x;
//			x++;
//		}
//		System.out.println(somma);
		
		
//		int x = 2;
//		while (x <= 20) {
//				System.out.println(x);
//				x = x + 2;
//		}
		
//		int num = 3456;						///////RIVEDERE LOGICA//////
//		int cifre = 0;
//		while (num > 0) {
//			num = num / 10;
//			cifre++;
//		}
//		System.out.println("in numero è composto da " + cifre + " cifre");
		
//		int numA = 123;
//		int somma = 0;
//		while (numA > 0) {
//			somma = somma + numA % 10;
//			numA = numA / 10;
//		}
//		System.out.println(somma);
		
		
//		int num = 1234;              ///////RIVEDERE LOGICA///////
//		int numinv = 0;
//		while (num > 0) {
//			int cifra = num % 10;
//			numinv = numinv * 10 + cifra;
//			num = num / 10;
//		}
//		System.out.println(numinv);
		
		
//		int num = 12;
//		int numB = 1;
//		
//		while (numB >= num) {
//			if (num % numB == 0);
//			System.out.println(numB);
//		}
//		numB++;
		
		
//        int number = 1;
//
//        do {
//            System.out.println(number);
//            number++;
//        } while (number <= 10);
		
		
//        int number = 10;
//
//        do {
//            System.out.println(number);
//            number--;
//        } while (number >= 1);
		
		
//		int x = 1;
//		int somma = 0;
//		
//		do {
//			somma = somma + x;
//			x++;
//		}
//		while (x <= 100); 
//			System.out.println(somma);			

		
//		int tabellina = 1;
//		
//		do {
//			System.out.println(tabellina + " per 5 uguale " + (tabellina * 5));
//			tabellina++;
//		}
//		
//		while (tabellina <= 10);
		
		
//		int num = 3456;						
//		int cifre = 0;
//		while (num > 0) {
//			num = num / 10;
//			cifre++;
//		}
//		System.out.println("in numero è composto da " + cifre + " cifre");
	
		
//		int num = 12345;            ////////RIVEDERE LOGICA////////
//		int cifre = 0;
//		
//		do {
//			num = num / 10;
//			cifre++;
//		}
//		while (num > 0);
//		System.out.println("il numero è composto da " + cifre + " cifre");
		
		
//		int base = 3;        /////////////RIVEDERE LOGICA//////////////
//		int esp = 4;
//		int x = 0;
//		int res = 1;
//		
//		
//		do {
//			res = res * base;
//			x++;
//		}
//		while (x < esp);
//		
//		System.out.println(res);
			
		
//		int giorno = 8;
//		switch (giorno) {
//		case 1:
//			System.out.println("lunedì");
//			break;
//			
//		case 2:
//			System.out.println("martedì");
//			break;	
//			
//		case 3:
//			System.out.println("mercoledì");
//			break;
//			
//		case 4:
//			System.out.println("giovedì");
//			break;	
//			
//		case 5:
//			System.out.println("venerdì");
//			break;
//			
//		case 6:
//			System.out.println("sabato");
//			break;	
//			
//		case 7:
//			System.out.println("domenica");
//			break;	
//			
//		default:
//            System.out.println("non trovato");
//            break;	
//			
//		}
		
		
//		int mese = 10;
//		switch (mese) {
//		case 12: case 1: case 2:
//			System.out.println("inverno");
//			break;
//			
//		case 3: case 4: case 5:
//			System.out.println("primavera");
//			break;	
//			
//		case 6: case 7: case 8:
//			System.out.println("estate");
//			break;
//			
//		case 9: case 10: case 11:
//			System.out.println("autunno");
//			break;	
//				
//		default:
//            System.out.println("non trovato");
//            break;	
//		}

//		String menu = "pizza";
//		switch (menu) {
//		case "pasta":
//			System.out.println("Il piatto scelto è: " + menu);
//			break;
//			
//		case "pizza":
//			System.out.println("Il piatto scelto è: " + menu);
//			break;	
//			
//		case "carne":
//			System.out.println("Il piatto scelto è: " + menu);
//			break;
//		
//		default:
//			System.out.println("non disponibile");
//			break;
//			
//		}
		
		
		
//		double a = 3;                   /////////////DA CORREGGERE ssnh.png/////////////
//		double b = 0;
//		char ope = '/';
//		switch (ope) {
//		case '*': 
//			System.out.println(a * b);
//			break;
//			
//		case '/':
//			if (b != 0) {
//			System.out.println(a / b);
//			break;	
//			}
//			else {
//				System.out.println("Non divisibile per zero");
//			}
//			
//		case '+':
//			System.out.println(a + b);
//			break;
//			
//		case '-':
//			System.out.println(a - b);
//			break;	
//				
//		default:
//            System.out.println("non consentito");
//            break;	
//		}
		
		
//		String cod = "A03";
//		switch (cod) {
//		case "A01":
//			System.out.println("Articolo num " + cod + ": Scarpe €50");
//			break;
//			
//		case "A02":
//			System.out.println("Articolo num " + cod + ": Maglione €60");
//			break;	
//			
//		case "A03":
//			System.out.println("Articolo num " + cod + ": Pantalone €40");
//			break;
//		
//		default:
//			System.out.println("non disponibile");
//			break;
//			
//		}
		
		
//		int eta = 102;
//		String biglietto = "";		
//			if (eta < 18) {
//				biglietto = "junior";
//			}
//					
//			else if (eta >= 18 && eta < 60) {
//				biglietto = "adulto";
//			}
//		
//			else if (eta >= 60 && eta <= 100) {
//				biglietto = "senior";
//			}
//			
//			
//		switch (biglietto) {
//		case "junior":
//			System.out.println("Biglietto di tipo: " + biglietto + " costo €10");
//			break;
//			
//		case "adulto":
//			System.out.println("Biglietto di tipo: " + biglietto + " costo €15");
//			break;	
//			
//		case "senior":
//			System.out.println("Biglietto di tipo: " + biglietto + " costo €12");
//			break;
//		
//		default:
//			System.out.println("non disponibile");
//			break;
//			
//		}
		
		
//		char voto = 'D';
//		int punt = 0;
//		
//		switch (voto) {
//		case 'A': 
//			punt = 10;
//			System.out.println("Il punteggio corrisponde a: " + punt);
//		break;
//			
//		case 'B':
//			punt = 8;
//			System.out.println("Il punteggio corrisponde a: " + punt);
//		break;	
//			
//		case 'C':
//			punt = 6;
//			System.out.println("Il punteggio corrisponde a: " + punt);
//			break;
//		
//		case 'D':
//			punt = 5;
//			System.out.println("Il punteggio corrisponde a: " + punt);
//			break;
//			
//		case 'F':
//			punt = 2;
//			System.out.println("Il punteggio corrisponde a: " + punt);
//			break;
//						
//			
//		default:
//			System.out.println("non disponibile");
//			break;
//			
//		}
		
//		double num = 2;
//		double res = Math.pow(num, 5);
//		System.out.println("Il risultato è: " + res);
		
		
//		double num = 49;
//		double res = Math.sqrt(num);
//		System.out.println("La radice quadrata di 49 è: " + res);
		
		
//		//c=√(a2+b2)
//		
//		double a = 3;
//		double b = 4;
//		double c = 0;
//		System.out.println("L'ipotenusa è: " + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
		
		
		
//		int n = 20;
//		boolean ver = (Math.log(n)/Math.log(2)) % 1 == 0;
//			if (ver == true) {
//				System.out.println("Il valore " + n + " è una potenza di 2");
//			}
//			else {
//				System.out.println("Il valore " + n + " NON è una potenza di 2");
//			}
				
		

//			int freccia = (int) (Math.round() * 360) + 1;  ////////DA RIVEDERE////
//			int settore = 0;								//////shth.png/////
////				while (freccia > 360) {
////					double freccia = (int) (Math.round() * 360) + 1;
////				}
//			System.out.println(freccia);
//		
//			switch (giorno) {
//			case 1:
//				freccia 
//				System.out.println("lunedì");
//				break;
//				
//			case 2:
//				System.out.println("martedì");
//				break;	
//				
//			case 3:
//				System.out.println("mercoledì");
//				break;
//				
//			case 4:
//				System.out.println("giovedì");
//				break;	
//				
//			case 5:
//				System.out.println("venerdì");
//				break;
//				
//			case 6:
//				System.out.println("sabato");
//				break;	
//				
//			case 7:
//				System.out.println("domenica");
//				break;	
//				
//			default:
//	            System.out.println("freccia fuori");
//	            break;	
//				
//			}
		
		
//			double pi = Math.PI;
//			double cifra = Math.floor(pi * 100) / 100;
//			System.out.println(cifra);
		
		
//			System.out.println(LocalDate.now());
		
		
//			System.out.println(LocalDate.of(2025, 9, 03));
		
//			LocalDate oggi = LocalDate.now();
//			LocalDate plus = oggi.plusDays(30);
//			System.out.println(plus);
			
//			LocalDate oggi = LocalDate.now();
//			LocalDate newYear = LocalDate.of(2025, 12, 31);
//			long giorni = ChronoUnit.DAYS.between(oggi, newYear);
//			System.out.println(giorni);
			
		
//			LocalDate pass = LocalDate.of(2024, 12, 31);
//			boolean check = pass.isBefore(LocalDate.now());
//			System.out.println("Il 31 dicembre del 2024 è passato? " + check);
		
		
//			System.out.println(LocalDate.now().getYear());
//			System.out.println(LocalDate.now().getMonth());		
//			System.out.println(LocalDate.now().getDayOfMonth());
		
		
//			LocalDate annoCorr = LocalDate.now();
//			boolean bisestile = annoCorr.isLeapYear();
//			System.out.println("L'anno corrente " + annoCorr.getYear() + " è bisestile? " + bisestile);
			
			
//			LocalDate annoNascita = LocalDate.of(2010, 4, 05);      /////////////
//			LocalDate oggi = LocalDate.now();
//			Period eta = Period.between(annoNascita, oggi);
//			System.out.println(eta.getYears());
			
			
//			LocalDate oggi = LocalDate.of(2025, 9, 04);
//			DayOfWeek giorno = oggi.getDayOfWeek();
//			System.out.println(giorno);
			
			
//			LocalDate oggi = LocalDate.now();
//				for (int i = 0; i < 5; i++) 
//					System.out.println("Giorno " + (i + 1) + " " + oggi.plusDays(i));
		
			
//			LocalDateTime oggi = LocalDateTime.now();
//			System.out.println(oggi);
//			LocalDateTime add = oggi.plusHours(2).plusMinutes(30);
//			System.out.println("Più 2 ore e 30 minuti: " + add);
			
		
//			long min = ChronoUnit.MINUTES.between(LocalTime.of(14, 15), LocalTime.of(16, 45));
//			System.out.println("Minuti trascorsi: " + min);
			
					
//			LocalDate data = LocalDate.of(2025, 03, 10);
//			System.out.println("Data formattazone standard: " + data);
//			DateTimeFormatter form = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//			System.out.println("Data nuova formattazione: " + data.format(form));
////			System.out.println(data.getDayOfMonth() + "/" + data.getMonthValue() + "/" + data.getYear());
		
		
//			LocalDateTime data = LocalDateTime.of(2025,01,01, 0,0,0);
//			LocalDateTime now = LocalDateTime.now();
//			long giorni = ChronoUnit.DAYS.between(data, now);
//			System.out.println("Giorni passati tra le 2 date: " + giorni);
		
		
//			LocalDate oggi = LocalDate.now();
//			String mese = LocalDate.now().getMonth().getDisplayName(java.time.format.TextStyle.FULL, Locale.ITALIAN);
//			System.out.println("Il mese corrente in italiano maiuscolo è: " + mese.toUpperCase());
			
		
		
	}
}
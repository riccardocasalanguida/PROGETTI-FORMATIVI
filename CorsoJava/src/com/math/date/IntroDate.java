package com.math.date;
import java.time.*;
import java.time.temporal.ChronoUnit;

public class IntroDate {

	public static void main(String[] args) {

//		LocalDate data = LocalDate.of(2025, 01, 01);
//		System.out.println("Oggi è: " + data);
//		
//		LocalDate data2 = LocalDate.now();
//		LocalDate plus = data2.plusDays(30);
//		System.out.println(plus);
//		
//		LocalDate oggi = LocalDate.now();
//		LocalDate data25Dic = LocalDate.of(2025, 12, 25);
//		long i = ChronoUnit.DAYS.between(oggi, data25Dic);
//		System.out.println(i);
		
//		LocalDate dataDuemila = LocalDate.of(2000, 01, 01);
//		LocalDate oggi2 = LocalDate.now();		
//		boolean Antecedente = dataDuemila.isBefore(oggi2);
//		System.out.println("La data è antecedente ad oggi");
	
//		System.out.println("Anno: " + LocalDate.now().getYear());
//		System.out.println("Anno: " + LocalDate.now().getMonthValue());
//      System.out.println("Anno: " + LocalDate.now().getDayOfMonth());
		
		
//		int oggi3 = LocalDate.now().getYear();
//		boolean Bisestile = (oggi3 % 400 == 0) || (oggi3 % 4 == 0 && oggi3 % 100 != 0);
//			
//			if (Bisestile)
//			System.out.println("il 2025 è Bisestile");
//			
//			else
//			System.out.println("il 2025 non è Bisestile");
				

		LocalDate dataNascita = LocalDate.of(2000, 04, 15);
		LocalDate oggi4 = LocalDate.now();
		Period eta = Period.between(dataNascita, oggi4);
		System.out.println("Età attuale: " + eta.getYears() + " anni");
		
		
		LocalDate oggi5 = LocalDate.now();
        boolean bisestile = oggi5.isLeapYear();
        System.out.println("L'anno " + oggi5.getYear() + " è bisestile? " + bisestile);
		
		
	}

}

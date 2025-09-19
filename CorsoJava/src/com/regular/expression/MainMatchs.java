package com.regular.expression;

import java.util.regex.*;
import java.util.regex.Pattern;

public class MainMatchs {

	public static void main(String[] args) {

		String nome = "Riccardo";
		boolean match = nome.matches("^[a-zA-Z]+$");
		System.out.println("La stringa contiene solamente caratteri maiuscoli e minuscoli? " + match);
		System.out.println("");
		//////
		String str = "1524866";
		boolean m = str.matches("^\\d+$");
		System.out.println("La stringa contiene solo valori numerici? " + m);
		System.out.println("");
		//////
		String mail = "riccardo.casalanguida@live.it";
		boolean mat = mail.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$");
		System.out.println("I caratteri nella mail sono corretti? " + mat);
		System.out.println("");
		//////
		String tel = "+393755362867";
		boolean ma = tel.matches("^\\+39\\d{9,10}$");
		System.out.println(ma);
		System.out.println("");
		//////
		String pasw = "ProVaaa3";
		boolean metch1 = pasw.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$");
		System.out.println(metch1);
		System.out.println("");
		//////
		String regex = "\\b\\w+\\b";
		String str1 = "Stringa di prova esercizi metodo Matcher";
		Matcher matc = Pattern.compile(regex).matcher(str1);
		while(matc.find()) {
			System.out.println(matc.group());
		}
		System.out.println("");
		//////
		String input7 = "123455ABc";
        String output = input7.replaceAll("\\d", "*");
        System.out.println(output);
        System.out.println("");
		//////
		String testo = "Contatti: a@b.com, info@site.it";
		Matcher xxx = Pattern.compile("[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}").matcher(testo);
		while (xxx.find()) {
			System.out.println(xxx.group());
		}
		System.out.println("");
		//////
		String cap = "65100";
		boolean verif = cap.matches("^\\d{5}$");
		System.out.println("Il CAP inserito soddisfa i requisiti? " + verif);
		System.out.println("");
		//////
		String str4 = "Stringa di prova esercizi metodo Matcher";
		Matcher x = Pattern.compile("\\b\\w+\\b").matcher(str4);
		int cont = 0;
		while (x.find()) {
			cont++;
		}
		System.out.println("La stringa contiene " + cont + " parole.");
		System.out.println("");
		//////
		String cf = "CSLRCR86L09A488W";
		boolean check = cf.matches("^[A-Z0-9]{16}$");
		System.out.println("il CF inserito soddisfa i requisiti necessari? " + (check ? "CF ok!" : "CF errato!"));
		System.out.println("");
		//////
		String targa = "AB123CD";
		boolean checkTarga = targa.matches("^[A-Z]{2}\\d{3}[A-Z]{2}$");
		System.out.println("La forma della targa è corretta? " + (checkTarga ? "Targa Valida!" : "Targa non Vaida!"));
		System.out.println("");
		//////
		String data = "Scadenza: 01/01/2025, rinnovo: 15/07/2026";
		Matcher d = Pattern.compile("\\b\\d{2}/\\d{2}/\\d{4}\\b").matcher(data);
		while (d.find()) {
		System.out.println(d.group());
		}
		System.out.println("");
		//////
		String reg = "\s\s";
		String parole1 = "      ciao         hello         prova       ";
		Matcher m1 = Pattern.compile(reg).matcher(parole1);
		while (m1.find()) {
			parole1 = parole1.replace("  ", " ");
		}
		System.out.println(parole1);
		String frase = "      ciao         hello         prova       ";
		String pulita = frase.replaceAll("\\s+", " ");
		System.out.println(pulita);
		System.out.println("");
		//////
		String word6 = "parola1, parola2. parola3;";
		String[] wordArr = word6.split("[,;.]");//con le partentesi quadre indichiamo alla regex i caratteri da intercettare

		for (String word9 : wordArr) {
			System.out.println(word9);
		}
		System.out.println("");
		//////
		String email = "riccardo1_casalanguida@live.it";
		boolean controllo = email.matches("^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$");
		System.out.println("L'indirizzo mail rispetta i requisiti? " + controllo);
		System.out.println("");
		//////
		String input17 = "+39 3451234567";
        String input18 = "+1 2025550173";
        boolean match10 = input17.matches("^\\+\\d{1,3}[- ]?\\d{1,4}[- ]?\\d{3}[- ]?\\d{4}$");
        boolean match11 = input18.matches("^\\+\\d{1,3}[- ]?\\d{1,4}[- ]?\\d{3}[- ]?\\d{4}$");
        System.out.println("Il primo numero è internazionale? " + match10);
        System.out.println("Il secondo numero è internazionale? " + match11);
		System.out.println("");
		//////
		String hashtag = "Test #java #regex #esercizio";
		Matcher h = Pattern.compile("#\\w+").matcher(hashtag);
		while (h.find()) {
			System.out.println(h.group());
		}
		System.out.println("");
		//////
		String CF = "RSSMRA85M01H501Z";
        boolean w = CF.matches("^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$");       
        System.out.println("La forma del CF rispetta i requisiti? " + (w ? "SI" : "NO"));
        System.out.println("");
		//////
        String pass = "Passw12*";
        boolean p = pass.matches("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%*?&]).{8,}$");
        System.out.println(p);
        System.out.println("");
		//////
        String iban = "IT60X0542811101000000123456";
        boolean ib = iban.matches("^[A-Z]{2}\\d{2}[A-Z0-9]{1,30}$");
        System.out.println("L'IBAN inserito rispetta i requisiti? " + (ib ? "SI" : "NO"));
        System.out.println("");
		
		
		
		
	}

}

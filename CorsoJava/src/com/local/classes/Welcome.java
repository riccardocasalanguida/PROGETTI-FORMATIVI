package com.local.classes;

public class Welcome {

	public static void stampaTesto(String testo) {
		class Messaggio {
//			String saluta() {
//				return testo;
//			}
			public void saluta() {
				System.out.println("Messaggio: " + testo);
			}
			
		}
		Messaggio t = new Messaggio();
		t.saluta();
	}
	
	public static void main(String[] args) {
//		stampaTesto("Hello World!");
		stampaTesto("Hello World!");
	}

}

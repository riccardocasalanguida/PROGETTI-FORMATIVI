package com.local.classes;

public class NumeroDato {

	public static void getVerificaNumero(int num) {
		class PariDispari {
			boolean pari() {
				if (num % 2 == 0) {
					return true;
					
				}
				else {
					return false;
				}				
			}
		}
		PariDispari res = new PariDispari();
		
	//	System.out.println("Il numero è pari? " + res.pari());
		System.out.println("Il numero: " + num + (res.pari() ? " è pari" : " è dispari"));
		////////////////////////////OPERATORE TERNARIO////////////////////
	}
	
	
	public static void main(String[] args) {

		getVerificaNumero(11);
	}

}

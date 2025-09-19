package com.oop.classes.intro;

public class CapoAbbigliamento extends TipoCapoAbbigliamento {

	protected int taglia = 0;
	protected int quantitaAcquistata = 0;
	protected int quantitaDisponibile = 0;

	public CapoAbbigliamento(String marca, String modello, double costo, int taglia, int quantitaAcquistata,
			int quantitaDisponibile) {
		super(marca, modello, costo);
		this.taglia = taglia;
		this.quantitaAcquistata = quantitaAcquistata;
		this.quantitaDisponibile = quantitaDisponibile;
	}

	public void venduto(int capiVenduti) {
		int sottrazione = quantitaDisponibile - capiVenduti;
		if (quantitaDisponibile > sottrazione) {
			quantitaDisponibile = quantitaDisponibile - capiVenduti;
		}

	}

	public void getDettagli() {
		
		System.out.println(this.marca);
		System.out.println(this.modello);
		System.out.println(this.costo);
		System.out.println(this.taglia);
		System.out.println(this.quantitaDisponibile);
		System.out.println(this.quantitaAcquistata);
		
	}
	
	
	
	
}

package com.oop.classes.intro;

public class TipoCapoAbbigliamento {

	protected String marca;
	protected String modello;
	protected double costo;

	public TipoCapoAbbigliamento(String marca, String modello, double costo) {
		super();
		this.marca = marca;
		this.modello = modello;
		this.costo = costo;
		}
		//getCosto
		//applicaSconto
		
		public double getCosto() {
			return costo;
		}
		
		public double getApplicaSconto(double sconto) {
			return costo - (costo * sconto / 100);		
		}

		public void getModificaCosto(double €) {
			this.costo = €;
		}
		
		
		
		
}

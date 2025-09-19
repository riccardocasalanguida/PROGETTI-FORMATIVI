package com.oop.classes.intro;

public class Car {

	protected double resaCarburante;
	protected double gas;
	protected boolean benzina;

	public void drive(double km) {
		gas = gas - (km / resaCarburante);
	}
		
	public double getResaCarburante() {
		return resaCarburante;
	}

	public void setResaCarburante(double resaCarburante) {
		this.resaCarburante = resaCarburante;
	}

	public double getGas() {
		return gas;
	}

	public void addGas(double rifornimento) {
		this.gas = rifornimento;
	}
	
	public Car(double kmL) {
		this.resaCarburante = kmL;
		this.gas = 0;		
	}
	
	
	
			
	
	
	
	

}

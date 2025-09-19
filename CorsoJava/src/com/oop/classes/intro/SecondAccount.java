package com.oop.classes.intro;

public class SecondAccount extends FirstAccount {    //MainAccount2

	private int canoneAnnuo;
	
	
	public int getCanoneAnnuo() {
		return getTotaleConto() * canoneAnnuo / 100;
	}

	public void setCanoneAnnuo(int canoneAnnuo) {
		this.canoneAnnuo = canoneAnnuo;
	}
	
	public int getContoFinale() {
		return getTotaleConto() - getCanoneAnnuo();
	}
	
	
	
	
	
	
	
}

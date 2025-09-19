package com.oop.abstracts.classes;

public class ProductAppWeb extends PreventivoAppWeb {

	
	private int tariffa;
	
	private int daysFigma;
	private int daysMockup;
	private int daysDBOffline;
	private int daysResponsive;
	private String waitingTimesApp;	
	private int daysMultilanguage;

	
	
	@Override
	public int getDaysFigma() {
		return daysFigma;
	}

	@Override
	public int getDaysMockup() {
		return daysMockup;
	}

	@Override
	public int getDaysDBOffline() {
		return daysDBOffline;
	}

	@Override
	public int getDaysResponsive() {
		return daysResponsive;
	}

	@Override
	public String getDaysWaitingTimes() {
		return waitingTimesApp;
	}

	@Override
	public int getDaysMultiLanguage() {
		return daysMultilanguage;
	}

	
	
	
	
	@Override
	public int getCostoFigma() {
		return tariffa * getDaysFigma();
	}

	@Override
	public int getCostoMockup() {
		return tariffa * getDaysMockup();
	}

	@Override
	public int getCostoDBOffline() {
		return tariffa * getDaysDBOffline();
	}

	@Override
	public int getCostoResponsive() {
		return tariffa * getDaysResponsive();
	}

	@Override
	public int getCostoMultiLanguage() {
		return tariffa * getDaysMultiLanguage();
	}

	public int getTotalPriceApp() {
		return getCostoFigma() + getCostoMockup() + getDaysDBOffline() + getCostoResponsive() + getCostoMultiLanguage();
	}
	
	
	
	
	public void setTariffa(int tariffa) {
		this.tariffa = tariffa;
	}

	public void setDaysFigma(int daysFigma) {
		this.daysFigma = daysFigma;
	}

	public void setDaysMockup(int daysMockup) {
		this.daysMockup = daysMockup;
	}

	public void setDaysDBOffline(int daysDBOffline) {
		this.daysDBOffline = daysDBOffline;
	}

	public void setDaysResponsive(int daysResponsive) {
		this.daysResponsive = daysResponsive;
	}

	public void setWaitingTimesApp(String waitingTimesApp) {
		this.waitingTimesApp = waitingTimesApp;
	}

	public void setDaysMultilanguage(int daysMultilanguage) {
		this.daysMultilanguage = daysMultilanguage;
	}


	
	
	
}

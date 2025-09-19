package com.oop.classes.intro;

public class Dipendente2 {
    private String matricola;
    private float stipendio;
    private float straordinario;
    
    public Dipendente2(String matricola, float stipendio, float straordinario) {
        super();
        this.matricola = matricola;
        this.stipendio = stipendio;
        this.straordinario = straordinario;
    }

    public float getStipendio() {
        return stipendio;
    }
    
    public float paga(int ore) {
        this.stipendio = ore * this.straordinario + this.stipendio;
        return this.stipendio;
    }

    public String stampa() {
        return "Dipendente [matricola=" + matricola + ", stipendio=" + stipendio + ", straordinario=" + straordinario
                + "]";
    }
    
}

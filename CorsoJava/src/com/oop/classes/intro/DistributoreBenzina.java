package com.oop.classes.intro;

public class DistributoreBenzina {
    
    private double depositoBenzina = 0; //quantitativo benzina disponibile
    private double depositoGasolio = 0;
    private double prezzoGasolio = 0; //prezzo benzina euro per litro
    private double prezzoBenzina = 0;
    private boolean benzina;
    
    public DistributoreBenzina(double prezzoBenzina, double prezzoGasolio) {
    
        this.prezzoBenzina = prezzoBenzina;
        this.prezzoGasolio = prezzoGasolio;
    }
    
    
    
    public void rifornisciBenzina(double unaQuantita) {
        
        this.depositoBenzina += unaQuantita;
    }
    
    public void rifornisciGasolio(double unaQuantita) {
        
        this.depositoGasolio += unaQuantita;
    }
    
    public void vendi(double euro, Car2 c) {
        
        double litriDaTogliereBenzina = 0;
        double litriDaTogliereGasolio = 0;
        
        if(c.usaBenzina() == true) {
            
            litriDaTogliereBenzina = euro / prezzoBenzina;
            
            if(litriDaTogliereBenzina <= this.depositoBenzina) {
                
                depositoBenzina -= litriDaTogliereBenzina;
                c.aggiungiCarburante(litriDaTogliereBenzina);
                
            }
        } else {
            
            litriDaTogliereGasolio = euro / prezzoGasolio;
            
            if(litriDaTogliereGasolio <= this.depositoGasolio) {
                
                depositoGasolio -= litriDaTogliereGasolio;
                c.aggiungiCarburante(litriDaTogliereGasolio);
            }
        }
    }
    
    public void reimpostaPrezziCarburanti(double tariffaGasolio, double tarriffaBenzina) {
        
        this.prezzoGasolio = tariffaGasolio;
        this.prezzoBenzina = tarriffaBenzina;
    }
    
    public double getLitriBenzina() {
        
        return this.depositoBenzina;
    }
    
    public double getLitriGasolio() {
        
        return this.depositoGasolio;
    }
    
    public double getPrezzoBenzina() {
        
        return this.prezzoBenzina;
    }
    
    public double getPrezzoGasolio() {
        
        return this.prezzoGasolio;
    }
    
}

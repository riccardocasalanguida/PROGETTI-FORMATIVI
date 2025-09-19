package com.oop.classes.intro;

public class Cellulare {

    private double carica; //rappresenta il quantitativo di euro disponibile per le chiamate
    private int numeroChiamate; //rappresenta il numero di chiamate effettuate con il cellulare
    private int minutiChiamateTotali = 0;
    
    public Cellulare(double carica) {
        this.carica = carica;
    }

    public void ricarica(double ricarica) {
        this.carica += ricarica;
    }
    
    public void chiama(double minutiDurata) {
        this.numeroChiamate++;
        
        if (this.carica - minutiDurata*0.20 > 0) {
            this.carica -= minutiDurata*0.20;
            minutiChiamateTotali += minutiDurata;
        }
        
    }
    
    public double numero404() {
        return this.carica;
    }    
    
    public void azzeraChiamate() {
        this.numeroChiamate = 0;
        this.minutiChiamateTotali = 0;
        this.carica = 0;
    }

    public String getNumeroChiamate() {
        return "Cellulare [numeroChiamate=" + this.numeroChiamate + ", minutiChiamateTotali=" + minutiChiamateTotali + "]";
    }

    public static void stampa(Object aaa) {
        System.out.println(String.valueOf(aaa));
    }

    public static void main(String[] args) {
        
        Cellulare cellulare1 = new Cellulare(20);
        
        cellulare1.ricarica(50.0);
        cellulare1.chiama(13.0);
        stampa(cellulare1.numero404());
        stampa(cellulare1.getNumeroChiamate());
        
        cellulare1.ricarica(80.0);
        cellulare1.chiama(20.0);
        stampa(cellulare1.numero404());
        stampa(cellulare1.getNumeroChiamate());
        
        cellulare1.ricarica(20.0);     
        cellulare1.chiama(90.0);       
        stampa(cellulare1.numero404());
        stampa(cellulare1.getNumeroChiamate());
        
        stampa("chiamate azzerate");
        
        cellulare1.azzeraChiamate();
        stampa(cellulare1.getNumeroChiamate());
    }
    
}

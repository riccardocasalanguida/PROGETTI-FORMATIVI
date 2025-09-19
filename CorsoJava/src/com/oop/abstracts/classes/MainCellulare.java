package com.oop.abstracts.classes;

//Progettare una classe di nome Cellulare, per rappresentare un telefono cellulare
//con contratto a ricarica.
//Tale classe prevede due variabili d'istanza. La prima variabile d'istanza e'
//definita come private double carica, e rappresenta il quantitativo di euro
//disponibile per le chiamate. La seconda variabile d'istanza e' definita come
//private int numeroChiamate, e rappresenta il numero di chiamate effettuate con
//il cellulare. La classe deve implementare un costruttore public Cellulare(double
//unaCarica), che prende come parametro esplicito la quantita' di euro della
//ricarica iniziale. La classe deve inoltre implementare i seguenti metodi. Un
//metodo definito come public void ricarica(double unaRicarica), che ricarica il
//telefonino. Un metodo definito come public void chiama(double minutiDurata), che
//effettua una chiamata di durata in minuti specificata dal parametro esplicito.
//Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria
//contenente il numero di chiamate effettuate dal telefonino. Si assuma un costo
//di 0.20 euro per ogni minuto di chiamata. Un metodo public double numero404(),
//che restituisce il valore della carica disponibile. Un metodo public int
//getNumeroChiamate(), che restituisce il valore della variabile d'istanza
//numeroChiamate. Infine, un metodo public void azzeraChiamate(), che azzera la
//variabile contenente il numero di chiamate effettuate dal telefonino.


public class MainCellulare extends Cellulare{
    
    private double carica; // Quantitativo di euro disponibile per le chiamate
    private int numeroChiamate; // Numero di chiamate effettuate con il cellulare
    
    //Costruttore
    public MainCellulare(double unaCarica) {
        this.carica = unaCarica;
    }

    
    //Un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    //telefonino
    @Override
    public void ricarica(double unaCarica) {
        if(unaCarica > 0) {
            carica += unaCarica;
        }
    }

    /*Effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria
    contenente il numero di chiamate effettuate dal telefonino*/
    @Override
    public void chiama(double minutiDurata) {
        double costoChiamata = minutiDurata * 0.20;

        if (minutiDurata > 0 && carica >= costoChiamata) {
            carica -= costoChiamata;
            numeroChiamate++;
        } else {
            System.out.println("Credito insufficiente o durata non valida.");
        }
    }


    //Restituisce il valore della carica disponibile
    @Override
    public double numero404() {
        return carica;
    }


    //Restituisce il valore della variabile d'istanza
    //numeroChiamate.
    @Override
    public int getNumeroChiamate() {

        return numeroChiamate;
    }


    //Azzera la variabile contenente il numero di chiamate effettuate dal telefonino
    @Override
    public void azzeraChiamate() {

        numeroChiamate = 0;
    }


    public static void main (String[] args) {
        
        MainCellulare mioTelefono = new MainCellulare(10.0); // Ricarica iniziale: 10 euro

        mioTelefono.chiama(5); // Chiamata da 5 minuti (1 euro)
        System.out.println("Credito residuo: " + mioTelefono.numero404() + " euro");
        System.out.println("Numero chiamate: " + mioTelefono.getNumeroChiamate());

        mioTelefono.ricarica(5.0); // Ricarica di 5 euro
        System.out.println("Credito dopo ricarica: " + mioTelefono.numero404() + " euro");

        mioTelefono.azzeraChiamate();
        System.out.println("Numero chiamate dopo azzeramento: " + mioTelefono.getNumeroChiamate());
        
        
    }

}
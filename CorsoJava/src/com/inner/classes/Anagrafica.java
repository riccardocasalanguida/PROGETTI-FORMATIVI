package com.inner.classes;

public class Anagrafica {

    int telefono;
    String documentiIdentita;
    
    public Anagrafica(int telefono, String documentiIdentita) {
        super();
        this.telefono = telefono;
        this.documentiIdentita = documentiIdentita;
    }
    
    
    public class Utente {
        
        String nome;
        String cognome;
        
        
        public Utente(String nome, String cognome) {
            super();
            this.nome = nome;
            this.cognome = cognome;
        }

        public void utente(){
            System.out.println("TELEFONO: "+telefono+ " DOCUMENTO: "+ documentiIdentita+ "NOME: "+ nome + "COGNOME: "+cognome );
        }
    }
    
    
    public static void main(String[] args) {
        
        Anagrafica anagrafica = new Anagrafica(123456, "ABCDE ");
        
        Anagrafica.Utente u =  anagrafica.new Utente("Mario ", "Rossi ");
        
        u.utente();
    }
}

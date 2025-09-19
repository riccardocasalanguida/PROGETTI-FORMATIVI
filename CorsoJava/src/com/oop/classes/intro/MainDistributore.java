package com.oop.classes.intro;

import java.util.Scanner;

public class MainDistributore {

    public static void main(String[] args) {

        
        Scanner in = new Scanner(System.in);
        Scanner inStr = new Scanner(System.in);
        
        double parametro1;
        double parametro2;
        String tipoMacchina;
        
        
    
        
        System.out.print("Inserisci il prezzo della benzina: " );
        parametro1= in.nextDouble();
        System.out.print("Inserisci il prezzo del gasolio: " );
        parametro2= in.nextDouble();
        
        DistributoreBenzina distributore = new DistributoreBenzina(parametro1, parametro2);
        
        System.out.print("Inserisci una macchina a benzina o gasolio? ");
        tipoMacchina= inStr.nextLine();
        System.out.print("Inserire la resa: ");
        parametro1= in.nextDouble();
        System.out.print("Inserire i litri di carburante: ");
        parametro2= in.nextDouble();
        Car2 benzina = new Car2(tipoMacchina, parametro1, parametro2);
        
        System.out.print("Inserisci una macchina a benzina o gasolio? ");
        tipoMacchina= inStr.nextLine();
        System.out.print("Inserire la resa: ");
        parametro1= in.nextDouble();
        System.out.print("Inserire i litri di carburante: ");
        parametro2= in.nextDouble();
        Car2 gasolio = new Car2(tipoMacchina, parametro1, parametro2);
        
        
        
        System.out.print("Quanta benzina vuoi rifornire? ");
        parametro1= in.nextDouble();
        distributore.rifornisciBenzina(parametro1);
        
        System.out.print("Quanto gasolio vuoi rifornire? ");
        parametro1= in.nextDouble();
        distributore.rifornisciGasolio(parametro1);
        
        System.out.println("Su quale macchina vuoi fare benzina? ");
        tipoMacchina= inStr.nextLine();
        
        if(tipoMacchina == "benzina") {
            System.out.print("Quanta benzina vuoi fare? ");
            parametro1 = in.nextDouble();
            distributore.vendi(parametro1, benzina);
        } else {
            System.out.print("Quanta gasolio vuoi fare? ");
            parametro1 = in.nextDouble();
            distributore.vendi(parametro1, gasolio);
        }
        
        if(tipoMacchina == "benzina") {
            System.out.print("Quanta benzina vuoi fare? ");
            parametro1 = in.nextDouble();
            distributore.vendi(parametro1, benzina);
        } else {
            System.out.print("Quanta gasolio vuoi fare? ");
            parametro1 = in.nextDouble();
            distributore.vendi(parametro1, gasolio);
        }

        System.out.println("Il quantitativo di benzina rimanente è: " + distributore.getLitriBenzina());
        System.out.println("Il quantitativo di gasolio rimanente è: " + distributore.getLitriGasolio());
        
        System.out.println("");
        
        System.out.println("Prezzi attuali: ");
        System.out.println("Il prezzo della benzina è: " + distributore.getPrezzoBenzina());
        System.out.println("Il prezzo del gasolio è: " + distributore.getPrezzoGasolio());
        
        System.out.print("Nuovo prezzo benzina: ");
        parametro1 = in.nextDouble();
        
        System.out.print("Nuovo prezzo gasolio: ");
        parametro2 = in.nextDouble();
        
        distributore.reimpostaPrezziCarburanti(parametro2, parametro1);

        System.out.println("Nuovi prezzi: ");
        System.out.println("Il prezzo della benzina è: " + distributore.getPrezzoBenzina());
        System.out.println("Il prezzo del gasolio è: " + distributore.getPrezzoGasolio());
        
        in.close();
        inStr.close();
    }
}
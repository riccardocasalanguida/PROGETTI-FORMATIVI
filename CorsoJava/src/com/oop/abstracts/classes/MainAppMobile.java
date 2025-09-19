package com.oop.abstracts.classes;

public class MainAppMobile {

    public static void main(String[] args) {

        ProductAppMobile app = new ProductAppMobile(250, 10, 20, 30, 40, "90 GIORNI");

        System.out.println("Il totale dell' app è di : €" + app.getPriceApp());

    }

}


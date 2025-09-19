package com.oop.encapsulation;


public class HomeAccount {

	public static void main(String[] args) {
	
	MyAccount acc = new MyAccount(0,1000,500,200,300, 0);
	
	System.out.println(acc.getTotalAccount());
	
	
	
	OtherAccount oth = new OtherAccount(0,1000,500,200,300,2);
	System.out.println(oth.getTotalAccount());
	
	
	
	}
	
}

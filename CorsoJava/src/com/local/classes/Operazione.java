package com.local.classes;

public class Operazione {
	
	public static void getProdotto(int x, int y) {
		class Moltiplica {
			int res() {
				return x * y;
			}
		}
		Moltiplica z = new Moltiplica();
		System.out.println(z.res());
	}
	
	
	

	public static void main(String[] args) {
		getProdotto(3,5);
		
	}

}

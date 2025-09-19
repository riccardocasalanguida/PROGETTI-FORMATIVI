package com.local.classes;

public class Geometria {

	public abstract static class Figura {

		public abstract double Area();

	}
		
		public static void CalcolaAreaCerchio(double raggio) {
			class Cerchio extends Figura {

				@Override
				public double Area() {
					return Math.PI * raggio * raggio;
				}

			}
		
		
		Cerchio a = new Cerchio();
		System.out.println("L'Area del Cerchio è: " + a.Area());
		
		}
		
	

	public static void main(String[] args) {
		
		CalcolaAreaCerchio(5);
	}

}

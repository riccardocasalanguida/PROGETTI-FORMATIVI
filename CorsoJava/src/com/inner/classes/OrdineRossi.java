package com.inner.classes;

public class OrdineRossi {

	private String nomeCliente;
	private String cognomeCliente;
	private long partitaIva;
	private long fattura;

	public OrdineRossi(String nomeCliente, String cognomeCliente, long partitaIva, long fattura) {

		this.nomeCliente = nomeCliente;
		this.cognomeCliente = cognomeCliente;
		this.partitaIva = partitaIva;
		this.fattura = fattura;
	}

	public class Prodotto {

		private int idProdotto;
		private String nomeProdotto;
		private int quantitaProdotto;
		private int prezzoProdotto;

		public Prodotto(int idProdotto, String nomeProdotto, int quantitaProdotto, int prezzoProdotto) {

			this.idProdotto = idProdotto;
			this.nomeProdotto = nomeProdotto;
			this.quantitaProdotto = quantitaProdotto;
			this.prezzoProdotto = prezzoProdotto;
		}

		
		public void StampaOrdine() {
			System.out.println("DETTAGLI ORDINE: ");
			System.out.println("NOME: " + nomeCliente + " COGNOME: " + cognomeCliente);
			System.out.println("PARTITA IVA: " + partitaIva + " FATTURA NUMERO: " + fattura);
			System.out.println("---------------------------------");
			System.out.println("DETTAGLI ORDINE: ");
			System.out.println("ID PRODOTTO: " + idProdotto + " PRODOTTO: " + nomeProdotto);
			System.out.println("QUANTITA': " + quantitaProdotto + " PREZZO: " + prezzoProdotto);
		}
		
		
		
	}

	public static void main(String[] args) {

		OrdineRossi rossi = new OrdineRossi("Giorgio", "Rossi", 1234567890l, 1700l);
		OrdineRossi.Prodotto a = rossi.new Prodotto(88888, "Scarpe", 5, 300);
		a.StampaOrdine();
		
		
		
	}

}

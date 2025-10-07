import React from 'react'
import Figlio1 from './figli-components/Figlio1'
import Figlio3 from './Figlio3';
Figlio1


const Padre = () => {

  const nome= "Riccardo";
  const età= 39;

  const datiAssegnati = {
    product: "Scarpe",
    brand: "Nike",
    price: 120.50,
    color: "Rosso"
  };

  return (
    <div>
      <h1>SONO FILE PADRE</h1>
      <p>testo di prova</p>
      <br />
      <p style={{fontSize: "60px", color: "blue", textAlign: "center"}}>{nome}</p>
      <p style={{fontSize: "60px", color: "blue", textAlign: "center"}}>{età}</p>
      <br />
      <Figlio1 />
      <Figlio3 
        product={datiAssegnati.product} 
        brand={datiAssegnati.brand} 
        price={datiAssegnati.price} 
        color={datiAssegnati.color} />


    </div>
  )
}

export default Padre


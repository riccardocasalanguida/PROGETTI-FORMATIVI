import React from 'react'
import ListaProdotti from './ListaProdotti'
import styled from './Prodotti.module.css'

const Prodotti = () => {

    const arrayProd = [
        {
            id:1,
            nome: "Pasta",
            prezzo: 1.00
        },
        {
            id:2,
            nome: "Sugo",
            prezzo: 1.80
        },
        {
            id:1,
            nome: "Carne",
            prezzo: 5.00
        }
    ]



  return (
    <div className={styled.nome}>
        <h1 style={{textAlign: "center", color: "brown"}}>LISTA PRODOTTI:</h1>
      <ListaProdotti lista={arrayProd}/>
    </div>
  )
}

export default Prodotti

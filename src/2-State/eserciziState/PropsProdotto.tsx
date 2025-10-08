import React from 'react'
import { IProdotto } from '../model/IProdotto'

const PropsProdotto:React.FC<IProdotto> = (props) => {
  return (
    <div>
      <div style={{color:"red", textAlign:"center", fontSize: "30px"}}>
        NOME: {props.nome}
      </div>
      <div style={{color:"orange", textAlign:"center", fontSize: "30px"}}>
        PREZZO: {props.prezzo}
      </div>
    </div>
  )
}

export default PropsProdotto

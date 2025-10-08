import React from 'react'
import { IPersona } from '../model/IPersona';

const AnagraficaProps: React.FC<IPersona> = (persona) => {
  return (
    <div>
      <ol>
      <li style={{fontSize: "50px", color:"green", marginLeft: "20px"}}>
        ID: {persona.id}</li>
      <li style={{fontSize: "50px", color:"green", marginLeft: "20px"}}>
        NOME: {persona.nome}</li>
      <li style={{fontSize: "50px", color:"green", marginLeft: "20px"}}>
        COGNOME: {persona.cognome}</li>
      <li style={{fontSize: "50px", color:"green", marginLeft: "20px"}}>
        ETA': {persona.età}</li>
      <br />
      <br />
      </ol>
    </div>
  )
}

export default AnagraficaProps





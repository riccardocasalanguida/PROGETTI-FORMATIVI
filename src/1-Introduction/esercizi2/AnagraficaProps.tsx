import React from 'react'
import { IPersona } from '../model/IPersona';

const AnagraficaProps: React.FC<IPersona> = (persona) => {
  return (
    <div>
      <h1 style={{textAlign:"center", color:"green"}}>ID: {persona.id}</h1>
      <h1 style={{textAlign:"center", color:"green"}}>NOME: {persona.nome}</h1>
      <h1 style={{textAlign:"center", color:"green"}}>COGNOME: {persona.cognome}</h1>
      <h1 style={{textAlign:"center", color:"green"}}>ETA': {persona.età}</h1>
    </div>
  )
}

export default AnagraficaProps





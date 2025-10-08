import React from 'react'
import Listpersone from './Listpersone'

const Persona = () => {

    const arrPers = [
        {nome: "Riccardo",
        cognome: "Casalanguida",
        età: 39},
        {nome: "Mario",
        cognome: "Rossi",
        età: 29},
        {nome: "Lucia",
        cognome: "Verdi",
        età: 38}
    ]
  return (
    <div style={{textAlign:"center", fontSize: 50, fontFamily: "cursive"}}>LISTA PERSONE:
      <Listpersone lista={arrPers}/>
    </div>
  )
}

export default Persona

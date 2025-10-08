import React from 'react'
import PropsPersona from './PropsPersona'
import { IPersona } from '../model/IPersona'

type Persona = IPersona[];
const Listpersone:React.FC<{lista: IPersona[]}> = (prop) => {
  return (
    <div>
      {prop.lista.map((p) => (
        <PropsPersona key={p.id} nome={p.nome} cognome={p.cognome} età={p.età}/>
      ))}
    </div>
  )
}

export default Listpersone

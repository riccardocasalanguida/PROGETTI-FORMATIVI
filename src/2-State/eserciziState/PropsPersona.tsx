import React from 'react'
import { IPersona } from '../model/IPersona'
import styled from './Persona.module.css'

const PropsPersona:React.FC<IPersona> = (prop) => {
  return (
    <div className={styled.stile}>
    <div>NOME : {prop.nome}</div>
    <div>COGNOME : {prop.cognome}</div>
    <div>ETA' : {prop.età}</div>
    </div>
  )
}

export default PropsPersona
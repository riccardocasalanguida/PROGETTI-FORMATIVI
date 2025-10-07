import React from 'react'
import { ITalentform } from '../model/ITalentform'

const Figlio3:React.FC<ITalentform> = (props) => {
  return (
    <div>
      <br />
      <br />
      <h1 style={{fontSize: "50px", color: "red", textAlign: "center"}}>DATI FIGLIO 3</h1>
      <br />
      <h1 style={{fontFamily: "fantasy", fontSize: "50px", color: "green", textAlign: "center"}}>{props.product}</h1>
      <h2 style={{fontFamily: "fantasy", fontSize: "50px", color: "green", textAlign: "center"}}>{props.brand}</h2>
      <h3 style={{fontFamily: "fantasy", fontSize: "50px", color: "green", textAlign: "center"}}>{props.price}</h3>
      <h4 style={{fontFamily: "fantasy", fontSize: "50px", color: "green", textAlign: "center"}}>{props.color}</h4>
    </div>
  )
}

export default Figlio3



import React from 'react'

type Props = { nome: string, nazione: string, età: number}
const Player3:React.FC<Props> = (p) => {
  return (
    <div style={{textAlign: "center", 
                fontSize: "30px", 
                color: "greenyellow", 
                marginTop: "1%",
                marginLeft: "30%",
                marginRight: "30%",
                backgroundColor: "black"}}>
      <div>{p.nome}</div>
      <div>{p.nazione}</div>
      <div>{p.età}</div>
    </div>
  )
}
export default Player3




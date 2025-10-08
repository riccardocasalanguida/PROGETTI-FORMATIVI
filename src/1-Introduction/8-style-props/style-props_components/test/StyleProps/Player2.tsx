import React from 'react'
import Player3 from './Player3'

type Player3 = any[]

const Player2:React.FC<{dati:Player3}> = (p) => {
  return (
    <div>
      <Player3 
        nome= {p.dati[0].nome}
        nazione= {p.dati[0].nazione}
        età= {p.dati[0].età}
        />
      <Player3 
        nome= {p.dati[1].nome}
        nazione= {p.dati[1].nazione}
        età= {p.dati[1].età}
        />
      <Player3 
        nome= {p.dati[2].nome}
        nazione= {p.dati[2].nazione}
        età= {p.dati[2].età}
        />    
    </div>
  )
}

export default Player2

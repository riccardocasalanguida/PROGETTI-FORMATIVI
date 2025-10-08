import { Fragment } from 'react'
import Player2 from './StyleProps/Player2';


const Player = () => {

    const arrPlayer = [
        {nome:"Nico",
         nazione: "Spain",
         età: 25},
         {nome:"Marco",
         nazione: "Italy",
         età: 24},
         {nome:"Luca",
         nazione: "France",
         età: 23},
    ];

  return (
    <Fragment>
        <Player2 dati={arrPlayer}/>
    </Fragment>
  )
}

export default Player

import React from 'react'
import Figlio2 from './Figlio2'
Figlio2

function Figlio1() {
  return (
    <div>
        <h2 style={{fontFamily: "fantasy", fontSize: "100px", color: "green"}}>BUONGIORNO SONO FIGLIO 1</h2> 
        <div>
            <Figlio2 />
        </div>     
    </div>
  )
}

export default Figlio1


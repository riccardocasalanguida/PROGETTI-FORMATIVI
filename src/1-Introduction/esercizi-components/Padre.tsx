import React from 'react'
import Figlio1 from './figli-components/Figlio1'
Figlio1

const Padre = () => {
  return (
    <div>
      <h1>SONO FILE PADRE</h1>
      <p>testo di prova</p>
      <Figlio1 />

    </div>
  )
}

export default Padre


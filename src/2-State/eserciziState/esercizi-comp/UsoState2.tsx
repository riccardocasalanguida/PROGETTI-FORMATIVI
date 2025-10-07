import React, { useState } from 'react'


const UsoState2 = () => {
    const [web, setWeb] = useState<string>("") 
    const [counter, setCounter] = useState<number>(0)

        const click = () => {
            setWeb("TEST");
            setCounter(counter + 1);
        }

  return (
    <div>
      <h1>{web}</h1>
      <h1>{counter}</h1>
      <button onClick={click}>CLICCA QUI</button>
    </div>
  )
}

export default UsoState2

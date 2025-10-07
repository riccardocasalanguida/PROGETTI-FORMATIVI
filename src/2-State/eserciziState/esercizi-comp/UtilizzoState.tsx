import React, { useState } from "react";
import { IState1 } from "../../model/IState1";

const UtilizzoState: React.FC<IState1> = () => {

    const [brand, setBrand] = useState<string| null>("")
    const [counter, setCounter] = useState<number>(0)
    const click = () => {
        setBrand("Lenovo")
        setCounter(counter + 1)
    }



  return (
    <div>
      <h1>{brand}</h1>
      <h1>{counter}</h1>
      <button onClick={click}>CLICCA QUI!</button>

    </div>
  )
}

export default UtilizzoState

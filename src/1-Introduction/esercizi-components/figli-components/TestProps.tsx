import React from 'react'


const TestProps:React.FC<{ surname: string; age: number; nation: string }> = (props) => {


  return (
    <div>
      <h1>{props.surname}</h1>
      <h2>{props.age}</h2>
      <h3>{props.nation}</h3>
    </div>
  )
}

export default TestProps

import React from 'react'
import { IAnagrafica } from '../IAnagrafica'
import classes from '/home/riccardo/PROGETTI-FORMATIVI/src/9-Http/01-sending-a-get-request/components/HttpRequestMoviesList.module.css'

const DatiAnagrafica:React.FC<IAnagrafica> = (props) => {
  return (
    <div>
      <li className={classes.movie}>
        <h1>{props.id}</h1>
        <h2>{props.name}</h2>
        <h3>{props.surname}</h3>
        <h4>{props.nation}</h4>
        <h5>{props.age}</h5>
        <h6>{props.job}</h6>
      </li>
    </div>
  )
}

export default DatiAnagrafica
 
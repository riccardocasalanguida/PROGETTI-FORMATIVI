import React from 'react'
import PropsProdotto from './PropsProdotto'
import { IProdotto } from '../model/IProdotto'

type Prodotto = IProdotto;
const ListaProdotti:React.FC<{lista:Prodotto[]}> = (props) => {
  return (
    <div>
      {props.lista.map((elem) => (
        <PropsProdotto key={elem.id} nome={elem.nome} prezzo={elem.prezzo}/>
      ))}
    </div>
  )
}

export default ListaProdotti



/*const Car:React.FC<{brand:string}>=(props)=> {
    return <li>I am a { props.brand }</li>;
  }

export default function Key() {
  const cars = [{id:1,brand: 'Ford'}, {id:2,brand:'BMW'},
    {id :3,brand:"Audi"}];
  return (
    <div>

      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
      
    </div>
  );
}
*/
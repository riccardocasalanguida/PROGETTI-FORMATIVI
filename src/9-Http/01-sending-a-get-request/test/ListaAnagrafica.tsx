import React from 'react'
import { IAnagrafica } from '../IAnagrafica'
import DatiAnagrafica from './DatiAnagrafica'
interface ListaAnagraficaProps{
    anagrafica: IAnagrafica[];
}

const ListaAnagrafica:React.FC<ListaAnagraficaProps> = ({anagrafica}) => {
  return (
    <div>
      <ul>
        {anagrafica?.map((anagraficaItem) => (
        <DatiAnagrafica
          key={anagraficaItem.id}
          name={anagraficaItem.name}
          surname={anagraficaItem.surname}
          nation={anagraficaItem.nation}
          age={anagraficaItem.age}
          job={anagraficaItem.job}
        />
      ))}
      </ul>
    </div>
  )
}

export default ListaAnagrafica


import AnagraficaDati from './AnagraficaDati';
import AnagraficaProps from './AnagraficaProps';
import { IPersona } from '../model/IPersona';


const AnagraficaArray = () => {

    const arr = [
        
        {
        id:1,
        nome:"Riccardo",
        cognome:"Casalanguida",
        età:39},
        {
        id:2,
        nome:"Mario",
        cognome:"Rossi",
        età:32},

        {
        id:1,
        nome:"Lucia",
        cognome:"Verdi",
        età:29}
    
    ];


  return (
    <div>
      <AnagraficaProps />
      <AnagraficaDati persona={arr}/>
    </div>
  )
}

export default AnagraficaArray





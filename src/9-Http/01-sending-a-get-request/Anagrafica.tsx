import React, { Fragment, useState } from 'react'
import ListaAnagrafica from './test/ListaAnagrafica'
import axios from 'axios';
import { IAnagrafica } from './IAnagrafica';



const Anagrafica = () => {
    const [anagrafica, setAnagrafica] = useState<IAnagrafica[]>([]);

    async function fetchAnagrafica() {
    await axios.get("https://mocki.io/v1/0bc48d21-291f-48ea-a025-be6ff2e6ad75").then((response) => {
      const transformedData = response.data.map(
        (anagraficaData: IAnagrafica) => {
          return {
            id: anagraficaData.id,
            name: anagraficaData.name,
            surname: anagraficaData.surname,
            nation: anagraficaData.nation,
            age: anagraficaData.age,
            job: anagraficaData.job
          };
        }
      );
      setAnagrafica(transformedData);
    });
  }


    /*async function fetchAnagrafica() {
        console.log("Tentativo di fetch dell'anagrafica...");
        const url = "https://mocki.io/v1/0bc48d21-291f-48ea-a025-be6ff2e6ad75";
        
        try {
        const response = await axios.get<IAnagrafica[]>(url); 
        const transformedData: IAnagrafica[] = response.data.map(
          (anagraficaData) => ({
            id: anagraficaData.id!,
            name: anagraficaData.name!,
            surname: anagraficaData.surname!,
            nation: anagraficaData.nation!,
            age: anagraficaData.age!,
            job: anagraficaData.job!
          })
        );
        setAnagrafica(transformedData);
        } catch (error) {
        console.error("ERRORE NEL FETCH DELL'ANAGRAFICA:", error);
        }
    }*/








  return (
    <React.Fragment>
        <section>
        <button onClick={fetchAnagrafica}>ANAGRAFICA</button>
      </section>
      <section>
        <ListaAnagrafica anagrafica={anagrafica}/>
        </section>
    </React.Fragment>
  )
}

export default Anagrafica
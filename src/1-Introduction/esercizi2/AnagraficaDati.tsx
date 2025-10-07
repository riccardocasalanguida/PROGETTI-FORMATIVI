import React from 'react'
import AnagraficaProps from './AnagraficaProps'
import { IPersona } from '../model/IPersona';

type Persona = IPersona[];

const AnagraficaDati:React.FC<{persona: Persona}> = (props) => {

  return (
    <div>
        <AnagraficaProps 
        id={props.persona[0].id} 
        nome={props.persona[0].nome} 
        cognome={props.persona[0].cognome} 
        età={props.persona[0].età}/>

        <AnagraficaProps 
        id={props.persona[1].id} 
        nome={props.persona[1].nome} 
        cognome={props.persona[1].cognome} 
        età={props.persona[1].età}/>

        <AnagraficaProps 
        id={props.persona[2].id} 
        nome={props.persona[2].nome} 
        cognome={props.persona[2].cognome} 
        età={props.persona[2].età}/>
       </div>
  )
}

export default AnagraficaDati







/*
import React from "react";
import { IPersona } from "../../1-Introduction/model/IPersona";

const AnagraficaProp: React.FC<IPersona> = (persona) => {
  return (
    <div>
      <h1>NOME: {persona.nome} </h1>
      <h4>COGNOME: {persona.cognome} </h4>
      <h4>ETA: {persona.eta} </h4>
    </div>
  );
};

export default AnagraficaProp;*/





/*
import React from "react";
import AnagraficaProp from "./AnagraficaProp";
import { IPersona } from "../../1-Introduction/model/IPersona";
import "./Anagrafe.css";

type Persona = IPersona[];

const AnagrafeArray: React.FC<{ persona: Persona }> = (props) => {
  return (
    <div className="anagrafe">
      <AnagraficaProp
        nome={props.persona[0].nome}
        cognome={props.persona[0].cognome}
        eta={props.persona[0].eta}
      />

      <AnagraficaProp
        nome={props.persona[1].nome}
        cognome={props.persona[1].cognome}
        eta={props.persona[1].eta}
      />

      <AnagraficaProp
        nome={props.persona[2].nome}
        cognome={props.persona[2].cognome}
        eta={props.persona[2].eta}
      />
    </div>
  );
};

export default AnagrafeArray;*/






/*
import React from "react";
import AnagrafeArray from "./AnagrafeArray";

const AnagrafeProps = () => {
  const arr = [
    {
      id: 1,
      nome: "Matteo",
      cognome: "Di Paola",
      eta: 22,
    },
    {
      id: 2,
      nome: "Giovanni",
      cognome: "Rossi",
      eta: 32,
    },
    {
      id: 3,
      nome: "Matteo",
      cognome: "Verdi",
      eta: 28,
    },
  ];
  return (
    <div>
      <AnagrafeArray persona={arr} />
    </div>
  );
};

export default AnagrafeProps;*/



/*
CSS
.anagrafe {
  color: blue;
  text-align: center;
  font-family: sans-serif;
  background-color: aquamarine;
  margin-left: 30%;
  margin-right: 30%;
}*/



/*
INTERFACCIA
export interface IPersona {
  id?: number;
  nome?: string;
  cognome?: string;
  eta?: number;
  citta?: string;
  indirizzo?: string;
  cap?: number;
}
*/
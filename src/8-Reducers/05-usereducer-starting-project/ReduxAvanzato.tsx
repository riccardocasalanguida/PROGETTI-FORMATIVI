import { useReducer } from "react";
import type { IReducers } from './IReducers'

type Stringa = { type: "stringa"; payload: string };
type Numero = { type: "numero"; payload: string };
type AppAzione = Stringa | Numero;

const reducer = (state: IReducers, action: AppAzione) => {
  if (action.type == "stringa") {
    return { ...state, stringa: "evviva! sono una stringa" };
  } else if (action.type == "numero") {
    return { ...state, numero: "evviva! sono un numero" };
  } else {
    return state;
  }
};

const ReduxAvanzato = () => {
  const [state, dispatch] = useReducer(reducer, { stringa: "", numero: "" });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "stringa", payload: "stringa stringa stringa!" });
        }}
      >
        Btn stringa
      </button>
       
      <button
        onClick={() => {
          dispatch({ type: "numero", payload: "num num num!" });
        }}
      >
        Btn numero
      </button>
      <h1>il numero è: {state.numero}</h1>
      <h1>la stringa è: {state.stringa}</h1>
      <button
        onClick={() => {
          document.location.reload();
        }}
      >
        RESET (non convenzionale con reload della pagina)
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default ReduxAvanzato;
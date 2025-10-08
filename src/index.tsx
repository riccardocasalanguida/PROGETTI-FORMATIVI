import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import UseEffect from './8-Reducers/02-using-the-useeffect-hook/test/UseEffect';
import UseEffectCleanUp from './8-Reducers/02-using-the-useeffect-hook/UseEffectCleanUp';
import TestUseEffect from './8-Reducers/02-using-the-useeffect-hook/test/TestUseEffect';
import ContatoreCleanUp from './8-Reducers/02-using-the-useeffect-hook/test/ContatoreCleanUp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContatoreCleanUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





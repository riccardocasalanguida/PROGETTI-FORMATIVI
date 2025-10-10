import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import UseEffect from './8-Reducers/02-using-the-useeffect-hook/test/UseEffect';
//import UseEffectCleanUp from './8-Reducers/02-using-the-useeffect-hook/UseEffectCleanUp';
//import TestUseEffect from './8-Reducers/02-using-the-useeffect-hook/test/TestUseEffect';
//import ContatoreCleanUp from './8-Reducers/02-using-the-useeffect-hook/test/ContatoreCleanUp';
//import ReduxAvanzato from './8-Reducers/05-usereducer-starting-project/ReduxAvanzato';
//import HttpRequest from './9-Http/01-sending-a-get-request/HttpRequest';
//import Anagrafica from './9-Http/01-sending-a-get-request/Anagrafica';
//import HttpRequestPost from './9-Http/04-sending-a-post-request/HttpRequestPost';
//import UserRequestPost from './9-Http/05-sending-a-post-request.andrea/UserRequestPost';
//import RouterSetup from './11-Router/02-route-setup/RoutSetup';
//import RoutAddLinks from './11-Router/04-adding-links/RoutAddLinks';
import RoutProdLinks from './11-Router/04-adding-links/RoutProdLinks';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutProdLinks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





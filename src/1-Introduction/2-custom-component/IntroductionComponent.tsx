import React from "react";
import SonComponent from "./introduction_components/SonComponent";

const IntroductionComponent = () => {
  return (
    <div>
      <h2>Ho ricevuto delle informazioni dal SonComponent </h2>

      <div>
        <SonComponent />
      </div>
    </div>
  );
};

export default IntroductionComponent;



/////////// rafce /////////
/*
import React from 'react'

const DaughterComponent = () => {
  return (
    <div>
      
    </div>
  )
}

export default DaughterComponent
*/


//////////////  rfce  ///////////////
/*
import React from 'react'

function DaughterComponent() {
  return (
    <div>
      
    </div>
  )
}

export default DaughterComponent
*/
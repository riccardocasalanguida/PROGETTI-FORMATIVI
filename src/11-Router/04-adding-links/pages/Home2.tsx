import React from 'react'
import { Link } from 'react-router-dom';

const Home2 = () => {

    const titolo = "Home";
    const descrizione = "Welcome to AutoParts website";

  return (
    <>
    <div style={{backgroundImage: "url('src/11-Router/04-adding-links/pages/auto.jpg')", backgroundSize: "cover",
  backgroundPosition: "center"}}>
        <h1 style={{textAlign: "center", color: "red",  fontSize: "30px"}}>
            {titolo}
        </h1>
        <p style={{textAlign: "center", 
            fontSize: "20px", 
            color: "yellow", 
            background: "black",
            marginLeft: "30%",
            marginRight: "30%"}}>{descrizione}</p>
    
    <p style={{textAlign:"center"}}>Scopri il catalogo ricambi</p>
    <Link style={{textAlign: "center", color: "red"}} to="/products">
    CLICCA QUI
    </Link>
    </div>
    </>
  )
}

export default Home2
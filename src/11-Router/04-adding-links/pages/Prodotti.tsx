import React from 'react'
import { Link } from 'react-router-dom'


const Prodotti = () => {
  return (
    <>
    <h1 style={{fontSize: "40px", 
        textAlign: "center", 
        color: "yellow", 
        background: "black"}}>Ricambi</h1>
    <div>
        <h2 style={{color: "red", fontSize: "25px", marginLeft: "15%"}}>
            CATEGORIE
        </h2>
        <ul style={{color: "greenyellow", background: "black", marginLeft: "15%"}}>
            <li>Dischi Freno</li>
            <li>Pastiglie Freno</li>
            <li>Filtri Aria</li>
            <li>Filtri Olio</li>
        </ul>
        <p style={{marginTop:'30%',marginLeft:'40%'}}> Clicca su Contattaci se vuoi inviare un messaggio
        
            <Link style={{ color: "orange",marginLeft:'2%' }} to="/contacts">
            Contattaci
            </Link>
        </p>
   
    </div>
    </>
  )
}

export default Prodotti
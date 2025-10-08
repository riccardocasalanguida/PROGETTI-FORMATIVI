import { title } from 'process'
import React, { Component } from 'react'

class IntroComponent extends Component<{title?: string,description?: string,type?: string,releaseYear?: number}> {
    state = {
        title: "Benvenuti al Sud",
        description: "prova descrizione film",
        type: "commedia",
        releaseYear: 2010
        }

  render() {
    return (
      <div>
        IntroComponent
        <br />
        <button onClick={() => console.log(this.state)}>
            
        <h1>{this.state.title}</h1>
        <h2>{this.state.description}</h2>
        <h3>{this.state.type}</h3>
        <h4>{this.state.releaseYear}</h4>
    
        CLICCA QUI
        </button>
        
        
        </div>
    )
  }
}
export default IntroComponent;
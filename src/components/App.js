import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { debug } from 'util'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = (newType) => {
    this.setState({
      filters: {type: newType}
    })
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type
    if (type !== 'all'){
       fetch(`/api/pets?type=${type}`)
       .then(resp => resp.json())
       .then(pets => {
        this.setState({pets: pets})
       })
        
    }
    else {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => {
        this.setState({pets: pets})
      })
    }
    
  }

  onAdoptPet = (id) => {
    // when button clicked adopt the pet with that id
    const newPets = this.state.pets.map(pet => pet.id === id ? {
      ...pet, isAdopted: true } : pet
    )
      this.setState( { pets: newPets} )
  }  

  render() {
  
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
 
  }

  debugger;
}

export default App

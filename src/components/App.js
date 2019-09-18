import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

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

  onChangeType = event => {
      this.setState({filters: {
        type: event.target.value
        }
      })
  }

  createURL = () => this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

  addPets = pets => {
    this.setState({pets})
  }

  onFindPetsClick = () => {
    return fetch(this.createURL())
    .then(resp => resp.json())
    .then(this.addPets)
  }

  onAdoptPet = id => {
    let pets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({pets})
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

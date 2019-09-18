import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import API from '../api'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  updateFilter = newType => {
    this.setState({ filters: { type: newType } })
  }

  getPets = () => {
    API.getPets(this.state.filters.type).then(pets => this.setState({ pets }))
  }

  adoptPet = id => {
    const pets = this.state.pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    )

    this.setState({ pets })
  }

  render () {
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                updateFilter={this.updateFilter}
                getPets={this.getPets}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser adoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

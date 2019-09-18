import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  

  render() {
    return <div className="ui cards">
    {this.props.pets.map(pet => (
    <Pet 
      type={pet.type}
      gender={pet.gender}
      name={pet.name}
      age={pet.age}
      weight={pet.weight}
      isAdopted={pet.isAdopted}
      onAdoptPet={this.props.onAdoptPet}
      id={pet.id}
    />
    ))}</div>
  }
}

export default PetBrowser

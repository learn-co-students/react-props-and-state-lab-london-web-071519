import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  addPet = () => this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)

  render() {
    return (
      <div className="ui cards">
        {this.addPet()}
      </div>
    )
  }
}

export default PetBrowser

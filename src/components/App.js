import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  };

  setFilter = (selected) =>
    this.setState({...this.state, filters: {type: selected}});

  getPets = () => {
    const url =
      this.state.filters.type === 'all'
        ? '/api/pets'
        : `/api/pets?type=${this.state.filters.type}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((pets) => this.setState({pets}));
  };

  adoptPet = (id) => {
    const pets = this.state.pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets});
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.setFilter}
                onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

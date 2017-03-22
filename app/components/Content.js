import React, { Component } from 'react'
import Person from './Person'
import Planet from './Planet'
import Vehicle from './Vehicle'

export default class Content extends Component {
  getPeople() {
    return this.props.selectedContent.map((person, index) => {
      const data = {name: person.name, homeworld: person.homeworld, species: person.species[0]}
      return (
        <Person key={index} name={person.name} homeworld={person.homeworld} species={person.species[0]} favorite={ () => this.props.favorite(data) }
/>
      )
    })
  }

  getVehicles() {
    console.log('in get vehicles');
    return this.props.selectedContent.map((vehicle, index) => {
      const data = { name: vehicle.name, model: vehicle.model, vehicleClass: vehicle.vehicle_class, passengers: vehicle.passengers }
      return (

        <Vehicle
        key={index}
        name={vehicle.name}
        model={vehicle.model}
        vehicleClass={vehicle.vehicle_class}
        passengers={vehicle.passengers}
        favorite={ () => this.props.favorite(data) }
      /> )
    })
  }

  getPlanets() {
    console.log('in planets');
    console.log(this.props.selectedContent);
    return this.props.selectedContent.map((planet, index) => {
      return (
        <Planet key={index} name={planet.name} terrain={planet.terrain} population={planet.population} climate={planet.climate} favorite={ () => this.props.favorite(data) }
 residents={planet.residents}/>
      )
    })

  }

  render() {

    const determineCategory = (category) => {
      switch(category) {
        case 'people':
          return this.getPeople()
        case 'vehicles':
          return this.getVehicles()
        case 'planets':
          return this.getPlanets()
        default:
          return 'Select A Category'
      }
    }

    return (
      <section className="Content">
        <h2 className="category">{ this.props.selectedCategory }</h2>
        <div className="content-cards">
          { determineCategory(this.props.selectedCategory )}
        </div>
        <button>More</button>
      </section>
    )
  }
}

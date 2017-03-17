import React, { Component } from 'react'
import Person from './Person'

export default class Content extends Component {
  getPeople() {
    console.log('in get people');
    console.log(this.props.selectedContent);
    return this.props.selectedContent.map((person, index) => {
      return (
        <Person key={index} name={person.name} homeworld={person.homeworld} species={person.species[0]}/>
      )
    })
  }

  getAllSpecies() {
    console.log('in get species');
  }

  getPlanets() {
    console.log('in get planets');
  }

  render() {

    const filterCategories = (category) => {
      switch(category) {
        case 'people':
          return this.getPeople()
        case 'species':
          return this.getAllSpecies()
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
          { filterCategories(this.props.selectedCategory )}
        </div>
      </section>
    )
  }
}

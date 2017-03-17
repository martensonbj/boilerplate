import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name, homeworld: '', population: '', species: '', language: ''}
  }

  componentDidMount() {
    this.getHomeworld(this.props.homeworld)
    this.getSpecies(this.props.species)
  }

  getHomeworld(target){
    console.log(target);
    fetch(target)
    .then(res => res.json())
    .then(json => {
      this.setState({ homeworld: json.name, population: json.population });
    })
  }

  getSpecies(target){
    fetch(target)
    .then(res => res.json())
    .then(json => this.setState({ species: json.name, language: json.language }))
  }

  favoritePerson(name) {
    console.log("Favorited ", name);
  }

  expandCard() {
    this.setState({ toggleCard: !this.state.toggleCard})
  }

  render() {
    return (
      <div className="Person" onClick={(e) => this.expandCard(e)}>
        <div className="person-header">
          <p className="person-name">{this.state.name}</p>
          <button onClick={ () => this.favoritePerson(this.state.name) }> Favorite </button>
        </div>
        <div className="person-details">
          <p className="person-homeworld">{this.state.homeworld}</p>
          <p className="person-species">{this.state.species}</p>
          <p className="person-language">{this.state.language}</p>
          <p className="person-population">1/{this.state.population}</p>
        </div>
      </div>
    )
  }
}

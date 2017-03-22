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

  render() {
    return (
      <div className="Person card">
        <div className="card-header">
          <p className="card-name">{this.state.name}</p>
          <button onClick={ () => this.props.favorite() }>&#9733;</button>
        </div>
        <div className="person-details">
          <p className="person-homeworld">Homeworld: {this.state.homeworld}</p>
          <p className="person-species">Species: {this.state.species}</p>
          <p className="person-language">Language: {this.state.language}</p>
          <p className="person-population">Population: {this.state.population}</p>
        </div>
      </div>
    )
  }
}

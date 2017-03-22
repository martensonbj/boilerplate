import React, { Component } from 'react';

export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name, terrain: '', population: '', climate: '', residents: [], favorited: false }
  }

  componentDidMount() {
    this.getResidents(this.props.residents)
  }

  getResidents(target){
    console.log(target);
    target.forEach(resident => {
      fetch(resident)
      .then(res => res.json())
      .then(json => {
        this.setState({ residents: [...this.state.residents, json.name] })
      })
    })
  }

  listResidents(residents){
    return residents.map((person, index) => {
      return <li key={index}>{person}</li>
    })
  }

  render() {
    return (
      <div className="Planet card">
        <div className="card-header">
          <p className="card-name">{this.props.name}</p>
          <button onClick={ () => this.props.favorite(this.props.name) }>Favorite</button>
        </div>
        <div className="planet-details">
          <p className="planet-terrain">{this.props.terrain}</p>
          <p className="planet-climate">{this.props.climate}</p>
          <ul>
            {this.state.residents.length > 0 ? this.listResidents(this.state.residents) : 'No Residents'}
          </ul>
          <p className="planet-population">{this.props.population}</p>
        </div>
      </div>
    )
  }
}

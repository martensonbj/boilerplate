import React, { Component } from 'react';

export default class Vehicle extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name, terrain: '', population: '', climate: '', residents: []}
  }


  favorite(vehicle) {
    console.log("Favorited ", vehicle);
  }

  render() {
    return (
      <div className="Vehicle card">
        <div className="card-header">
          <p className="card-name">{this.props.name}</p>
          <button onClick={ () => this.props.favorite(this.props.name) }>Favorite</button>
        </div>
        <div className="vehicle-details">
          <p className="vehicle-model">{this.props.model}</p>
          <p className="vehicle-class">{this.props.vehicleClass}</p>
          <p className="vehicle-passengers">{this.props.passengers}</p>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles';

import Sidebar from './components/Sidebar/Sidebar'
import Button from './components/Button'
import Content from './components/Content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      film: '',
      releaseDate: '',
      selectedCategory: '',
      selectedContent: []
    }
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/films/1`)
    .then(res => res.json())
    .then(json => this.setState({ text: json.opening_crawl, film: json.title, releaseDate: json.release_date }))
  }

  getData(target) {
    console.log(target);
    fetch(`https://swapi.co/api/${target}`)
    .then(res => res.json())
    .then(json => this.setState({ selectedCategory: target, selectedContent: json.results }))
  }

  render() {
    return (
      <div>
        <section className="main">
          <Sidebar data={ {text: this.state.text, film: this.state.film, releaseDate: this.state.releaseDate} }/>
          <section className="display">
            <h1 className="header">SWAPI-Box</h1>
            <Button type="people" handleClick={ (target) => this.getData(target)} active={"people" === this.state.selectedCategory }/>
            <Button type="planets" handleClick={(target) => this.getData(target)} active={"planets" === this.state.selectedCategory }/>
            <Button type="species" handleClick={ (target) => this.getData(target)} active={"species" === this.state.selectedCategory }/>

            <Content selectedContent={ this.state.selectedContent } selectedCategory={ this.state.selectedCategory }/>
          </section>
        </section>
      </div>
    );
  }
}

render(<App />, document.querySelector('.application'));


// https://swapi.co/documentation

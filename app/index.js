import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles';

import Header from './components/Header/Header'
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
        <Header data={ {text: this.state.text, film: this.state.film, releaseDate: this.state.releaseDate} }/>
        <h2>Choose A Category</h2>
        <Button type="people" handleClick={ (target) => this.getData(target) }/>
        <Button type="planets" handleClick={(target) => this.getData(target) }/>
        <Button type="species" handleClick={ (target) => this.getData(target) }/>

        <Content selectedContent={ this.state.selectedContent } selectedCategory={ this.state.selectedCategory }/>
      </div>
    );
  }
}

render(<App />, document.querySelector('.application'));


// https://swapi.co/documentation

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    query: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({
      pokemon: pokemon
    }))
  }

  searchPokemon = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  addPokemon = (event, pokemon) => {
    event.preventDefault()
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  render() {
    const displayPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.query))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemon={displayPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

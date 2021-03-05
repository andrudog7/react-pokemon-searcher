import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFront: true
  }

  handleClick = () => {
    this.setState({cardFront: !this.state.cardFront})
  }

  imageSrc = () => {
    return this.state.cardFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.imageSrc()} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

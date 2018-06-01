import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon()
  }

  render(){

    return (
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <ul className="pokemon-list">
          {this.props.pokemon.map(pokemon => <PokemonIndexItem key={pokemon.id} pk={pokemon}/>)}
        </ul>
      </div>
    )
  }
}

export default PokemonIndex;

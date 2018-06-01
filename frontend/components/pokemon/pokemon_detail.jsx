import React from 'react';
import {Route, Link} from 'react-router-dom';
// import {PokemonIndexItem} from './pokemon_index_item';
import ItemDetailContainer from '../items/item_detail_container';
class PokemonDetail extends React.Component {


  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){

    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId)
    }
  }
  render(){
    const {pokemon, items} = this.props;
    const itemArray = items.map((item) => <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}><img height="200" src={`${item.image_url}`}/></Link>)

    return (
      <ul>
        <img src={pokemon.image_url}/>
        <li>{pokemon.name}</li>
        <li>{pokemon.poke_type}</li>
        <li>{pokemon.attack}</li>
        <li>{pokemon.defense}</li>
        <li>{pokemon.moves}</li>

        <li>
          {itemArray}
          <Route path={`/pokemon/${pokemon.id}/items/:itemId`} component={ItemDetailContainer}/>
        </li>
      </ul>
    )
  }
}

export default PokemonDetail;

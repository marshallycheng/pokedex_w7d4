import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pk}) => {
  return (
    <li className="pokemonListItem">
      <Link to={"/pokemon/"+pk.id}> {pk.name} <img className="pokemon-image" src={pk.image_url}/></Link>
    </li>
  )
}

export default PokemonIndexItem;

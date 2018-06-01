import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';
import {merge} from 'lodash'

const pokemonReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON_DETAIL:
      return merge({}, state, { [action.entities.pokemon.id]: action.entities.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;

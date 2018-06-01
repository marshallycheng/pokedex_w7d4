import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';
import {selectItems} from './selectors';

const itemsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_POKEMON_DETAIL:
      return action.entities.items;
    default:
      return state;
  }
};

export default itemsReducer;

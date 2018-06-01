import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveAPokemon = entities => ({
  type: RECEIVE_POKEMON_DETAIL,
  entities
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon().then(serverPokemon => dispatch(receiveAllPokemon(serverPokemon)))
)

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchPokemonDetail(pokemonId).then(serverPokemon => dispatch(receiveAPokemon(serverPokemon)))
)

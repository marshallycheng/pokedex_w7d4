import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectItems } from '../../reducers/selectors';

const mapStatetoProps = (state,ownProps) => {
  const pokemonId = ownProps.match.params.pokemonId;
  const selectoo = selectItems(state);

  return ({
    pokemon: state.entities.pokemon[pokemonId],
    items: selectItems(state)
});}

const mapDispatchtoProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PokemonDetail);

import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStatetoProps = state => ({
    pokemon: selectAllPokemon(state)
});

const mapDispatchtoProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PokemonIndex);

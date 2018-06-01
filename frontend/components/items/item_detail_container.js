import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import {selectPokemonItem} from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStatetoProps = (state, ownProps) => {
  const newItemId = parseInt(ownProps.match.params.itemId);
  console.log(newItemId);
  return ({
    item: selectPokemonItem(state, newItemId)
});}

const mapDispatchtoProps = dispatch => ({

});

export default connect(mapStatetoProps, mapDispatchtoProps)(ItemDetail);

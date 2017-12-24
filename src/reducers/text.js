import actionTypes from '../constants/actionTypes';
import Immutable from 'immutable';

const INITIAL_STATE = Immutable.fromJS({
  text: '',
  getText: ''
});

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.TEXT_UPDATE:
      return state.set('text', action.payload.text);
    case actionTypes.GET_TEXT_SUCCESS:
      return state.set('getText', actionTypes.payload.getText)
    default:
      return state;
  }
}

export default reducer;

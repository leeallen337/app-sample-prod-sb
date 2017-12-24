import actionTypes from '../constants/actionTypes';
import textService from '../services/text';

function updateText(text) {
  return {
    type: actionTypes.TEXT_UPDATE,
    payload: { text }
  };
}

function getText() {
  return function(dispatch) {
    dispatch({ type: actionTypes.GET_TEXT_START });

    return textService.getText()
      .then((response) => {
        dispatch({
          type: actionTypes.GET_TEXT_SUCCESS,
          payload: { getText: response }
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_TEXT_FAILURE
        });
      });
  }
}

export {
  updateText,
  getText
};

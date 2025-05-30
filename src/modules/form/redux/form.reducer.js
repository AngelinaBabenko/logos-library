import { handleActions } from 'redux-actions';

import { SET_FIELD, RESET_FORM } from './form.actiontypes';

const initialState = {};

export default handleActions({
  [SET_FIELD]: (state, { payload: { name, value } }) => ({
    ...state,
    [name]: value,
  }),
  [RESET_FORM]: () => initialState,
}, initialState);

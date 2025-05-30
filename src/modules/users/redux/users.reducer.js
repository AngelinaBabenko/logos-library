import { handleActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import { ADD_USER } from './users.actiontypes';

const initialState = {};

export default handleActions({
  [ADD_USER]: (state, { payload: user }) => ({
    ...state,
    [uuidv4()]: user,
  }),
}, initialState);

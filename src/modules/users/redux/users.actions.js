import { createAction } from 'redux-actions';

import { ADD_USER } from './users.actiontypes';

export const addUser = createAction(ADD_USER);
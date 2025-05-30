import { createAction } from 'redux-actions';

import { SET_FIELD, RESET_FORM } from './form.actiontypes';

export const setField = createAction(SET_FIELD);
export const resetForm = createAction(RESET_FORM);
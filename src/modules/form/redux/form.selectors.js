import { isEmpty } from 'lodash';
import { get as getFp } from 'lodash/fp';

import formSchema from '../config/formSchema';

import moduleStatePath from '../config/statePath';

const fullStatePath = [moduleStatePath];
export const getStateChunk = getFp(fullStatePath);

export const getForm = getStateChunk;
export const getFieldValue = (state, name) => {
  const form = getForm(state);
  return form[name] || '';
};
export const getSaveDisabledState = state => {
  const form = getForm(state);

  if (isEmpty(form)) return true;

  return formSchema
    .filter(field => field.required)
    .some(field => !form[field.name])
}
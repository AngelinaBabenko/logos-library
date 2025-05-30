import { get as getFp } from 'lodash/fp';

import moduleStatePath from '../config/statePath';

const fullStatePath = [moduleStatePath];
export const getStateChunk = getFp(fullStatePath);

export const getUsers = getStateChunk;
export const getUser = (state, id) => {
  const users = getUsers(state);
  return users[id];
};

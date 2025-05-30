import { combineReducers } from 'redux';

import formReducer, { statePath as formStatePath } from 'modules/form/redux';
import usersReducer, { statePath as userStatePath } from 'modules/users/redux';

const rootReducer = combineReducers({
  [formStatePath]: formReducer,
  [userStatePath]: usersReducer,
});

export default rootReducer;
import { Action } from 'redux';

export const post = (state = {}, action: any) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return Object.assign({}, state, { error: action.error });
    case 'CLEAR_ERRORS':
      return Object.assign({}, state, { error: '' });
  }
  return state;
};

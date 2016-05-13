import { Action } from 'redux';



const post = (state = {}, action: Action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return Object.assign({}, state, { error: action.error });
    case 'CLEAR_ERRORS':
      return Object.assign({}, state, { error: '' });
  }
  return state;
};

export default post;

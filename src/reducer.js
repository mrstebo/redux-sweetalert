import uuid from 'uuid';
import {createReducer}  from './utils.js';
import * as t from './actionTypes';

const initialState = {
  modals: []
};

export default createReducer(initialState, {
  [t.ADD_MODAL]: (state, payload) => {
    return {
      ...state,
      modals: [
        ...state.modals,
        {
          id: uuid.v1(),
          ...payload
        }
      ]
    };
  },
  [t.REMOVE_MODAL]: (state, id) => {
    return {
      ...state,
      modals: state.modals.filter(modal => modal.id !== id)
    };
  },
  [t.CLEAR_ALL]: () => {
    return initialState;
  }
});

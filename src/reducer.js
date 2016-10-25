import {createReducer}  from './utils.js';
import * as t from './actionTypes';

const initialState = {};

export default createReducer(initialState, {
  [t.SHOW_MODAL]: (state, payload) => {
    return {
      ...state,
      modal: {
        ...payload,
        show: true
      }
    };
  },
  [t.HIDE_MODAL]: (state) => {
    return {
      ...state,
      modal: {
        show: false
      }
    };
  }
});

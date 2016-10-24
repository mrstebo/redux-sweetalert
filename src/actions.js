import * as t from './actionTypes';

export function addModal(payload) {
  return {
    type: t.ADD_MODAL,
    payload
  };
}

export function removeModal(id) {
  return {
    type: t.REMOVE_MODAL,
    payload: id
  }
}

export function clearAll() {
  return {
    type: t.CLEAR_ALL
  };
}

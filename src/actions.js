import * as t from './actionTypes';

export function showModal(payload) {
  return {
    type: t.SHOW_MODAL,
    payload
  };
}

export function hideModal() {
  return {
    type: t.HIDE_MODAL
  };
}

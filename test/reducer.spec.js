import {expect} from 'chai';
import * as t from '../lib/actionTypes';
import reducer from '../lib/reducer';

describe('reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('should show a modal when SHOW_MODAL is dispatched', () => {
    const modal = {text: 'Test Modal'};
    expect(reducer(undefined, {
      type: t.SHOW_MODAL,
      payload: modal
    })).to.deep.equal({
      modal: {
        ...modal,
        show: true
      }
    });
  });

  it('should hide a modal when HIDE_MODAL is dispatched', () => {
    const modal = {show: true, text: 'Test Modal'};
    const initialState = {
      modal
    };
    expect(reducer(initialState, {
      type: t.HIDE_MODAL
    })).to.deep.equal({
      modal: {
        show: false
      }
    });
  });
});

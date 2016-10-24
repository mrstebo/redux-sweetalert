import {expect} from 'chai';
import * as t from '../lib/actionTypes';
import reducer from '../lib/reducer';

describe('reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      modals: []
    });
  });

  it('should add a modal when ADD_MODAL is dispatched', () => {
    const modal = {id: '1', text: 'Test Modal'};
    expect(reducer(undefined, {
      type: t.ADD_MODAL,
      payload: modal
    })).to.deep.equal({
      modals: [modal]
    });
  });

  it('should remove a modal when REMOVE_MODAL is dispatched', () => {
    const modal1 = {
      id: '1',
      text: 'Test Modal'
    };
    const modal2 = {
      id: '2',
      text: 'Test Modal'
    };
    const initialState = {
      modals: [modal1, modal2]
    };
    expect(reducer(initialState, {
      type: t.REMOVE_MODAL,
      payload: '1'
    })).to.deep.equal({
      modals: [modal2]
    });
  });

  it('should clear all modals when CLEAR_ALL is dispatched', () => {
    const modal1 = {
      id: '1',
      text: 'Test Modal'
    };
    const modal2 = {
      id: '2',
      text: 'Test Modal'
    };
    const initialState = {
      modals: [modal1, modal2]
    };
    expect(reducer(initialState, {
      type: t.CLEAR_ALL
    })).to.deep.equal({
      modals: []
    });
  });
});

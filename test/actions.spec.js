import {expect} from 'chai';
import * as actions from '../lib/actions';
import * as t from '../lib/actionTypes';

describe('actions', () => {
  describe('#addModal', () => {
    it('should create an ADD_MODAL action', () => {
      expect(actions.addModal({})).to.deep.equal({
        type: t.ADD_MODAL,
        payload: {}
      });
    });
  });

  describe('#removeModal', () => {
    it('should create a REMOVE_MODAL action', () => {
      expect(actions.removeModal('1')).to.deep.equal({
        type: t.REMOVE_MODAL,
        payload: '1'
      });
    });
  });

  describe('#clearAll', () => {
    it('should create a CLEAR_ALL action', () => {
      expect(actions.clearAll()).to.deep.equal({
        type: t.CLEAR_ALL
      });
    });
  });
});

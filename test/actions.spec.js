import {expect} from 'chai';
import * as actions from '../lib/actions';
import * as t from '../lib/actionTypes';

describe('actions', () => {
  describe('#showModal', () => {
    it('should create an SHOW_MODAL action', () => {
      expect(actions.showModal({})).to.deep.equal({
        type: t.SHOW_MODAL,
        payload: {}
      });
    });
  });

  describe('#hideModal', () => {
    it('should create a HIDE_MODAL action', () => {
      expect(actions.hideModal()).to.deep.equal({
        type: t.HIDE_MODAL
      });
    });
  });
});

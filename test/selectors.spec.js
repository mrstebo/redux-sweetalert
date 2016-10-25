import {expect} from 'chai';
import * as selectors from '../lib/selectors';

describe('selectors', () => {
  describe('#getModal', () => {
    it('should return modal for the state', () => {
      const state = {
        modals: {
          modal: {title: 'Test Modal'}
        }
      };
      expect(selectors.getModal(state)).to.deep.equal(state.modals.modal);
    });
  });
});

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {EE} from '../emitter';
import * as actions from '../actions';
import {getModal} from '../selectors';
import Modal from './Modal';

class ReduxModal extends Component {
  componentDidMount() {
    EE.on('show/modal', obj => this.props.actions.showModal(obj));
    EE.on('hide/modal', this.props.actions.hideModal);
  }

  componentWillUnmount() {
    EE.off('show/modal');
    EE.off('hide/modal');
  }

  render() {
    return (
      <div>
        {this.props.modal && (
          <Modal {...this.props.modal} />
        )}
      </div>
    );
  }
}

ReduxModal.propTypes = {
  modal: PropTypes.object,
  actions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func
  }).isRequired
};

ReduxModal.displayName = 'ReduxModal';

function mapStateToProps(state) {
  return {
    modal: getModal(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxModal);

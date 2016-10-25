import React, {Component, PropTypes} from 'react';
import SweetAlert from 'sweetalert-react';

class Modal extends Component {
  render() {
    return (
      <SweetAlert {...this.props} />
    );
  }
}

Modal.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  html: PropTypes.string,
  confirmButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  showCancelButton: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onEscapeKey: PropTypes.func,
  onOutsideClick: PropTypes.func
};

Modal.displayName = 'Modal';

export default Modal;

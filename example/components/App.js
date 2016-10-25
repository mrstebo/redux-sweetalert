import React, {Component} from 'react';
import {modal} from 'redux-sweetalert';

class App extends Component {
  showModal() {
    modal.showModal({
      title: 'Test',
      onConfirm: () => {
        modal.hideModal();
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal.bind(this)}>
          Show Alert
        </button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxModal from 'redux-sweetalert';
import App from './components/App';
import {Provider} from 'react-redux';
import {Router, hashHistory, Route} from 'react-router';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import '../node_modules/sweetalert/dist/sweetalert.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div className="wrapper">
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
      <ReduxModal />
    </div>
  </Provider>, document.getElementById('root')
);

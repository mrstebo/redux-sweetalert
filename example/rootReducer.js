import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as modals} from 'redux-sweetalert';

const appReducer = combineReducers({
  modals,
  routing
});

export default appReducer;

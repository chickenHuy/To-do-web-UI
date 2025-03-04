import { createStore } from 'redux';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

const store = createStore( rootReducer, composeEnhancers);

export default store;
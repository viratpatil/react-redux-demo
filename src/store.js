import {createStore} from 'redux';
import empReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(empReducer, composeWithDevTools());
export default store;
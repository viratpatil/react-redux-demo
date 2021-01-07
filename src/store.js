import {applyMiddleware, createStore} from 'redux';
import empReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {watchAgeUp} from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(empReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchAgeUp);
export default store;
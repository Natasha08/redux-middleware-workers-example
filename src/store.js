import { createStore, applyMiddleware } from 'redux';
import workerMiddleware from './workers/middleware';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...workerMiddleware)
);

export default store;

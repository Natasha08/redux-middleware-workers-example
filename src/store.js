import { createStore, applyMiddleware } from 'redux';
import workerMiddleware from './workers/middleware';

const rootReducer = {};

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...workerMiddleware)
);

export default store;

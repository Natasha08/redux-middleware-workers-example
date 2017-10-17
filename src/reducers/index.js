import { combineReducers } from 'redux';
import firstWorker from './first_worker';
import secondWorker from './second_worker';

const rootReducer = combineReducers({firstWorker, secondWorker});

export default rootReducer;

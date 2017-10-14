import createWorkerMiddleware from 'redux-middleware-workers';

import testWorker from '../helpers/worker';
// import testWorker2 from './test_worker2';

const testWorkerMiddleware = createWorkerMiddleware(new testWorker(), 'WORKER_TYPE_ONE');
// const testWorker2Middleware = createWorkerMiddleware(new testWorker2(), 'SECOND_TEST');

export default [testWorkerMiddleware];

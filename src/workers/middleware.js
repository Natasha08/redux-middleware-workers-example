import createWorkerMiddleware from 'redux-middleware-workers';

import testWorker from 'worker-loader?inline!./test_worker.js';
import testWorker2 from 'worker-loader?inline!./test_worker2.js';

const testWorkerMiddleware = createWorkerMiddleware(new testWorker(), 'FIRST_TEST');
const testWorker2Middleware = createWorkerMiddleware(new testWorker2(), 'SECOND_TEST');

export default [testWorkerMiddleware, testWorker2Middleware];

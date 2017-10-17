import createWorkerMiddleware from 'redux-middleware-workers';

import testWorker from 'worker-loader?inline!./worker1.js';
import testWorker2 from 'worker-loader?inline!./worker2.js';

const testWorkerMiddleware = createWorkerMiddleware(new testWorker(), 'WORKER_TYPE_ONE');
const testWorker2Middleware = createWorkerMiddleware(new testWorker2(), 'WORKER_TYPE_TWO');

export default [testWorkerMiddleware, testWorker2Middleware];

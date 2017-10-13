import createWorkerMiddleware from 'react-middleware-workers';

import testWorker from 'worker?inline!./test_worker.js';
import testWorker2 from 'worker?inline!./test_worker2.js';

const testWorkerMiddleware = createWorkerMiddleware(new testWorker(), 'FIRST_TEST');
const testWorker2Middleware = createWorkerMiddleware(new testWorker2(), 'SECOND_TEST');

export default [testWorkerMiddleware, testWorker2Middleware];

export default function() {
  const meta = { webworker: true, type: 'WORKER_TYPE_ONE' };

  return {
    type: 'FIRST_WORKER_LOADING',
    meta
  }
}

export function activateSecondWorker() {
  const meta = { webworker: true, type: 'WORKER_TYPE_TWO' };

  return {
    type: 'SECOND_WORKER_LOADING',
    meta
  }
}

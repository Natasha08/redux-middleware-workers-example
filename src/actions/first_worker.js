export default function() {
  const meta = { webworker: true, type: 'WORKER_TYPE_ONE' };

  return {
    type: 'FIRST_WORKER',
    meta
  }
}

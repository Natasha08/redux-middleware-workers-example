self.onmessage = ({ data:action }) => {
  self.postMessage({ type: 'TEST_WORKER_2'});
}

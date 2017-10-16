self.onmessage = ({ data:action }) => {
  setTimeout(() => {
    self.postMessage({ type: 'WORKER_1_COMPLETE'});
  }, 5000);
}

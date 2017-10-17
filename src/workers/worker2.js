self.onmessage = ({ data:action }) => {
  setTimeout(() => {
    self.postMessage({ type: 'WORKER_2_COMPLETE'});
  }, 5000);
}

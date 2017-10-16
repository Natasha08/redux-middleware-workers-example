self.onmessage = ({ data:action }) => {
  self.console.log("WORKER", self)
  setTimeout(() => {
    self.postMessage({ type: 'WORKER_1_COMPLETE'});
  }, 5000);
}

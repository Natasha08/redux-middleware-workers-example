let futureCallback;

export default class Worker {
  constructor(fn = x => x) {
    this.fn = fn;
  }

  onmessage(data) {
    const action = { type: 'test', meta: {webworker: true, type: 'another thing'} };
    this.postMessage(action, 'message');

  }
  postMessage(msg, message) {
    if (message == 'message') {
      return this.addEventListener()(msg);
    }

    if (this.onmessage) {
      setTimeout(() => {
        const data = this.fn(msg);
        this.onmessage({ data });
      }, 0);
    }
  }

  addEventListener(msg, callback=undefined) {
    if (callback) futureCallback = callback;
    return (data) => {
      setTimeout(() => {
        futureCallback({data});
      }, 0);
    }
  }
}

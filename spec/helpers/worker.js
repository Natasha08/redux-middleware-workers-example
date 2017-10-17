let futureCallback;

export default class Worker {
  constructor(fn = x => x) {
    this.fn = fn;
  }

  onmessage(data) {
    const action = { type: 'test', meta: {webworker: true, type: 'another thing'} };
    setTimeout(() => {
      this.postMessage(action, 'message');
    }, 10000);


  }
  postMessage(msg, message) {
    if (message == 'message') {
      return this.addEventListener()(msg);
    }

    if (this.onmessage) {
      setTimeout(() => {
        const data = this.fn(msg);
        this.onmessage({ data });
      }, 10000);
    }
  }

  addEventListener(msg, callback=undefined) {
    if (callback) futureCallback = callback;
    return (data) => {
      setTimeout(() => {
        futureCallback({data});
      }, 10000);
    }
  }
}

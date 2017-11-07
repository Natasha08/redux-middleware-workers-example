import workerDriver from '../helpers/driver';

const WORKER_TIMEOUT = 6000;
const MAX_TEST_TIMEOUT = 10000;

describe('E2E testing for worker middleware', function () {
  this.timeout(MAX_TEST_TIMEOUT);

  const newWorkerDriver = new workerDriver('http://localhost:3001');
  const { navigate, getText, clickButton, createTextChange } = newWorkerDriver.methods;

  beforeEach(function() {
    createDriverInstance();
    navigate();
  });

  it('starts the first worker', function() {
    clickButton('.first-worker');

    const workerInProgress = () => {
      expect(getText('.first-message')).to.eventually.equal('Worker one is processing...');

      return expect(getText('.second-message')).to.eventually.equal('');
    };

    return workerInProgress();
  });

  it('completes the first worker action', function() {
    const textChange = {
      selector: '.first-message',
      expectedText: 'Worker one is complete!',
      timeout: WORKER_TIMEOUT
    };

    clickButton('.first-worker');

    return createTextChange(textChange, (data) => {
      data.then((text) => {
        expect(text).to.equal(textChange.expectedText);
      })
    });
  });

  it('starts the second worker', function() {
    clickButton('.second-worker');

    const workerInProgress = () => {
      return expect(getText('.second-message')).to.eventually.equal('Worker two is processing...');
      return expect(getText('.first-message')).to.eventually.equal('');
    };

    return workerInProgress();
  });

  it('completes the first worker action', function() {
    const textChange = {
      selector: '.second-message',
      expectedText: 'Worker two is complete!',
      timeout: WORKER_TIMEOUT
    };

    clickButton('.second-worker');

    return createTextChange(textChange, (data) => {
      data.then((text) => {
        expect(text).to.equal(textChange.expectedText);
      })
    });
  });
});

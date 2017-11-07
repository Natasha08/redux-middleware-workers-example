import newDriver from './helpers/driver';

describe('E2E testing for worker middleware', function () {
  this.timeout(10000);
  const workerDriver = newDriver('http://localhost:3001');
  const { navigate, getText, submit } = workerDriver;

  beforeEach(function() {
    createDriverInstance();
    navigate();
  });

  it('starts the first worker', function() {
    submit('.first-worker');

    const currentMessages = () => {
      expect(getText('.first-message')).to.eventually.equal('Worker one is processing...');
      return expect(getText('.second-message')).to.eventually.equal('');
    };

    return currentMessages();
  });

  it('starts the second worker', function() {
    submit('.second-worker');

    const currentMessages = () => {
      return expect(getText('.second-message')).to.eventually.equal('Worker two is processing...');
      return expect(getText('.first-message')).to.eventually.equal('');
    };

    return currentMessages();
  });
});

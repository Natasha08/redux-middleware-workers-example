import newDriver from './helpers/driver';

describe('E2E testing for worker middleware', function () {
  this.timeout(10000);

  it('starts the first worker', function() {
    const workerDriver = newDriver('http://localhost:3001', '.first-worker');
    const { navigate, getText, submit } = workerDriver;
    
    navigate('http://localhost:3001');
    submit('.first-worker');
    return expect(getText('.first-message')).to.eventually.equal('Worker one is processing...');
  });
});

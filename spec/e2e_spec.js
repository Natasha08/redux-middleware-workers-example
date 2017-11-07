describe('E2E testing for worker middleware', function() {
  this.timeout(10000);

  it('starts the first worker', function() {
    driver.navigate().to('http://localhost:3001');
    driver.wait(until.elementLocated(By.css('.first-worker')));
    driver.findElement(By.css('.first-worker')).click();
    return driver.findElement(By.css('.first-message')).getText()
    .then(text => expect(text).to.equal('Worker one is processing...'));
  });
});

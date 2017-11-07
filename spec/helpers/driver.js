const webdriver = require('selenium-webdriver');

export default function(path) {
  if (!path) throw new Error('Please provide a path for the driver to navigate to');

  const waitUntilVisible = () => {
    return driver.wait(until.elementLocated(By.css('.first-worker')));
  };

    return {
      navigate: () => {
        driver.navigate().to(path);
        return waitUntilVisible();
      },
      enterInput: (selector, value) => {
        if (!selector) throw new Error('Please provide a css selector');
        if (!value) throw new Error('Please provide value to input');

        driver.findElement(selector).sendKeys(value);
        driver.wait(until.elementLocated(selector));
        driver.findElement(selector).click();
        return driver.wait(until.elementIsNotVisible(By.css(selector)));
      },
      getValue: (selector) => {
        if (!selector) throw new Error('Please provide a css selector');

        return driver.findElement(By.css(selector)).getAttribute('value');
      },
      getText: (selector) => {
        if (!selector) throw new Error('Please provide a css selector');

        return driver.findElement(By.css(selector)).getText();
      },
      submit: (selector) => {
        if (!selector) throw new Error('Please provide a css selector');

        return driver.findElement(By.css(selector)).click();
      },
      wait: (processor, timeout) => {
        return driver.wait(processor, timeout);
      },
      simulateTextChange: ({timeout, selector, message}, testExpectation) => {
        const element = driver.findElement(By.css(selector));
        return driver.wait(until.elementTextIs(element, message), timeout)
        .then(function() {
          return testExpectation(element.getText());
        });
      }
    };
};

const webdriver = require('selenium-webdriver');

export default function(path) {
  if (!path) throw new Error('Please provide a path for the driver to navigate to');

  const waitUntilVisible = () => {
    return driver.wait(until.elementLocated(By.css('.first-worker')));
  };

  this.methods =  {
      navigate: () => {
        driver.navigate().to(path);
        return waitUntilVisible();
      },
      findElement: (selector) => {
        if (selector.includes('.')) return driver.findElement(By.css(selector));
        if (selector.includes('#')) throw new Error('selector must be an id ("foo") or a class (".bar")');
        return driver.findElement(By.id(selector));
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

        return findElement(selector).getAttribute('value');
      },
      getText: (selector) => {
        if (!selector) throw new Error('Please provide a css selector');

        return findElement(selector).getText();
      },
      clickButton: (selector) => {
        if (!selector) throw new Error('Please provide a css selector');

        return findElement(selector).click();
      },
      wait: (processor, timeout) => {
        return driver.wait(processor, timeout);
      },
      createTextChange: ({timeout, selector, expectedText}, testExpectation) => {
        const element = findElement(selector);
        return driver.wait(until.elementTextIs(element, expectedText), timeout)
        .then(function() {
          return testExpectation(element.getText());
        });
      }
    };
    const { findElement } = this.methods;

    return this;
};

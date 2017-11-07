const webdriver = require('selenium-webdriver');

export default function(path, visibleSelector) {
  if (!path) throw new Error('Please provide a path for the driver to navigate to');
  if (!visibleSelector) throw new Error('Please the selector for the element that should display on successful navigation');

  const waitUntilVisible = () => {
    return driver.wait(until.elementLocated(By.css(visibleSelector)));
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
      }
    };
};

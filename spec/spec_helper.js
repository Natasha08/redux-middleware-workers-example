require('babel-register')();
const { JSDOM } = require('jsdom');
import React from 'react';
var exposedProperties = ['window', 'navigator', 'document'];

import app from 'ampersand-app';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import _ from 'lodash';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
require('es6-promise').polyfill();
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();

chrome.setDefaultService(service);

global.By = webdriver.By;
global.until = webdriver.until;

global.navigator = {
  userAgent: 'node.js'
};

configure({ adapter: new Adapter() });

chai.use(sinonChai);

global.chai = chai;
global.expect = chai.expect;
global._ = global._ || _;

var fakeServer = _.assign({}, sinon.fakeServer, {
  create: function() {
    xhr.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    return sinon.fakeServer.create.call(fakeServer);
  }
});

var useFakeXMLHttpRequest = sinon.useFakeXMLHttpRequest.bind(sinon);

global.sinon = sinon;

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
  global.driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();
});

afterEach(function() {
  this.sinon.restore();
  driver.quit();
});

var context = require.context('../spec', true, /.+[_.-]spec\.jsx?$/);

context.keys().forEach(context);
module.exports = context;

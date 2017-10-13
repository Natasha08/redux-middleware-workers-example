import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {Route} from "react-router-dom";

import store from './store';
import './style/index.css';
import Main from './main';


const App = () => (
  <Provider store={store}>
    <Route path='/' component={Main} />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

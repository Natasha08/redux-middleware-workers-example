import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import store from './store';
import './style/index.css';
import Main from './main';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={Main}/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

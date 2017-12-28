import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import storeApp from './reducers/index.js';
import App from './components/App.jsx';
import './style.scss';

const store = createStore(storeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('react-app')
);
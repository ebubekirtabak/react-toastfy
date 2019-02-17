import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toastApp from './store/reducers';
import App from './App';

const store = createStore(toastApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

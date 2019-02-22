import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toastApp from './store/reducers';
import App from './App';
import { addSimpleToast } from './store/actions';

const store = createStore(toastApp);
console.log('store start');
console.log(store.getState());
store.dispatch(addSimpleToast('Test'));
console.log(store.getState());
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)

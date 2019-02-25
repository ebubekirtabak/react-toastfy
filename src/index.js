import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toastApp from './store/reducers';
import App from './App';
import { addSimpleToast } from './store/actions';

const store = createStore(toastApp);
store.dispatch(addSimpleToast(12, 'Test'));
const id = Math.floor(Math.random() * 24234234);
store.dispatch(addSimpleToast(id, 'Test => ' + id ));
store.getState();
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';
import App from './App';
import { ipcRenderer } from './ipcRenderer';
import './sass/App.global.sass';

render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

ipcRenderer.writeStorageBeforeQuitSync();

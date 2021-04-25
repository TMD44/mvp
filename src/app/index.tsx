import { store } from '@redux/store';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { ipcRenderer } from './ipcRenderer';
import './sass/App.global.sass';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
/*
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

ipcRenderer.writeStorageBeforeQuit();

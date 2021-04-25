import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ipcRenderer } from './ipcRenderer';
import './sass/App.global.sass';

render(<App />, document.getElementById('root'));
/*
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

ipcRenderer.writeStorageBeforeQuit();

import React from 'react';
import { render } from 'react-dom';
import App from './App';
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

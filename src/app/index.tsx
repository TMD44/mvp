import React from 'react';
import { render } from 'react-dom';
import { configureStore } from 'src/redux/store';
import App from './App';
import './sass/App.global.sass';

const store = configureStore();

render(<App />, document.getElementById('root'));
/*
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

console.log('STORE: ', store);
console.log('STORE CONTENT: ', store.getState());

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery'
import registerServiceWorker from './registerServiceWorker';

console.log('wat', $)

$('App-logo').addClass('testestest')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

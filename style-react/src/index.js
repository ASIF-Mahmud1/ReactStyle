import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

///////////////////////////////////////////////////
import Button from './Practice/Button'
import AppBar from './Practice/AppBar/AppBar'
import MenuBar from './Practice/AppBar/MenuBarProject/MenubarIndex.js'
//////////////////////////////////////////////////

ReactDOM.render(<MenuBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

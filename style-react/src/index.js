import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


///////////////////////////////////////////////////
import Button from './Practice/Button'
import AppBar from './Practice/AppBar/AppBar'
// My first footsteps to Victory :')
// import PieChart from './Practice/Victory/PieChart'
// import BarChart from './Practice/Victory/BarChart'
// import Polygon from './Practice/Victory/Polygon'
import AreaAnimations from './Practice/Victory/AreaAnimation'
import Animation from './Practice/Victory/Animation'
import BarAnimation from './Practice/Victory/BarAnimation'
import Quadratic from    './Practice/Victory/QuadraticFunction.js'
import Start from       './Practice/MathematicalExprssion/Start.js'
//////////////////////////////////////////////////

ReactDOM.render(<Start />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

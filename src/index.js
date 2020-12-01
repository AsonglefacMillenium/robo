import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Card from './Card';
import 'tachyons';
import {
    friends
} from './friends';


import Cardlist from './Cardlist';

ReactDOM.render( <
    React.StrictMode >
    <
    Cardlist friends = { friends }
    / > < /
    React.StrictMode > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
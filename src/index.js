import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import 'tachyons';
import {
    friends
} from './friends';

ReactDOM.render( <
    React.StrictMode > < div > <
    Card id = { friends[0].id }
    name = { friends[0].name }
    username = { friends[0].username }
    email = { friends[0].email }
    / >

    <
    Card id = { friends[1].id }
    name = { friends[1].name }
    username = { friends[1].username }
    email = { friends[1].email }
    / > <
    Card id = { friends[2].id }
    name = { friends[2].name }
    username = { friends[2].username }
    email = { friends[2].email }
    / > <
    Card id = { friends[3].id }
    name = { friends[3].name }
    username = { friends[3].username }
    email = { friends[3].email }
    / > <
    Card id = { friends[4].id }
    name = { friends[4].name }
    username = { friends[4].username }
    email = { friends[4].email }
    / > <
    Card id = { friends[5].id }
    name = { friends[5].name }
    username = { friends[5].username }
    email = { friends[5].email }
    / >

    <
    / div> < /
    React.StrictMode > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
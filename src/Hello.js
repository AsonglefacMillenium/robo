import React, { Component } from 'react';

import './Hello.css'

const Hello = (props) => {

    return ( < div className = "f1 tc bg-blue" >
        <
        h1 > Welcome to < /h1>  <
        p > { props.greeting } < /p>    < /
        div >
    );

}

export default Hello;
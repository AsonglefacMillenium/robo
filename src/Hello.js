import React, { Component } from 'react';

import './Hello.css'

class Hello extends Component {
    render() {
        return ( < div >
            <
            h1 > Welcome to < /h1>  <
            p > { this.props.greeting } < /p>    < /
            div >
        );
    }
}

export default Hello;
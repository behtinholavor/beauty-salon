import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './styles.css';

export default class Footer extends Component {
    render() {
        return (
            <Jumbotron id="jumbo">
                <p id="jumbo-p">by Powered Weebin Systems - Brazil @2019 - All rights reserved</p>
            </Jumbotron>
        );
    }
}

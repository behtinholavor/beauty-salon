import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <Nav className="justify-content-center" id="nav-header">
                <Navbar.Brand id="nav-header-brand" href="#">Salão de Beleza</Navbar.Brand>
            </Nav>
        );
    }
}

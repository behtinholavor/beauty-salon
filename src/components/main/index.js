import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaCut, FaShower, FaMoneyCheckAlt, FaInfo } from 'react-icons/fa';


import './styles.css';

export default class Main extends Component {
    render() {
        return (
            <CardGroup id="main-cardgroup">
                <Card className="main-card">
                    <Card.Link href="salao" style={{ color: 'hotpink' }} >
                        <Card.Body>
                            <Card.Title>Salão</Card.Title>
                            <Card.Text><h1><FaCut /></h1></Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card className="main-card">
                    <Card.Link href="servicos" style={{ color: 'hotpink' }} >
                        <Card.Body>
                            <Card.Title>Serviços</Card.Title>
                            <Card.Text><h1><FaShower /></h1></Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card className="main-card">
                    <Card.Link href="precos" style={{ color: 'hotpink' }} >
                        <Card.Body>
                            <Card.Title>Preços</Card.Title>
                            <Card.Text><h1><FaMoneyCheckAlt /></h1></Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card className="main-card">
                    <Card.Link href="sobre" style={{ color: 'hotpink' }} >
                        <Card.Body>
                            <Card.Title>Sobre</Card.Title>
                            <Card.Text><h1><FaInfo /></h1></Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </CardGroup >
        );
    }
}

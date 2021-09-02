import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {StylesSheet} from './css/cards.css';

const Cards = (props) => {
    console.log(props);
    return (
    <Card style={{ width: '18rem' }} className="itemCard">
        <Card.Img variant="top" src={props.productos.src} />
        <Card.Body>
            <Card.Title>{props.productos.Nombre}</Card.Title>
            <Card.Text>
            {props.productos.Descripcion}
            </Card.Text>
            <Card.Text>
            ${props.productos.Precio}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>
    
    );
};
export default Cards

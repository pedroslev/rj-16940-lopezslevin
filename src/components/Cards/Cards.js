import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {StylesSheet} from './css/cards.css';
import ItemCount from '../ItemCounter/ItemCount.js';


const Cards = (props) => {

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
            <ItemCount stock={props.productos.stock} />
            <div className="Buy">
            <Button variant="primary">Comprar</Button>
            </div>
        </Card.Body>
    </Card>
    
    );
};
export default Cards

import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {StylesSheet} from './css/cards.css';
import ItemCount from '../ItemCounter/ItemCount.js';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


function ProductViewer() {
    
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const url = "http://localhost:3001/products";
        fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw response;
            }
        })
        .then((items) => setItems(items))
        .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))
    }, []);

    

    return (
        <div>
            <Container>
                <Row>
        {
            items.map((products) => {
                if(products.stock != 0){
                return <Card style={{ width: '16rem' }} className="itemCard">
                <a href={`/products?id=` + products.id} >
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                    {products.description}
                    </Card.Text>
                    <Card.Text>
                    ${products.price}
                    </Card.Text>
                    <ItemCount stock={products.stock} />
                    <div className="Buy">
                    <Button variant="primary">Comprar</Button>
                    </div>
                </Card.Body>
                </a>
                </Card>
                
                
                
                }
            })
        }
        </Row>
        </Container>
        </div>
        
    )
}

export default ProductViewer

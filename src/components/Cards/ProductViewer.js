import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {StylesSheet} from './css/cards.css';
import ItemCount from '../ItemCounter/ItemCount.js';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ProductViewer() {
    
    const [items, setItems] = React.useState([]);
    const [categoria, setCategoria] = React.useState([]);
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
        .then(()=>{
        let url = window.location.href;
        let params = (new URL(url)).searchParams;
        let categoria = params.get('categoria')
        setCategoria(categoria)
        console.log(categoria)
        })
        .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))
    }, []);

    return (
        <div>
            <Container>
                <Row>
        {
            items.map((products) => {
                if((products.stock != 0 && products.categoria == categoria) || categoria == null){
                return <Card style={{ width: '16rem' }} className="itemCard">
                    <Link to={`/products?id=` + products.id}>
                <Card.Img variant="top" src={products.image} />
                </Link>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                    ${products.price}
                    </Card.Text>
                    <ItemCount key={products.stock} stock={products.stock} />
                    <div className="Buy">
                    <Button variant="primary">Comprar</Button>
                    </div>
                </Card.Body>                
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

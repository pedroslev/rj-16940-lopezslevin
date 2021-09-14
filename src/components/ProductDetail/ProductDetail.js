import React from 'react'
import {Stylesheets} from './css/productdetail.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProductDetail() {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let id = params.get('id')

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const urldb = "http://localhost:3001/products/"+id;
        fetch(urldb)
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
        
            <div className="ProductImage">
            <Container>
              <Row>
                  <Col sm={6}>
                  <Card>
                    <Card.Img variant="top" src={items.image} />
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                      <Card.Text>
                      {items.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
               
                  </Col>
              </Row>
            </Container>
                    </div>
        


        
    )
}

export default ProductDetail

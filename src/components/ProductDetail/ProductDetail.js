import React from 'react'
import './css/productdetail.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getFirestore } from '../../firebase/firebase';

function ProductDetail() {
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    let id = params.get('id')

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
      const  db = getFirestore();
      const productsCollection = db.collection('products');
      const product = productsCollection.doc(id)
      product
      .get()
      .then((querySnapshot) => {
          if(querySnapshot.empty){
              console.log("No hay tal producto")
          }else{
              const data = {id: querySnapshot.id, ...querySnapshot.data() };
              setItems(data)
          }
      })
      .catch((error) => console.log(`Error al cargar datos de firebase: ${error.status}`))
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

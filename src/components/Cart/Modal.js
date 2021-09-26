import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/CartContext';

function Cart(props) {

  const {cart} = useCart();
  console.log(cart)

  //SUPRA TEST
  const [carro, setCarro] = React.useState([]);
  React.useEffect(() => {
    for (let index = 0; index < carro.length; index++) {  
      const url = "http://localhost:3001/products/"+cart[index].id;
      fetch(url)
      .then((response) => {
          if(response.ok){
              return response.json();
          }else{
              throw response;
          }
      })
      .then((carro) => setCarro(carro))
      .then(()=> console.log(carro))
      .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))
  }}, []);
  
  
  
  
    return (
        <>
            <Modal
            {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tu carro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
              </tr>
            </thead>
            <tbody id="order">
            {
            carro.map((products) => {
            <tr>
              <td>${products.title}</td>
              <td>${carro[0].cantidad}</td>
              <td>${products.price * carro[0].cantidad}</td>
            </tr>
            })
            }
            <tr id="totalprice">
            </tr>
            </tbody>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
    </>
    
    )
}

export default Cart

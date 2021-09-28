import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/CartContext';
import trash from './media/trash.svg'

function Cart(props) {

  const {cart, DeleteCart, ClearCart} = useCart();
  const largo = cart.length
  let total = 0
  for (let index = 0; index < largo; index++) {
    total = total + cart[index].price * cart[index].cantidad
  }

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
            cart.map((products) => {
                return  <tr>
                <td>{products.title}</td>
                <td>{products.cantidad}</td>
                <td>${products.price}</td>
                <td><button className="btn btn-outline-secondary" onClick={() => DeleteCart(products.id)}><img style={{width: '1em'}} src={trash}></img></button></td>
              </tr>
              })
            }
            <tr id="totalprice">
              <td></td>
              <td>Total: </td>
              <td>${total}</td>
            </tr>
            </tbody>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={ClearCart}>Vaciar</Button>
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
        <Button variant="success" href="/buy">Comprar</Button>
      </Modal.Footer>
    </Modal>
    </>
    
    )
}

export default Cart

import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/CartContext';
import trash from './media/trash.svg'
import { Link } from 'react-router-dom';

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
        cart.length > 0 ? cart.map((products) => {
        return(
            <tr>
              <td>{products.title}</td>
              <td>{products.cantidad}</td>
              <td>${products.price}</td>
              <td><button className="btn btn-outline-secondary" onClick={() => DeleteCart(products.id)}><img alt="trash icon" style={{width: '1em'}} src={trash}></img></button></td>
            </tr>
        )})
      : 
      <tr>
      </tr>
      }
      {
        largo != 0 ?
        <tr id="totalprice">
        <td></td>
        <td>Total: </td>
        <td>${total}</td>
      </tr>
      :
      <p></p>
      }

            </tbody>
          </table>
      </Modal.Body>
      <Modal.Footer>
        {largo != 0 ?
          <Button variant="danger" id="emptyCart" onClick={ClearCart}>Vaciar</Button>
          :
          <p></p>
        }
        
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
        {
        largo != 0 ?
        <Link to="/checkout" ><Button variant="success" id="comprar" onClick={props.onHide}>Comprar</Button></ Link>
        :
        <p></p>
        }
        
      </Modal.Footer>
    </Modal>
    </>
    
    )
}

export default Cart

import React from 'react';
import Modal from './Modal.js';
import Button from 'react-bootstrap/Button';
import './css/Cart.css';
import cartlogo from './media/cart.svg'
import { useCart } from '../../context/CartContext';

function Cart() {
    const [modalShow, setModalShow] = React.useState(false);
    const {cartLength, cart} = useCart();

  let items = 0;
  for (let index = 0; index < cart.length; index++) {
    items = items + parseInt(cart[index].cantidad);
  }

    return (
    <>
    <div className="Cart sticky Ocultar" id="cartwidget">
    <Button variant="dark" onClick={() => setModalShow(true)}>
          <img src={cartlogo} className="cartsvg" alt=""/>{items} Tu Carrito
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    </>
  );
}

export default Cart

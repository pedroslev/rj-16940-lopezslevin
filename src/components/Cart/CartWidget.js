import React from 'react';
import Modal from './Modal.js';
import Button from 'react-bootstrap/Button';
import './css/Cart.css';
import cartlogo from './media/cart.svg'
import { CartProvider, useCart } from '../../context/CartContext';

function Cart() {
    const [modalShow, setModalShow] = React.useState(false);
    const {cartLength} = useCart();



    return (
    <>
    <div className="Cart sticky Ocultar" id="cartwidget">
    <Button variant="dark" onClick={() => setModalShow(true)}>
          <img src={cartlogo} className="cartsvg" alt=""/>{cartLength} Tu Carrito
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

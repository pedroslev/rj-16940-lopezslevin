import React from 'react';
import Modal from './Modal.js';
import Button from 'react-bootstrap/Button';
import './css/Cart.css';
import cartlogo from './media/cart.svg'

function Cart(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
    <>
    <div className="Cart sticky" id="cartwidget">
    <Button variant="dark" onClick={() => setModalShow(true)}>
          {/* no esta cargando la imagen svg */}
          <img src={cartlogo} className="cartsvg" alt=""/>{props.items} Tu Carrito
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

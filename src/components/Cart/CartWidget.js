import React from 'react';
import Modal from './Modal.js';
import Button from 'react-bootstrap/Button';
import {Stylesheet} from './css/Cart.css';

function Cart() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <div className="Cart sticky">
    <Button variant="primary" onClick={() => setModalShow(true)}>
          {/* no esta cargando la imagen svg */}
          <img src="./media/cart.svg" alt=""/>Tu Carrito
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

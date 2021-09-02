import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function Cart(props) {
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
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
              </tr>
            </thead>
            <tbody id="order">
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

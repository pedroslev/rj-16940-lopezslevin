import React from 'react'
import '../css/buy/buy.css'
import icon from "../media/icon.png"
import { useCart } from '../context/CartContext';
import { getFirestore } from '../firebase/firebase';

function Checkout(props) {
  document.getElementById('cartwidget').classList.add('Ocultar')
  const {cart} = useCart(props);
  console.log(cart)
  let total = 0
  for (let index = 0; index < cart.length; index++) {
    total = total + (cart[index].price * cart[index].cantidad)
  }



function Payment(nombre, phone, email){


  const  db = getFirestore();
  const orders = db.collection('orders');
  //convert custom react js object into pure javascript object to firebase add Doc fix
  const carro = cart.map((obj)=> {return Object.assign({}, obj)});
  let newOrder = {buyer: {nombre: nombre, telefono: phone, mail: email},
   items: carro,
   date: new Date(),
   total: total}

   orders.add(newOrder)
   .finally(() => alert("Su orden ha sido registrada con exito!"))
   .catch((error) => console.log(error))

  
}
    return (
      <>
        <section className="shopping-cart dark">
        <div className="container" id="container">
          <div className="block-heading">
            <h2>Carro</h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  <div className="product">
                    <div className="info">
                      <div className="product-details">
                        <div className="row justify-content-md-center">
                          <div className="col-md-3">
                            <img className="img-fluid mx-auto d-block image" src={icon} />
                          </div>
                          <div className="col-md-4 product-detail">
                            <h5>Productos</h5>
                            <table className="table table-sm">
                            <thead>
                              <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Precio x Cant</th>
                              </tr>
                            </thead>
                            <tbody id="order">
                              {
                            cart.map((products) => {
                            return(
                                <tr>
                                  <td>{products.title}</td>
                                  <td>{products.cantidad}</td>
                                  <td>${products.price}</td>
                                  <td>${products.price * products.cantidad}</td>
                                </tr>
                            )})
                            }
                            </tbody>
                          </table>
                          </div>
                          <div className="col-md-12 product-detail">
                            <label for="PayerName" style={{width: '8em'}}><h5>Nombre *</h5></label>
                            <input style={{width: '10em'}} className="form-control" id="PayerName" />
                            <label for="PayerPhone" style={{width: '8em'}}><h5>Telefono *</h5></label>
                            <input style={{width: '10em'}} className="form-control" id="PayerPhone" />
                            <label for="PayerEmail" style={{width: '8em'}}><h5>Email *</h5></label>
                            <input style={{width: '10em'}} className="form-control" id="PayerEmail" />
              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <div className="summary-item"><span className="text" style={{fontWeight: '700'}}>Subtotal:  ${total}</span><span className="price" id="cart-total"></span></div>
                  <button className="btn btn-primary btn-lg btn-block" onClick={() => {Payment(document.getElementById('PayerName').value, document.getElementById('PayerPhone').value, document.getElementById('PayerEmail').value)}}>Terminar mi compra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Checkout

import React from 'react'
import '../css/buy/buy.css'
import icon from "../media/icon.png"
import { useCart } from '../context/CartContext';

function Checkout(props) {
  document.getElementById('cartwidget').classList.add('Ocultar')
  const {cart} = useCart(props);
  let total = 0
  for (let index = 0; index < cart.length; index++) {
    total = total + (cart[index].price * cart[index].cantidad)
  }

  // SDK de Mercado Pago
  const mercadopago = require ('mercadopago');
  // Agrega credenciales
  mercadopago.configure({
  access_token: 'TEST-5216061197824640-021822-1b407daa90b33541af8a578bfb31b3ee-264568386'
  });

  
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'DevBar Product',
      unit_price: total,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});


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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <div className="summary-item"><span className="text" style={{fontWeight: '700'}}>Subtotal:  ${total}</span><span className="price" id="cart-total"></span></div>
                  <button className="btn btn-primary btn-lg btn-block" id="checkout-btn">Terminar mi compra</button>
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

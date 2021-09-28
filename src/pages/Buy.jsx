import React from 'react'
import '../css/buy/buy.css'
import icon from "../media/icon.png"
function Buy() {
    return (
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
                            {/* ACA VAN LOS PRODUCTOS MEDIANTE CONTEXT */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Carro</h3>
                  <div className="summary-item"><span className="text">Subtotal</span><span className="price" id="cart-total"></span></div>
                  <button className="btn btn-primary btn-lg btn-block" id="checkout-btn">Pagar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      /* recordar integrar mercadopago */
    )
}

export default Buy

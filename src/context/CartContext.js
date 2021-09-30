import * as React from "react";
import Navbar from '../components/NavBar/NavBar'
import Buy from '../pages/Checkout'

const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])
    const [carro, setCarro] = React.useState([]);
    class cartdetail {
        constructor(id, title, price, cantidad){
            this.id = id;
            this.title = title
            this.price = price
            this.cantidad = cantidad;
        }
    }

    function DeleteCart(id){
        let aux = [];
        document.getElementById('buy'+id).disabled = false
        for (let index = 0; index < cart.length; index++) {
        if(id != cart[index].id){
        aux.push(new cartdetail(cart[index].id, cart[index].title, cart[index].price, cart[index].cantidad))
        }
        setCart(aux);
        }
    }

    const ClearCart = () => {
        let aux = [];
        let largo = cart.length
        for (let index = 0; index < largo; index++) {
            document.getElementById('buy'+cart[index].id).disabled = false
        }
        setCart(aux);
    }

    //add to cart
    function AddToCart(id, title, price, cantidad){
    let prod = cart;
    document.getElementById('buy'+id).disabled = true
    prod.push(new cartdetail(id, title, price, cantidad))
    setCart(prod);
    <CartProvider>
        <Navbar />
        <Buy />
    </ CartProvider>
    }
        return <CartContext.Provider value={{cart, setCart, DeleteCart, AddToCart, ClearCart}}>{children}</CartContext.Provider>
    }

    
    export const useCart = () => {
        const context = React.useContext(CartContext)
        return context
    }

    
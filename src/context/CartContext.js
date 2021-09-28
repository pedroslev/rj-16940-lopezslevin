import * as React from "react";
import Navbar from '../components/NavBar/NavBar'

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
        for (let index = 0; index < cart.length; index++) {
        if(id != cart[index].id){
        aux.push(new cartdetail(cart[index].id, cart[index].title, cart[index].price, cart[index].cantidad))
        }
        setCart(aux);
        }
    }

    //add to cart
    function AddToCart(id, cantidad){
        let prod = cart;
        document.getElementById('buy'+id).disabled = true

  //fetch del producto with id
    const url = "http://localhost:3001/products/"+id;
    fetch(url)    
    .then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw response;
        }
    })
    .then((carro) => setCarro(carro))
    .then(() =>{prod.push(new cartdetail(id, carro.title, carro.price, cantidad))})
    .then(() => {setCart(prod)})
    .then(() => console.log(prod))
    .finally(() => {
    <CartProvider>
        <Navbar />
    </CartProvider>})
    .catch((error) => console.log(`Error al cargar datos de json-db: ${error.status}`))    
        }
        return <CartContext.Provider value={{cart, setCart, DeleteCart, AddToCart}}>{children}</CartContext.Provider>
    }
    
    export const useCart = () => {
        const context = React.useContext(CartContext)
        return context
    }

    
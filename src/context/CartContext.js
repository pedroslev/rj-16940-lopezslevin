import * as React from "react";
import Navbar from '../components/NavBar/NavBar'

const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])
    class cartdetail {
        constructor(id, cantidad){
            this.id = id;
            this.cantidad = cantidad;
        }
    }
    //add to cart
    function AddToCart(id, cantidad){
        let prod = cart;
        document.getElementById('buy'+id).disabled = true
        prod.push(new cartdetail(id, cantidad))
        setCart(prod);
        <CartProvider>
            <Navbar />
        </CartProvider>
        }
    return <CartContext.Provider value={{cart, setCart, AddToCart}}>{children}</CartContext.Provider>;
    }
    
    export const useCart = () => {
        const context = React.useContext(CartContext)
        return context
    }
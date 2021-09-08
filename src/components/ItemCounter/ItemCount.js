import React from 'react';
import {StylesSheet} from './css/itemcounter.css';
import Add from './media/plus.svg';
import Minus from './media/minus.svg';
import Button from 'react-bootstrap/Button';


function ItemCount(props) {

    const [cantidad, setCantidad] = React.useState(1);

    let cantidadHandler = (op, stock) => {
        if(op == 1){
            console.log(stock)
            if(cantidad != stock){
                setCantidad(cantidad + 1);
            }else{
                alert("Has alcanzado el maximo stock disponible");
            }
        }else{
            if(cantidad != 1){
                setCantidad(cantidad - 1);
            }else{
                alert("No puedes tener cantidades menores a 1")
            }
            
        }
      
    };
    
    return (
        <div className="Quantity">
            <Button variant="outline-danger" onClick={() => cantidadHandler('2', props.stock)}><img src={Minus}/></Button><p>{cantidad}</p><Button variant="outline-success" onClick={() => cantidadHandler('1', props.stock)}><img src={Add}/></Button>
        </div>
    )
}

export default ItemCount

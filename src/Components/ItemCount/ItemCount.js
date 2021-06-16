import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFillDashCircleFill } from 'react-icons/bs';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const[items, setItems] = useState(initial);
    const addItem =  () => {
       items < stock ? setItems(items + 1) : alert("No se pueden agregar más unidades de este producto");
    }
    const removeItem = () =>{
        items > initial ? setItems(items - 1) : alert("La cantidad no puede ser menor a 1");
    }
    return (
        <div className="product-card-unique">
            <div className="prod-amount">
                <BsFillDashCircleFill className="counter-button" onClick={removeItem}/>
                <span className="amount">Cantidad: {items}</span>
                <BsFillPlusCircleFill className="counter-button" onClick={addItem}/>
            </div>
            <button className="btn btn-dark mt-2" onClick={() => onAdd(items)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;

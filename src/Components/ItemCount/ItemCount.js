import React, {useState} from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFillDashCircleFill } from 'react-icons/bs';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd, price}) => {
    
    const[count, setCount] = useState(initial); 

    const updateStock = stock - count;

    const addItem = (e) => {
        e.preventDefault();
        count < Number(stock) ? setCount(count + 1) : alert("No se pueden agregar más unidades de este producto");
    }

    const removeItem = (e) => {
        e.preventDefault();
        count > initial ? setCount(count - 1) : alert("La cantidad debe ser mayor a 0");
    }
    
    return (
        <div className="product-card-unique">
            <div className="prod-amount">
                <p>Stock disponible: {updateStock}</p>
                <BsFillDashCircleFill className="counter-button" onClick={(count) => removeItem(count)}/>
                <span className="amount">Cantidad: {count}</span>
                <BsFillPlusCircleFill className="counter-button" onClick={(count) => addItem(count)}/>
                <p className="price">Precio Total: $ {count*price} </p>
                <button className="btn btn-dark mt-2" onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;

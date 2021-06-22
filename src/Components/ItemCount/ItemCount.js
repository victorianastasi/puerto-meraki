import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFillDashCircleFill } from 'react-icons/bs';
import './ItemCount.css';

const ItemCount = ({value, stock, addItem, removeItem}) => {
    
    return (
        <div className="product-card-unique">
            <div className="prod-amount">
                <p>Stock: {stock-value}</p>
                <BsFillDashCircleFill className="counter-button" onClick={(e) => removeItem(e)}/>
                <span className="amount">Cantidad: {value}</span>
                <BsFillPlusCircleFill className="counter-button" onClick={(e) => addItem(e)}/>
            </div>
            
        </div>
    );
}

export default ItemCount;

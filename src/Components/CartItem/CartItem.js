import React, { useContext} from 'react';
import './CartItem.css';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext);
    
    return (
        <div className="row row-item">
            <div className="col-12 col-sm-3">
                <img src={item.pictureUrl} className="cart-item-image" alt={item.title}/>
            </div>
            <div className="col-12 col-sm-3">
                <p className="item-cart-text">{item.title}</p>
            </div>
            <div className="col-12 col-sm-2">
                <p className="item-cart-text">Cantidad: {quantity}</p>
            </div>
            <div className="col-12 col-sm-2">
                <p className="item-cart-text">Precio: $ {item.price * quantity}</p>
            </div>
            <div className="col-12 col-sm-2">
                <button className="btn btn-remove" onClick={() => removeItem(item.id)}>Quitar</button>
            </div>
        </div>
    )
}

export default CartItem;

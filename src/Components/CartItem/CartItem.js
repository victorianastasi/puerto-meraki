import React, { useContext} from 'react';
import './CartItem.css';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div className="row row-item p-2">
            <div className="col-3">
                <img src={item.pictureUrl} className="cart-item-image" alt={item.title}/>
            </div>
            <div className="col-3">
                <p>{item.title}</p>
            </div>
            <div className="col-2">
                <p>Cantidad: {quantity}</p>
            </div>
            <div className="col-2">
                <p>Precio: $ {item.price * quantity}</p>
            </div>
            <div className="col-2">
                <button className="btn btn-dark" onClick={() => removeItem(item.id)}>Quitar</button>
            </div>
        </div>
    )
}

export default CartItem;

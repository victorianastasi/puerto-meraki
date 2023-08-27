import React, { useContext } from "react";
import "./CartItem.css";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="row-items-container">
      <div className="row-items">
        <div className="item-cart item-cart-image">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
        <div className="item-cart">
          <p className="item-cart-text">{item.title}</p>
        </div>
        <div className="item-cart">
          <p className="item-cart-text">Cantidad: {quantity}</p>
        </div>
        <div className="item-cart">
          <p className="item-cart-text">Precio: $ {item.price * quantity}</p>
        </div>
        <div className="item-cart">
          <button
            className="btn btn-dark btn-remove"
            onClick={() => removeItem(id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

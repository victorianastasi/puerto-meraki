import React, { useContext } from 'react';
import './NavBar.css';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    let quantityItems = 0;
  
    for (let i = 0; i < cart.length; i++) {
        quantityItems = quantityItems + cart[i].quantity;
    }
    return (
        <div>
        <span className="quantity-widget">∙ {quantityItems} ∙</span>
            <MdShoppingCart />
        </div>
    );  
};

export default CartWidget;
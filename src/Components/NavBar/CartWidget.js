import React, { useContext } from 'react';
import './NavBar.css';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    let quantityWidgetItems = 0;
  
    for (let i = 0; i < cart.length; i++) {
        quantityWidgetItems = quantityWidgetItems + cart[i].quantity;
    }

    return (
        <div>
            {quantityWidgetItems === 0 ? null : <span className="quantity-widget">∙ {quantityWidgetItems} ∙</span>}
            <MdShoppingCart />
        </div>
    );  
};

export default CartWidget;
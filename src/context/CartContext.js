import React, { useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item, quantity) => {
        setCart([...cart, { item, quantity }]);
        console.log("Item:", item, "Quantity:", quantity);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((x) => x.item.id !== itemId));
    };
  
    const clear = () => {
        setCart([]);
    };
    
    const isInCart = (id) => {
        const productItem = cart.find((x) => x.item.id === id);
        if (productItem) {
            return true;
        } else {
            return false;
        }
    };

    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart}}>
        {children}
      </CartContext.Provider>
    );
};


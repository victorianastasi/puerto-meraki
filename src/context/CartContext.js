import React, { useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item, quantity, id) => {
        setCart([...cart, { item, quantity, id }]);
        console.log("Item:", item, "Quantity:", quantity, "id:", id );
    };

    const removeItem = (ItemId) => {
        setCart(cart.filter((x) => x.id !== ItemId));
    };
  
    const clear = () => {
        setCart([]);
    };
    
    const isInCart = (id) => {
        const productItem = cart.find((x) => x.id === id);
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


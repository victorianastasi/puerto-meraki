import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const [total, setTotal] = useState(0);

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

    useEffect(() => {
        const TotalAmount = () => {
            let totalPrice = 0;
            for (let i = 0; i < cart.length; i++) {
                totalPrice += cart[i].item.price * cart[i].quantity;
            }
            return totalPrice;
        };
        setTotal(TotalAmount());
    }, [cart]);
    
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total}}>
        {children}
      </CartContext.Provider>
    );
};
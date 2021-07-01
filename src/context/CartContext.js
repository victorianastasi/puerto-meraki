import React, { useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item, quantity) => {
        setCart([...cart, { item, quantity }]);
        console.log("Item:", item, "Quantity:", quantity);
    };
    console.log(cart)

    const removeItem = (itemId) => {
        console.log(itemId);
        setCart(cart.filter((re) => re.item.id !== itemId));
    };
  
    const clear = () => {
        console.log("Vaciar el carrito");
        setCart([]);
    };
  
    const isInCart = (id) => {
        console.log(id);
        const productItem = cart.find((item) => item.id === id);
        if (productItem) {
            return true;
        } else {
            return false;
        }
    };
  
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
        {children}
      </CartContext.Provider>
    );
};


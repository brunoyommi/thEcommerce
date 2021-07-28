import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const clearCart = () =>{
        setCartItems([]);
        setCartCount(0);
    }
    const removeFromCart = (item) => {
        const result = cartItems.filter(anItem => anItem.title != item.title);
        setCartItems(result);
        setCartCount(prev => prev - item.qty);
    }

    const addToCart = (item, qty) => {
        if (qty > 0) {
            if (cartItems.some(anItem => anItem.title === item.title)) {
                const copy = [...cartItems];
                const repeatedIndex = cartItems.findIndex(anItem => anItem.title === item.title);
                copy[repeatedIndex] = {
                    ...copy[repeatedIndex],
                    qty: copy[repeatedIndex].qty + qty
                };
                setCartItems(copy);
            } else {
                setCartItems([...cartItems, { ...item, qty }])
            }
            setCartCount(prev => prev + qty);
        }
    }

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
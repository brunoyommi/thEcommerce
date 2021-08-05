import React, { useContext, useState } from 'react';
import { getFirestore } from "../firebase";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubtotal] = useState(0);
    const [ordenes, setOrdenes] = useState([]);
    const [confirmacion, setConfirmacion] = useState(null);

    const createOrder = (form) =>{
        form.preventDefault();
        const newOrder = {
            buyer:{
                name: form.target[0].value,
                phone: form.target[1].value,
                email: form.target[2].value
            },
            items: cartItems
        }
        const firestore = getFirestore();
        const collection = firestore.collection("orders");
        const query = collection.add(newOrder);

        query
            .then((resultado)=>{
                setConfirmacion(resultado.id);
            })
            .catch((error)=>{
                console.log(error);
            })

            clearCart();
            setOrdenes();
            setConfirmacion(null);
    }

    const clearCart = () =>{
        setCartItems([]);
        setCartCount(0);
        setSubtotal(0);
    }
    const removeFromCart = (item) => {
        const result = cartItems.filter(anItem => anItem.title !== item.title);
        setCartItems(result);
        setCartCount(prev => prev - item.qty);
        setSubtotal(subTotal - (item.qty * item.price));
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
            setSubtotal(subTotal + (qty * item.price));
        }
    }

    return (
        <CartContext.Provider value={{ confirmacion, ordenes, subTotal, cartCount, cartItems, addToCart, removeFromCart, clearCart, createOrder }}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
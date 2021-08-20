import React, { useContext, useState } from 'react';
import { getFirestore } from "../firebase";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubtotal] = useState(0);
    const [ordenes, setOrdenes] = useState([]);
    const [mostrar, setMostrar] = useState(true);
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [idCompra, setidCompra] = useState ("");

    const createOrder = (form) => {
        form.preventDefault();
        const newOrder = {
            buyer: {
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
            .then((resultado) => {
                setidCompra(resultado.id);
                clearCart();
                console.log("Se limpió el carrito")
                console.log(cartItems)
                setOrdenes();
                console.log("Se limpiaron las ordenes")
                console.log(ordenes)
                setMostrar(false);
                console.log("Se limpio el codigo de confirmacion")
                setCartCount(0);
                console.log("Se limpio la cantidad de items")
                console.log(cartCount)
            })
            .catch((error) => {
                console.log(error);
            })           
    }

    const clearCart = () => {
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
            setMostrarBoton(false);
        }
    }

    return (
        <CartContext.Provider value={{ mostrar, mostrarBoton, idCompra, ordenes, subTotal, cartCount, cartItems, setMostrar,setMostrarBoton, addToCart, removeFromCart, clearCart, createOrder }}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
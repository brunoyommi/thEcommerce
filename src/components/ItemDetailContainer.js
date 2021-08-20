import React from "react";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";
import { useCartContext } from './Context';

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const { cartItems } = useCartContext();

    const { itemId } = useParams();

    useEffect(() => {
        fetchData();
    }, [itemId]);

    const fetchData = async () => {
        const firestore = getFirestore();
        const collection = firestore.collection("products");
        const query = collection.where("id", "==", itemId);
        const resultado = await query.get();
        resultado.forEach(documento => {
            let newValue = documento.data();
            if (cartItems.some(anItem => anItem.title === newValue.title)) {
                const repeatedIndex = cartItems.findIndex(anItem => anItem.title === newValue.title);
                const qtyInCart = cartItems[repeatedIndex].qty;
                newValue.available_quantity = newValue.available_quantity - qtyInCart;
            }
            setItem(newValue);
        })
    }

    return (
        <>
            <div className="container">
                <ItemDetail
                    item={item}
                    title={item.title}
                    image={item.thumbnail}
                    description={item.description}
                    price={item.price}
                    stock={item.available_quantity} />
            </div>
        </>
    )

}
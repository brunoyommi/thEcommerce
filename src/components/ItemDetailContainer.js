import React from "react";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";


export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);

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
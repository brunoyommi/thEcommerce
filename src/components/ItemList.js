import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from "../firebase";

export default function ItemList({ categoryId }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    const fetchData = async () => {
        const firestore = getFirestore();
        const collection = firestore.collection("products");
        setProducts([]);
        if (categoryId != null) {
            const condicion = collection.where("category_id", "==", categoryId);
            const resultado = await condicion.get();
            resultado.forEach(documento => {
                let newValue = documento.data();
                setProducts(oldArray => [...oldArray, newValue]);
            })
        } else {
            const resultado = await collection.get();
            resultado.forEach(documento => {
                let newValue = documento.data();
                setProducts(oldArray => [...oldArray, newValue]);
            })
        }
    }

    return (
        <>
            <div className="itemList container">
                {products.map((product, i) => {
                    return (
                        <>
                            <Link to={`/product/${product.id}`}>
                                <Item
                                    title={product.title}
                                    image={product.thumbnail}
                                    price={product.price}
                                />
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}
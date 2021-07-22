import React from "react";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    const{itemId} = useParams();

    useEffect(() => {
        fetchData();
    }, [itemId]);

    const fetchData = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);        
        const data = await response.json();
        setItem(data);    
    }
    

    return (
        <>
            <div className="container">
                <ItemDetail
                    item={item}                    
                    title={item.title}
                    image={item.thumbnail}
                    price={item.price}/>
            </div>
        </>
    )

}
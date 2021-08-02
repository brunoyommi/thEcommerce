import React from "react";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [description, setDescription] = useState([]);

    const{itemId} = useParams();

    useEffect(() => {
        fetchData();
        fetchDescription();
    }, [itemId]);

    const fetchData = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);        
        const data = await response.json();
        setItem(data);         
    }
    const fetchDescription = async () => {
        const desciptionResponse = await fetch(`https://api.mercadolibre.com/items/${itemId}/description?api_version=2`);        
        const descriptionData = await desciptionResponse.json();
        setDescription(descriptionData.plain_text);     
    }
    

    return (
        <>
            <div className="container">
                <ItemDetail
                    item={item}                    
                    title={item.title}
                    image={item.thumbnail}
                    description={description}
                    price={item.price}
                    stock={item.available_quantity}/>
            </div>
        </>
    )

}
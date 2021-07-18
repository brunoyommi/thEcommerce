import React from "react";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function between() {
        return Math.floor(
            Math.random() * (50 - 0 + 1) + 0
        )
    }

    const fetchData = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=$remeras');
        const data = await response.json();
        const number = between();
        setItem(data.results[number]);
        console.log(data.results);
    }
    return (
        <>
            <div className="container">
                <ItemDetail
                    title={item.title}
                    image={item.thumbnail}
                    price={item.price}/>
            </div>
        </>
    )

}
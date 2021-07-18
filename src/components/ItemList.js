import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';

export default function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=$remeras');
        const data = await response.json();
        console.log(data);
        setProducts(data.results);
    }

    return (
        <>
            <div className="itemList container">
                {products.map((product, i) => {
                    {console.log(product.title)}
                    return (
                        <Item                            
                            title={product.title}
                            image={product.thumbnail}
                            price={product.price} 
                            id={i}/>
                    )
                })}
            </div>
        </>
    )
}
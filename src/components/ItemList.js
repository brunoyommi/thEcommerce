import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemList({categoryId}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
        
    }, [categoryId]);
    
    const fetchData = async () => {
        if( categoryId != null ){
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`);
            const data = await response.json();
            setProducts(data.results);
        }else{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=$ofertas');
            const data = await response.json();
            setProducts(data.results);
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
                                    id={i} />
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}